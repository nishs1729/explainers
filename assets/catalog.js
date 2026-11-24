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
          "blurb": "From a single coin flip to counting events and waiting for them, in steps and in continuous time, to the bell curve and its squares, a distribution for an unknown probability, the laws of the largest values and the heavy tails of power laws, ending with a field guide to all the rest. Each one builds on the last.",
          "topics": ["bernoulli", "binomial", "geometric", "exponential", "poisson", "negative-binomial", "normal", "gamma", "chi-square", "beta", "extreme-values", "power-laws", "field-guide"]
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
        },
        {
          "id": "extreme-values",
          "title": "Extreme Value Distributions",
          "short": "Extreme values",
          "path": "probability/extreme-values.html",
          "summary": "The largest and smallest of many values: Gumbel, Fréchet and Weibull, the weakest link, and why a 100-year flood is not once a century.",
          "tags": ["maximum", "Gumbel", "Weibull", "return period", "generalized Pareto"],
          "preview": { "select": ".hero-play", "click": ["#heroMany", "#heroMany"] }
        },
        {
          "id": "power-laws",
          "title": "Power Laws",
          "short": "Power laws",
          "path": "probability/power-laws.html",
          "summary": "When size breeds size there is no typical value: Pareto and Zipf, the log–log trap, the rich get richer, and averages that never settle.",
          "tags": ["Pareto", "Zipf", "heavy tails", "preferential attachment", "80/20 rule"],
          "preview": { "select": ".hero-play", "click": ["#heroMany"] }
        },
        {
          "id": "field-guide",
          "title": "A Field Guide to Distributions",
          "short": "Field guide",
          "path": "probability/field-guide.html",
          "summary": "Short live cards for two dozen less common distributions, sorted by how they arise, with a map of how every distribution in the series connects.",
          "tags": ["family map", "lognormal", "Cauchy", "von Mises", "random matrices"],
          "preview": { "select": "#familyMap", "click": [] }
        }
      ]
    },
    {
      "id": "statistics",
      "title": "Statistics",
      "blurb": "From data back to the world that made it. Every idea is shown first by simulating chance in your browser, before any formula.",
      "series": [
        {
          "id": "learning-from-data",
          "title": "Learning from data",
          "blurb": "Could chance alone have done this? Starting from line-ups and coin streaks, the series builds the tools for answering that question: sampling, estimation, resampling, tests, intervals and power, ending with the 1954 polio vaccine trial.",
          "topics": ["is-it-real", "sampling-distributions", "selection-bias", "estimation", "bootstrap", "permutation-tests", "p-values", "confidence-intervals", "errors", "power", "student-t", "chi-square-tests", "anova", "forking-paths", "polio-trial"]
        }
      ],
      "topics": [
        {
          "id": "is-it-real",
          "title": "Is That Pattern Real?",
          "short": "Is it real?",
          "path": "statistics/is-it-real.html",
          "summary": "Chance draws convincing trends, streaks and gaps. Spot the real plot in a line-up, try to fake a coin, and meet the three datasets the series keeps coming back to.",
          "tags": ["line-up", "noise", "streaks", "shuffling", "Galton"],
          "preview": { "select": "#heroLU", "click": [] }
        },
        {
          "id": "sampling-distributions",
          "title": "Sampling Distributions",
          "short": "Sampling",
          "path": "statistics/sampling-distributions.html",
          "summary": "Any number computed from a sample is itself random. Run polls, feed a sample machine, and watch the standard error shrink as σ/√n.",
          "tags": ["standard error", "σ/√n", "polls", "central limit theorem", "SD vs SE"],
          "preview": { "select": "#heroPlay", "click": ["#heroMany"] }
        },
        {
          "id": "selection-bias",
          "title": "Who’s Missing?",
          "short": "Who’s missing?",
          "path": "statistics/selection-bias.html",
          "summary": "A biased sample stays wrong however big it gets. Armor a bomber from the holes on the planes that came back, and watch 2.3 million ballots lose to 1,000 random voters.",
          "tags": ["selection bias", "survivorship bias", "nonresponse", "Literary Digest", "Abraham Wald"],
          "preview": { "select": "#heroPlay", "click": ["#heroSkip", "#heroLost"] }        },
        {
          "id": "estimation",
          "title": "What Makes a Good Guess",
          "short": "Good guesses",
          "path": "statistics/estimation.html",
          "summary": "Estimate how many tanks the enemy built from a few serial numbers, then race recipes in a tank factory to see bias, variance, mean squared error, robustness and consistency.",
          "tags": ["estimator", "bias", "variance", "mean squared error", "German tank problem"],
          "preview": { "select": "#heroPlay", "click": ["#heroSkip"] }
        },
        {
          "id": "bootstrap",
          "title": "The Bootstrap",
          "short": "Bootstrap",
          "path": "statistics/bootstrap.html",
          "summary": "One sample, no formula for the median: resample your own data with replacement to see how much an estimate wobbles, check it against s/√n, and watch where it fails.",
          "tags": ["bootstrap", "resampling", "standard error", "percentile interval", "Efron"],
          "preview": { "select": "#heroPlay", "click": ["#heroSkip", "#heroGo"] }
        },
        {
          "id": "permutation-tests",
          "title": "Shuffling to Test",
          "short": "Shuffling",
          "path": "statistics/permutation-tests.html",
          "summary": "If the groups don't matter, shuffling the labels changes nothing. Taste tea like Fisher's lady, shuffle the button test, and flip all 1,024 signs of the sleep trial.",
          "tags": ["permutation test", "randomization", "lady tasting tea", "sign flip", "Fisher"],
          "preview": { "select": "#heroPlay", "click": ["#heroAll4"] }
        },
        {
          "id": "p-values",
          "title": "p-values",
          "short": "p-values",
          "path": "statistics/p-values.html",
          "summary": "How surprising the data would be if chance alone were at work, and not the chance that it is. Watch p-values rain down flat under no effect, pile up near 0 with one, and catch the classic misreadings.",
          "tags": ["p-value", "significance", "misreadings", "power", "ASA statement"],
          "preview": { "select": "#heroPlay", "click": ["#heroSkip", "#heroGo"] }
        },
        {
          "id": "confidence-intervals",
          "title": "Confidence Intervals",
          "short": "Intervals",
          "path": "statistics/confidence-intervals.html",
          "summary": "What the ± in a poll promises: watch 100 intervals rain down and about 5 miss, see why widths shrink like 1/√n, how intervals and tests agree, and where the simple interval breaks.",
          "tags": ["confidence interval", "margin of error", "coverage", "Wilson interval", "1.96"],
          "preview": { "select": "#heroPlay", "click": ["#heroSkip", "#heroGo"] }
        },
        {
          "id": "errors",
          "title": "Errors and Decisions",
          "short": "Errors",
          "path": "statistics/errors.html",
          "summary": "Play quality inspector for 50 batches, then see your false alarms and misses on the trade-off curve: moving the cutoff swaps one mistake for the other, and the costs decide where it belongs.",
          "tags": ["type I error", "type II error", "false alarm", "alpha", "decision threshold"],
          "preview": { "select": "#heroPlay", "click": ["#heroSkip"] }
        },
        {
          "id": "power",
          "title": "Power and Sample Size",
          "short": "Power",
          "path": "statistics/power.html",
          "summary": "Why the button test found nothing: run 100 tests at 1,000 visitors per button and only about 27 catch a real lift. Trace power curves, plan a study, and watch underpowered winners exaggerate.",
          "tags": ["power", "sample size", "type II error", "winner's curse", "type M error"],
          "preview": { "select": "#heroPlay", "click": ["#heroSkip", "#heroGo"] }
        },
        {
          "id": "student-t",
          "title": "Student’s t",
          "short": "Student’s t",
          "path": "statistics/student-t.html",
          "summary": "Why samples of 3 land beyond ±3 one time in ten when the bell curve says three in a thousand: a wobbly s, Gosset’s fix at Guinness, degrees of freedom, and the t-test checked against 1,024 sign flips.",
          "tags": ["t distribution", "t-test", "degrees of freedom", "Gosset", "small samples"],
          "preview": { "select": "#heroPlay", "click": ["#heroSkip", "#heroGo"] }
        },
        {
          "id": "chi-square-tests",
          "title": "Chi-square tests",
          "short": "Chi-square tests",
          "path": "statistics/chi-square-tests.html",
          "summary": "Why a fair die rolled 60 times keeps every face between 8 and 12 only 1 time in 13: observed vs expected cell by cell, a fair-or-loaded die game, the button test as a table (χ² = z²), Mendel’s too-good peas, and when to trust the exact shuffle instead.",
          "tags": ["chi-square test", "goodness of fit", "contingency table", "Mendel", "Fisher's exact test"],
          "preview": { "select": "#heroPlay", "click": ["#heroSkip", "#heroGo"] }
        },
        {
          "id": "anova",
          "title": "ANOVA",
          "short": "ANOVA",
          "path": "statistics/anova.html",
          "summary": "Five fertilizers, five plots each: why ten t-tests on pure noise cry wolf 29% of the time, F as between-group over within-group spread with a drag-the-averages spreader, PlantGrowth checked against the shuffle, and which groups really differ.",
          "tags": ["ANOVA", "F distribution", "multiple comparisons", "Tukey", "Fisher"],
          "preview": { "select": "#heroPlay", "click": ["#heroSkip", "#heroGo"] }
        },
        {
          "id": "forking-paths",
          "title": "The garden of forking paths",
          "short": "Forking paths",
          "path": "statistics/forking-paths.html",
          "summary": "How a Beatles song “made” students younger at p = .040: 20 tests on noise, Bonferroni and false discovery rates, peeking until it works, and a p-hacking sandbox with 486 paths whose discoveries vanish on fresh data.",
          "tags": ["p-hacking", "multiple testing", "false discovery rate", "pre-registration", "replication"],
          "preview": { "select": "#heroPlay", "click": ["#heroSkip", "#heroGo"] }
        },
        {
          "id": "polio-trial",
          "title": "The 1954 polio vaccine trial",
          "short": "Polio trial",
          "path": "statistics/polio-trial.html",
          "summary": "A case study of the 1.8-million-child Salk vaccine trial: why vaccinating volunteers understated the effect (29 vs 42 cases prevented per 100,000), a trial simulator, the shuffle test, intervals and why rare outcomes need enormous trials.",
          "tags": ["randomized trial", "case study", "selection bias", "placebo", "Salk"],
          "preview": { "select": "#heroPlay", "click": ["#heroSkip", "#heroGo"] }
        }
      ]
    }
  ]
};
