#!/usr/bin/env python3
"""Make the home-page card images, one light and one dark per explainer.

For each topic in assets/catalog.js this opens the page in headless Chrome,
clicks the buttons listed in its "preview.click" so the widget has something
to show, hides everything except the "preview.select" element (and its
buttons, hints and legends), screenshots it and crops it to 16:10.

    python3 tools/thumbs.py            # every topic
    python3 tools/thumbs.py poisson    # just these ids

Needs google-chrome (or chromium) on PATH and Pillow.
"""
import json, os, shutil, subprocess, sys, tempfile
from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "thumbs"
W, H = 640, 400          # output size (16:10)
SCALE = 2                # render at 2x, then downsample


def load_catalog():
    src = (ROOT / "assets" / "catalog.js").read_text()
    body = src[src.rindex("window.EXPLAINERS =") + len("window.EXPLAINERS ="):].strip().rstrip(";")
    return json.loads(body)


def chrome():
    for name in ("google-chrome", "chromium", "chromium-browser", "google-chrome-stable"):
        if shutil.which(name):
            return name
    sys.exit("thumbs.py: no Chrome/Chromium found on PATH")


HARNESS = """<script>
try { localStorage.setItem('xp-theme', '%(theme)s'); } catch (e) {}
document.documentElement.setAttribute('data-theme', '%(theme)s');
window.addEventListener('load', () => setTimeout(() => {
  document.documentElement.setAttribute('data-theme', '%(theme)s');
  %(clicks)s.forEach(s => { const b = document.querySelector(s); if (b) b.click(); });
  setTimeout(() => {
    const el = document.querySelector(%(select)s);
    if (!el) { document.title = 'THUMB-MISSING'; return; }
    for (let n = el; n && n !== document.body; n = n.parentElement)
      for (const s of n.parentElement.children) if (s !== n && s.tagName !== 'SCRIPT') s.style.display = 'none';
    el.querySelectorAll('.controls,.hint,.legend,.readout').forEach(x => x.style.display = 'none');
    document.body.style.padding = '24px 0';
    window.scrollTo(0, 0);
  }, 1500);
}, 400));
</script></body>"""


def shoot(topic, theme, tmp, browser):
    page = ROOT / topic["path"]
    html = page.read_text()
    base = '<base href="%s/">' % page.parent.as_uri().rstrip("/")
    pv = topic.get("preview", {})
    html = html.replace("<head>", "<head>" + base, 1)
    html = html.replace("</body>", HARNESS % {
        "theme": theme,
        "clicks": json.dumps(pv.get("click", [])),
        "select": json.dumps(pv.get("select", ".hero")),
    }, 1)
    harness = tmp / f"{topic['id']}-{theme}.html"
    harness.write_text(html)
    shot = tmp / f"{topic['id']}-{theme}.png"
    r = subprocess.run([browser, "--headless=new", "--disable-gpu", "--hide-scrollbars",
                    "--allow-file-access-from-files", f"--force-device-scale-factor={SCALE}",
                    "--virtual-time-budget=9000", "--window-size=880,1100",
                    f"--screenshot={shot}", harness.as_uri()],
                   stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, timeout=120)
    if r.returncode or not shot.exists():
        sys.exit(f"thumbs.py: Chrome failed on {topic['id']} ({theme}):\n" + r.stderr.decode(errors="replace")[-2000:])
    return shot


def crop(path, dest):
    im = Image.open(path).convert("RGB")
    bg = im.getpixel((2, 2))
    diff = ImageChops.difference(im, Image.new("RGB", im.size, bg)).convert("L").point(lambda v: 255 if v > 12 else 0)
    box = diff.getbbox()
    if not box:
        raise RuntimeError(f"{path.name}: screenshot is blank")
    pad = 16 * SCALE
    l, t, r, b = box
    l, t, r, b = max(0, l - pad), max(0, t - pad), min(im.width, r + pad), min(im.height, b + pad)
    # grow the box to 16:10 around its center, filling with the background
    w, h = r - l, b - t
    if w / h < W / H:
        w2 = round(h * W / H); l -= (w2 - w) // 2; w = w2
    else:
        h2 = round(w * H / W); t -= (h2 - h) // 2; h = h2
    canvas = Image.new("RGB", (w, h), bg)
    canvas.paste(im.crop((max(l, 0), max(t, 0), min(l + w, im.width), min(t + h, im.height))), (max(0, -l), max(0, -t)))
    canvas.resize((W, H), Image.LANCZOS).save(dest, optimize=True)


def main():
    want = set(sys.argv[1:])
    cat = load_catalog()
    topics = [t for c in cat["categories"] for t in c["topics"] if not want or t["id"] in want]
    if want - {t["id"] for t in topics}:
        sys.exit(f"thumbs.py: unknown ids: {', '.join(sorted(want - {t['id'] for t in topics}))}")
    OUT.mkdir(parents=True, exist_ok=True)
    browser = chrome()
    with tempfile.TemporaryDirectory() as d:
        tmp = Path(d)
        for t in topics:
            for theme in ("light", "dark"):
                dest = OUT / f"{t['id']}-{theme}.png"
                crop(shoot(t, theme, tmp, browser), dest)
                print(f"wrote {dest.relative_to(ROOT)}  ({dest.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
