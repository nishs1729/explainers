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
    "tagline": "Interactive, visual introductions to ideas worth understanding properly.",
    "repo": "https://github.com/nishs1729/explainers"
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
          "blurb": "From a single coin flip to counting events and waiting for them, in steps and in continuous time, to the bell curve and its squares, and a distribution for an unknown probability itself. Each one builds on the last.",
          "topics": ["bernoulli", "binomial", "geometric", "exponential", "poisson", "negative-binomial", "normal", "gamma", "chi-square", "beta"]
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
        },
        {
          "id": "negative-binomial",
          "title": "The Negative Binomial Distribution",
          "short": "Negative binomial",
          "path": "probability/negative-binomial.html",
          "summary": "Waiting for the r-th success, and the go-to model when counts vary more than a Poisson allows.",
          "tags": ["overdispersion", "gamma–Poisson mixture", "waiting time", "dispersion", "model fitting"],
          "preview": { "select": ".hero-play", "click": ["#heroMany", "#heroMany", "#heroMany"] }
        },
        {
          "id": "normal",
          "title": "The Normal Distribution",
          "short": "Normal",
          "path": "probability/normal.html",
          "summary": "Add up almost anything and you get a bell: the central limit theorem, z-scores, the square-root law, and where the bell fails.",
          "tags": ["central limit theorem", "bell curve", "z-score", "standard error", "lognormal"],
          "preview": { "select": ".hero-play", "click": ["#heroMany", "#heroMany"] }
        },
        {
          "id": "gamma",
          "title": "The Gamma Distribution",
          "short": "Gamma",
          "path": "probability/gamma.html",
          "summary": "How long until the k-th event? Sums of exponential waits, the Poisson link, the gamma function and the go-to model for an uncertain rate.",
          "tags": ["waiting time", "Erlang", "gamma function", "conjugate prior", "chi-square"],
          "preview": { "select": ".hero-play", "click": ["#heroMany", "#heroMany", "#heroMany"] }
        },
        {
          "id": "chi-square",
          "title": "The Chi-Square Distribution",
          "short": "Chi-square",
          "path": "probability/chi-square.html",
          "summary": "Square some normal numbers and add them up: degrees of freedom, distances in many dimensions, the chi distribution and the spread of a sample.",
          "tags": ["sum of squares", "degrees of freedom", "Rayleigh", "sample variance", "high dimensions"],
          "preview": { "select": ".hero-play", "click": ["#heroMany", "#heroMany"] }
        },
        {
          "id": "beta",
          "title": "The Beta Distribution",
          "short": "Beta",
          "path": "probability/beta.html",
          "summary": "A distribution for an unknown probability: its many shapes, the k-th smallest of n random points, ratios of gammas, and learning a coin's bias from flips.",
          "tags": ["proportion", "order statistics", "beta function", "conjugate prior", "PERT"],
          "preview": { "select": ".hero-play", "click": ["#heroMany", "#heroMany"] }
        }
      ]
    }
  ]
};
