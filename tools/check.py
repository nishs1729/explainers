#!/usr/bin/env python3
"""Consistency checks for the site. Run before committing:

    python3 tools/check.py

Checks that:
  - every catalog entry points to an existing page, ids are unique and every
    series lists topics from its own category;
  - every .html page under a category folder is in the catalog;
  - every explainer page loads the shared site files;
  - every relative link and src in every page resolves, including #anchors;
  - every topic has light and dark card images (warning only).
Exits with status 1 if anything other than a warning fails.
"""
import json, re, sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parent.parent
errors, warnings = [], []


def load_catalog():
    src = (ROOT / "assets" / "catalog.js").read_text()
    marker = "window.EXPLAINERS ="
    return json.loads(src[src.rindex(marker) + len(marker):].strip().rstrip(";"))


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.refs = set(), []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a:
            self.ids.add(a["id"])
        if tag == "a" and "name" in a:
            self.ids.add(a["name"])
        for key in ("href", "src"):
            if a.get(key) and tag != "base":
                self.refs.append((tag, a[key], self.getpos()[0]))


def parse(path, cache={}):
    if path not in cache:
        p = Page()
        p.feed(path.read_text())
        cache[path] = p
    return cache[path]


def main():
    cat = load_catalog()
    seen, paths = {}, set()
    for c in cat["categories"]:
        ids = {t["id"] for t in c["topics"]}
        for t in c["topics"]:
            if t["id"] in seen:
                errors.append(f"catalog: duplicate id '{t['id']}'")
            seen[t["id"]] = t
            for field in ("title", "path", "summary"):
                if not t.get(field):
                    errors.append(f"catalog: '{t['id']}' has no {field}")
            p = ROOT / t["path"]
            paths.add(p.resolve())
            if not p.is_file():
                errors.append(f"catalog: '{t['id']}' points to missing file {t['path']}")
            for theme in ("light", "dark"):
                if not (ROOT / "assets" / "thumbs" / f"{t['id']}-{theme}.png").is_file():
                    warnings.append(f"no {theme} card image for '{t['id']}' (run tools/thumbs.py {t['id']})")
        for s in c.get("series", []):
            for tid in s["topics"]:
                if tid not in ids:
                    errors.append(f"catalog: series '{s['id']}' lists '{tid}', which is not a topic in '{c['id']}'")

    pages = sorted(p for p in ROOT.rglob("*.html") if ".git" not in p.parts and "node_modules" not in p.parts)
    for p in pages:
        rel = p.relative_to(ROOT)
        if p.parent != ROOT and p.resolve() not in paths:
            errors.append(f"{rel}: not listed in assets/catalog.js")
        text = p.read_text()
        if p.resolve() in paths:
            for need in ("assets/site.css", "assets/catalog.js", "assets/site.js"):
                if need not in text:
                    errors.append(f"{rel}: does not load {need}")
        for tag, ref, line in parse(p).refs:
            u = urlsplit(ref)
            if u.scheme or ref.startswith("//") or ref.startswith("data:") or ref.startswith("javascript:"):
                continue
            target = p if not u.path else (p.parent / unquote(u.path)).resolve()
            if u.path.endswith("/"):
                target = target / "index.html"
            if not target.exists():
                errors.append(f"{rel}:{line}: {tag} '{ref}' points to a missing file")
                continue
            if u.fragment and target.suffix == ".html" and u.fragment not in parse(target).ids:
                # ids added at runtime (e.g. category sections on the home page)
                if not (target.name == "index.html" and u.fragment in {c["id"] for c in cat["categories"]}):
                    errors.append(f"{rel}:{line}: '{ref}': no element with id '{u.fragment}'")

    for w in warnings:
        print("warning:", w)
    for e in errors:
        print("error:", e)
    print(f"checked {len(pages)} pages, {len(seen)} catalog entries: {len(errors)} errors, {len(warnings)} warnings")
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
