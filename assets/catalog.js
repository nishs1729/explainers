/*
 * The list of every explainer. The home page, the top bar and the
 * previous/next links on each page are all built from this file.
 *
 * Keep the part after "window.EXPLAINERS =" valid JSON (double-quoted keys,
 * no trailing commas, no comments): tools/check.py and tools/thumbs.py read it.
 *
 * categories[].topics   every explainer in the category, in display order
 *   id        short name, unique across the site
 *   path      relative to the site root
 *   short     short label for series steps and compact lists
 *   preview   how tools/thumbs.py makes the card image: the element to
 *             capture and buttons to click first so it has something to show
 * categories[].series   topics meant to be read in order (optional); a topic
 *             not listed in any series is shown as standalone
 */
window.EXPLAINERS = {
  "site": {
    "title": "Explainers",
    "tagline": "Interactive, visual introductions to ideas worth understanding properly."
  },
  "categories": [
    {
      "id": "probability",
      "title": "Probability",
      "blurb": "Randomness you can poke at: every distribution is built from simulations running live in your browser.",
      "series": [
        {
          "id": "distributions",
          "title": "Probability distributions",
          "blurb": "From a single coin flip to counting and waiting for rare events. Each one builds on the last.",
          "topics": ["bernoulli", "binomial", "geometric", "exponential", "poisson"]
        }
      ],
      "topics": [
        {
          "id": "bernoulli",
          "title": "The Bernoulli Distribution",
          "short": "Bernoulli",
          "path": "probability/bernoulli.html",
          "summary": "One try, two outcomes. The simplest random experiment, and the building block for everything after it.",
          "tags": ["coin flip", "expected value", "variance", "maximum likelihood"],
          "preview": { "select": "#seesaw", "click": [] }
        },
        {
          "id": "binomial",
          "title": "The Binomial Distribution",
          "short": "Binomial",
          "path": "probability/binomial.html",
          "summary": "Repeat a yes/no experiment n times and count the yeses: Pascal's triangle, the Galton board and confidence intervals.",
          "tags": ["counting", "Pascal's triangle", "normal approximation", "confidence interval", "hypothesis test"],
          "preview": { "select": ".hero-play", "click": ["#heroMany", "#heroMany", "#heroMany"] }
        },
        {
          "id": "geometric",
          "title": "The Geometric Distribution",
          "short": "Geometric",
          "path": "probability/geometric.html",
          "summary": "How many tries until it works? Waiting for the first success, why nothing is ever due, and collecting a full set of stickers.",
          "tags": ["waiting time", "memoryless", "first success", "coupon collector", "gambler's fallacy"],
          "preview": { "select": ".hero-play", "click": ["#heroMany", "#heroMany", "#heroMany"] }
        },
        {
          "id": "exponential",
          "title": "The Exponential Distribution",
          "short": "Exponential",
          "path": "probability/exponential.html",
          "summary": "How long until the next one? Waiting times, memorylessness, the bus paradox and races between clocks.",
          "tags": ["waiting time", "memoryless", "Poisson process", "inspection paradox", "survival"],
          "preview": { "select": ".hero-play", "click": ["#heroMany"] }
        },
        {
          "id": "poisson",
          "title": "The Poisson Distribution",
          "short": "Poisson",
          "path": "probability/poisson.html",
          "summary": "How many? Counts of rare events, from horse kicks and flying bombs to the illusion that randomness is evenly spread.",
          "tags": ["counting", "rare events", "overdispersion", "chi-square", "clustering"],
          "preview": { "select": "#heroField", "click": ["#heroMany", "#heroMany"] }
        }
      ]
    }
  ]
};
