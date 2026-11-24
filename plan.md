# Plan

## Probability
### **[Probability distributions](#probability-distributions)**

- [x] [Bernoulli](https://nishs1729.github.io/explainers/probability/bernoulli.html)
- [x] [Binomial](https://nishs1729.github.io/explainers/probability/binomial.html)
- [x] [Geometric](https://nishs1729.github.io/explainers/probability/geometric.html)
- [x] [Exponential](https://nishs1729.github.io/explainers/probability/exponential.html)
- [x] [Poisson](https://nishs1729.github.io/explainers/probability/poisson.html)
- [x] [Negative binomial](https://nishs1729.github.io/explainers/probability/negative-binomial.html)
- [x] [Normal](https://nishs1729.github.io/explainers/probability/normal.html)
- [x] [Gamma](https://nishs1729.github.io/explainers/probability/gamma.html)
- [x] [Chi-square](https://nishs1729.github.io/explainers/probability/chi-square.html)
- [x] [Beta](https://nishs1729.github.io/explainers/probability/beta.html)
- [x] [Extreme values](https://nishs1729.github.io/explainers/probability/extreme-values.html)
- [x] [Power laws](https://nishs1729.github.io/explainers/probability/power-laws.html)
- [x] [A Field Guide to Distributions](https://nishs1729.github.io/explainers/probability/field-guide.html)

## Statistics
See [Statistics: how every page works](#statistics-conventions) first.

### [Learning from data](#learning-from-data)
- [x] [1. Is that pattern real?](https://nishs1729.github.io/explainers/statistics/is-it-real.html)
- [x] [2. Sampling distributions](https://nishs1729.github.io/explainers/statistics/sampling-distributions.html)
- [x] [3. ⚠ Who's missing?](https://nishs1729.github.io/explainers/statistics/selection-bias.html)
- [x] [4. What makes a good guess](https://nishs1729.github.io/explainers/statistics/estimation.html)
- [x] [5. The bootstrap](https://nishs1729.github.io/explainers/statistics/bootstrap.html)
- [x] [6. Shuffling to test](https://nishs1729.github.io/explainers/statistics/permutation-tests.html)
- [x] [7. p-values](https://nishs1729.github.io/explainers/statistics/p-values.html)
- [x] [8. Confidence intervals](https://nishs1729.github.io/explainers/statistics/confidence-intervals.html)
- [x] [9. Errors and decisions](https://nishs1729.github.io/explainers/statistics/errors.html)
- [x] [10. Power and sample size](https://nishs1729.github.io/explainers/statistics/power.html)
- [x] [11. Student's t](https://nishs1729.github.io/explainers/statistics/student-t.html)
- [x] [12. Chi-square tests](https://nishs1729.github.io/explainers/statistics/chi-square-tests.html)
- [x] [13. ANOVA](https://nishs1729.github.io/explainers/statistics/anova.html)
- [x] [14. ⚠ The garden of forking paths](https://nishs1729.github.io/explainers/statistics/forking-paths.html)
- [x] [15. 📖 The 1954 polio vaccine trial](https://nishs1729.github.io/explainers/statistics/polio-trial.html)

### [Bridge](#bridge)
- [x] [16. Likelihood](https://nishs1729.github.io/explainers/statistics/likelihood.html)

### [Bayesian inference](#bayesian-inference)
- [ ] [17. Bayes' theorem](#bayes-theorem)
- [ ] [18. Updating beliefs](#updating-beliefs)
- [ ] [19. Choosing priors](#priors)
- [ ] [20. Credible intervals](#credible-intervals)
- [ ] [21. Comparing models](#model-comparison)
- [ ] [22. Shrinkage](#shrinkage)
- [ ] [23. MCMC](#mcmc)
- [ ] [24. ⚠ The prosecutor's fallacy](#prosecutors-fallacy)
- [ ] [25. 📖 Finding Air France 447](#air-france-447)

### [Relationships and regression](#regression)
- [ ] [26. Correlation](#correlation)
- [ ] [27. Least squares](#least-squares)
- [ ] [28. ⚠ Regression to the mean](#regression-to-mean)
- [ ] [29. Is the slope real?](#slope-inference)
- [ ] [30. Multiple regression](#multiple-regression)
- [ ] [31. ⚠ Simpson's paradox](#simpsons-paradox)
- [ ] [32. Overfitting](#overfitting)
- [ ] [33. Logistic regression](#logistic-regression)
- [ ] [34. Generalised linear models](#glm)
- [ ] [35. 📖 The Challenger O-rings](#challenger)

### [Capstones](#capstones)
- [ ] [36. Two lenses, one dataset](#two-lenses)
- [ ] [37. A field guide to tests](#test-guide)

---

# Probability

<a id="probability-distributions"></a>
## Probability distributions

From a single coin flip to counting, waiting, the bell curve and its squares.
The remaining pages widen the view: proportions, extremes, power laws, and a
guide to everything else. Each page builds on the earlier ones.

---

# Statistics

<a id="statistics-conventions"></a>
## Statistics: how every page works

Probability pages are each about *a thing* (a distribution). Statistics pages are each about
*a way of reasoning*, so they are built differently. These rules apply to all 37 pages; the
per-page entries below only list what is specific to each page.

### One idea per page
- Every page has a single central idea, stated in one sentence (the **Idea** line below).
  If a section doesn't serve that idea, it belongs on another page.
- 5–7 sections, **one centrepiece widget** (marked ★) that carries the idea, plus 1–3 small
  supporting widgets. Shorter than the probability pages.

### Page anatomy (in this order)
1. **Hook.** Open with the concrete question or true story (the **Hook** line). No jargon in
   the first screen; the concept gets its name only once the reader needs it.
2. **Predict.** Before any reveal, the reader commits a guess: drags a marker, picks an answer,
   types a number (the **Predict first** line). Afterwards, show their guess next to the truth.
3. **Simulate.** Answer the question by brute force: sampling, shuffling, resampling, live in
   the browser. This is where the idea is *felt*.
4. **Shortcut.** Only now the formula or named test, presented as a fast approximation to the
   simulation the reader just watched. Overlay formula and simulation in one chart.
5. **When it fails / how it fools you.** Assumptions, misreadings, the trap.
6. **Uses** and **quiz.** The quiz always includes one "predict" question and one
   "which of these readings is wrong" question.

### Simulation first
- Resampling (bootstrap, shuffling) is introduced on pages 5–6, *before* any named test.
  Every later test (t, χ², F, regression slopes) is shown next to its shuffle/bootstrap
  equivalent so the reader sees they agree.
- Downey's frame, used throughout: *every test is the same test*: compute a number from the
  data, build the world where nothing is going on, see where your number lands.

### Games and interaction patterns (reused across pages)
- **Line-up:** 20 small plots, 19 made by chance and one real; click the real one.
  Used on pages 1, 26, 29, 31.
- **Predict slider:** drag where you think the answer is, then reveal.
- **Scoreboard:** the reader makes many decisions; the page tallies their hits and misses.
  Used on pages 9, 10, 22.
- **Cheat sandbox:** the reader tries to get a "result" out of noise. Pages 14, 32.
- **Your own data:** most centrepieces have a "use my data" mode: draw a population, paste
  numbers, or flip a real coin and type the results.

### Running datasets (the cast)
Introduced on page 1, reused everywhere so the reader never re-learns a context. Embed the
same numbers on every page that uses them.
- **Button test (A/B):** a website tests its gray button (A) against an orange one (B).
  A: 1,000 visitors, 50 clicks (5.0%). B: 1,000 visitors, 64 clicks (6.4%).
  Deliberately *ambiguous*: two-proportion z ≈ 1.35, p ≈ 0.21 by shuffling (0.18 by formula), yet with flat priors
  P(B better) ≈ 0.91. Needs ~4,300 per arm for 80% power. Pages 1, 6–10, 12, 18, 20, 36.
- **Sleep trial:** the real Cushny & Peebles (1905) data that Student used in 1908
  (R's `sleep` dataset): extra hours of sleep for 10 patients on two drugs.
  Drug 1: 0.7, −1.6, −0.2, −1.2, −0.1, 3.4, 3.7, 0.8, 0.0, 2.0.
  Drug 2: 1.9, 0.8, 1.1, 0.1, −0.1, 4.4, 5.5, 1.6, 4.6, 3.4.
  Paired differences: mean 1.58, t ≈ 4.06 (df 9). Small n makes it perfect for exact
  shuffles (2¹⁰ = 1,024 sign flips) and for t. Pages 4, 5, 6, 11, 20.
- **Heights:** Galton's family records as transcribed by Hanley (2004), the `GaltonFamilies`
  dataset: 205 families, 934 adult children (481 sons). Mid-parent = (father + 1.08 × mother)/2.
  Sons vs mid-parent: r = 0.48. Page 1 embeds the full data as a compact string (father, mother,
  children in tenths of an inch; daughters negative); copy it from there. Pages 1, 26–30, 36.

### Visual language (consistent on every page)
- Same theme tokens as the probability pages. **Real data** = `--accent`; **chance /
  simulated** worlds = `--ink-3` (muted gray); **the reader's own guess or data** = `--gold`;
  right/wrong = `--one`/`--zero`. Coin heads/tails = `--one`/`--zero`.
- The observed value is always a solid vertical line in `--accent` (its mirror for two-sided
  comparisons dashed); null-distribution bars beyond it turn `--accent`.
- In a line-up all panels are drawn in `--ink-2` until the reveal; then the real one turns
  `--accent` and a wrong pick is outlined in `--zero`.
- Individual observations are dots; collections of statistics are histograms that build up
  live as samples arrive (never appear all at once).

### Words and notation
- Say "chance alone" before "null hypothesis", "how much it wobbles" before "standard
  error"; introduce the technical term in bold right after the plain one, once.
- n, x̄, s, θ (true value), θ̂ (estimate), SE. Bayesian pages: prior, likelihood, posterior.
- American spelling on the pages, as in the probability series.

### Accuracy
- Every historical number (polio trial, Challenger, AF447, Berkeley, tank counts…) is checked
  against the cited source before publishing, and the source is named on the page.
- The usual simplified tellings (Wald's bombers, Mendel) say so where the record is more
  nuanced.

### Catalog
- New category `statistics`, folder `statistics/`, file name = the anchor id below
  (`statistics/is-it-real.html`, …). `chi-square-tests` keeps its `-tests` suffix so ids
  stay unique across the site.
- Series: **Learning from data** (1–15), **Bayesian inference** (16–25, with Likelihood as
  its first step), **Relationships and regression** (26–35). The two capstones (36–37) are
  standalone.

---

<a id="learning-from-data"></a>
## Learning from data

Turning probability around: from data back to the process that made it. Everything is
done first by simulation; the classical tests arrive as shortcuts on pages 11–13.
Assumes the probability series, especially Normal (CLT, √n law) and Chi-square.

<a id="is-it-real"></a>
### **1. Is that pattern real?**

> **Idea:** chance alone produces convincing patterns, so before believing a pattern you need to know how big noise is.
>
> **Hook:** "One of these 20 plots is real data. The other 19 are pure chance. Which one is real?"
>
> **Predict first:** pick the real plot in the line-up before anything is explained.
>
> **Sections:**
>   - **The line-up**: find the real plot; most people can't when the effect is small
>   - **Noise has a size**: the same coin, ten runs of 20 flips; how far they wander
>   - **Meet the cast**: the button test, the sleep trial and the heights, each with the question we'll keep asking of it
>   - **The one question of statistics**: could chance alone have done this? (preview of the whole series)
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Line-up: 20 panels (scatter, bar or time series), signal strength slider, streak counter; when you fail to spot it, the page says "so this pattern wouldn't convince a careful person either"
>   - Streak finder: random coin sequences with the longest run highlighted; "do these look random?"
>
> **Data:** introduces all three running datasets.
>
> **Links:** builds on Binomial, Poisson ("random looks clumpy"). Leads to Sampling distributions. Line-up method: Buja et al. (2009), Wickham et al. (2010).
>
> **Built:** the hero is the line-up on real Galton data (30 sons, 19 shuffles). The line-up game's slider shows each strength as a correlation (two-group gaps converted with d/√(d²+4)), and section 1 defines correlation in plain words. The coin histogram shades 6–14 heads with its live share. The cast section gives each dataset a "show me chance" button (identical buttons, all 1,024 drug relabelings, 1,000 son shuffles), each locked behind a guess (how often identical buttons differ by 1.4+ points; how many relabelings reach 1.58 h; how often a shuffle reaches 0.48) that is said back beside the answer. While shuffling, the heights scatter keeps the real fitted line as a faint guide. Section 4 adds the three-step recipe. The "fake a coin" widget is this page's use-my-data mode. Sources include Hasanhodzic, Lo & Viola (2010).

<a id="sampling-distributions"></a>
### **2. Sampling distributions**

> **Idea:** any number computed from a sample is itself random, with its own distribution.
>
> **Hook:** "Two pollsters each ask 1,000 people and get 52% and 49%. Is one of them wrong?"
>
> **Predict first:** drag a band over where you think 95% of sample means (n = 25) will fall, before collecting.
>
> **Sections:**
>   - One sample, one number; many samples, a distribution
>   - **How much it wobbles**: the spread of the sample mean, σ/√n (the **standard error**)
>   - **Spread of data vs spread of an estimate**: two histograms that look alike and mean different things
>   - **Not just the mean**: medians, maxima and SDs have sampling distributions too (some are not bell-shaped)
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Sample machine: choose a population (including one you draw), sample size and statistic; samples fall in as dots and their statistic drops into a histogram below
>   - Side-by-side: data histogram vs histogram of sample means, with n slider
>
> **Links:** builds on Normal (√n law, CLT), Chi-square (sample variance), Extreme values (sample max).
>
> **Built:** the hero polls a country of 20,000 voters (true support 50.6%) with polls of 1,000, with the hook's 52% and 49% marked on the strip. The sample machine offers five populations (Galton's sons, exponential waiting times with mean 8, a two-hump "geyser" mixture, flat 0–100, and one the reader paints), four statistics, n from 1 to 100, and a drag-to-draw 95% band. The band must be drawn or skipped before sampling, is asked for again whenever the population or statistic changes, and is compared in words with the middle 95% actually observed. Population values are exact where known. Section 2 checks σ/√n at n = 1, 4, …, 100 by simulation and covers the margin of error and why population size doesn't matter. Section 3 compares one sample (n up to 250) with 2,000 sample means. Section 4 shows mean, median, maximum and SD side by side, with the median's spread as a multiple of the mean's (about 1.2–1.45× on Galton's rounded heights). Shared helpers, styles and Galton data are copied from page 1.

<a id="selection-bias"></a>
### **3. ⚠ Who's missing?**

> **Idea:** a biased sample stays biased however big it gets; more data only makes you more confident in the wrong answer.
>
> **Hook:** "Returning WWII bombers are riddled with holes in the wings and fuselage. Where should the armour go?" (Abraham Wald; note that the popular telling simplifies his actual memo)
>
> **Predict first:** click where to add armour on the plane.
>
> **Sections:**
>   - **The planes that didn't come back**: survivorship bias
>   - **Bigger doesn't help**: biased sample of 100 vs 100,000, both confidently wrong (the 1936 *Literary Digest* poll)
>   - **Kinds of missing**: who answers surveys, who stays in a study, which funds still exist
>   - **Random sampling is the cure**, and why it is rarer than it sounds
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Bomber: hits land uniformly; planes hit in some zones don't return; the reader watches the returning-hole map form and sees the gap
>   - Bias vs n: a filtered population sampled at growing n; the interval tightens around the wrong value
>
> **Links:** builds on Sampling distributions. Returns in Regression to the mean, Simpson's paradox.
>
> **Built:** the hero is the bomber, in the order of the story: it opens with every hole found on about 200 returning planes (missions of 20; hits Poisson with mean 2, landing evenly; hidden kill chance per hit: cockpit 70%, engines 75%, wings 5%, fuselage 10%, tail 20%), and the reader picks a part to armor from that evidence (or skips). A strip above shows the latest mission, with downed planes turning red and fading; "Fly another mission" animates one. The reveal fills a second plane beside the first, "didn't come back", showing the hit that downed each lost plane, which clusters on the engines and cockpit. Section 1 charts holes per 100 sq ft by part, for returners and for all planes, from the same shared simulation. Section 2 replays the 1936 *Literary Digest* poll, asking "which would you trust?" before the outcome is told: random vs biased samples from 100 to 2,266,566 on a log axis, with a bias slider (a Landon voter 2.2× as likely to be counted, from the Digest's split vs the real two-party result of 62.5%), presets for 2.2×, 1.1× and 1×, and the "equivalent random sample" (about 6 voters at 2.2×, about 460 at 1.1×). Section 3 has three filters (political interest and survey response, diet-study dropout, fund closures), each starting unfiltered with a guess about which way the filter moves the average, then a strength slider. Sources named on the page: Mangel & Samaniego (1984), Squire (1988), Lusinchi (2012), Lohr & Brick (2017), Pew response rates (36% in 1997, 6% in 2018), AAPOR (2017), the Coronary Drug Project (1980; 15.1% vs 28.3%).

<a id="estimation"></a>
### **4. What makes a good guess**

> **Idea:** a good estimate is both aimed right (low bias) and steady (low variance), and those are different things.
>
> **Hook:** "Captured tanks carry serial numbers 19, 40, 42, 60. How many tanks does the enemy have?" (the German tank problem; statisticians' estimates beat intelligence reports by a wide margin)
>
> **Predict first:** type your estimate of the total before seeing any method.
>
> **Sections:**
>   - **Estimators are recipes**: max, 2×mean, max + max/k − 1 (→ 74 for the hook)
>   - **Bias and variance**: the dartboard
>   - **Mean squared error**: when a little bias is worth it
>   - **Robustness**: mean vs median vs trimmed mean when outliers appear
>   - **Consistency**: getting it right as n grows
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Tank factory: hidden N, capture k tanks, each recipe throws its guess as a dart; run 1,000 captures and see each recipe's cluster
>   - Estimator race on the sleep data with an outlier toggle
>
> **Data:** sleep trial (robustness).
>
> **Links:** builds on Sampling distributions, Chi-square (why n−1). Leads to The bootstrap; MLE is saved for Likelihood.
>
> **Built:** the hero shows the plates 19, 40, 42, 60, takes the reader's estimate, and pins it on a number line next to largest (60), largest + gap (74: 56 uncaptured numbers in 4 gaps of 14) and twice the average (79.5). The reader's guess becomes a fourth recipe, "largest × guess/60", in gold. The ★ tank factory (N 20–500, k 2–20) fills one histogram row per recipe with latest (▼) and average (▲) markers, and flags impossible twice-the-average guesses (below a serial already seen, about 1 capture in 6 at k = 4, N = 100) in red. Section 2 is a 2D dartboard with aim and shakiness sliders whose readout splits the average squared miss into bias² + variance. Section 3 draws stacked bias²/variance bars from the factory's captures (k = 4, N = 100: typical miss largest ≈ 25, twice the average ≈ 28, largest + gap ≈ 20). Section 4 is a draggable sleep-difference dot plot with a 4.6 → 46 typo toggle that leaves the axis fixed and marks 46 off the scale (mean 1.58 → 5.72, median 1.30, 20% trimmed 1.33), plus a race of mean/median/trimmed mean on samples of 10 with 0–30% wild values, showing the share off the chart (the median beats the trimmed mean from 20%). Section 5 plots typical miss against k (N = 1,000) on log–log axes for the three recipes, "twice the first tank" and the reader's own rule, which is shown to be inconsistent (largest × 1.5: ≈ 320 at k = 4, ≈ 470 at k = 48). Ruggles & Brodie (1947) table: June 1940 169/1,000/122, June 1941 244/1,550/271, August 1942 327/1,550/342.

<a id="bootstrap"></a>
### **5. The bootstrap**

> **Idea:** resample your own data with replacement to see how much your estimate would wobble.
>
> **Hook:** "You have one sample of 10 patients and no formula for the median. How sure can you be?"
>
> **Predict first:** guess the width of the range the median could plausibly be in.
>
> **Sections:**
>   - **Pretend your sample is the population**
>   - **Resample with replacement**: some values twice, some not at all
>   - **The bootstrap distribution** and a percentile interval
>   - **It matches the formula**: bootstrap SE of the mean vs s/√n
>   - **When it fails**: tiny samples, the maximum, heavy tails
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Resampler: the 10 sleep differences as tokens; each resample shows which were drawn and adds its median to a growing histogram; speed control from 1 to 10,000
>   - Bootstrap vs true sampling distribution: from a known population, compare the two side by side
>
> **Data:** sleep trial (differences).
>
> **Links:** builds on Sampling distributions, What makes a good guess, Power laws (heavy-tail failure). Efron (1979).
>
> **Built:** the hero shows the 10 sleep differences on a broken axis (−0.3–3 h, then 3–5 h squeezed). The reader drags a gold range for the true median, types one, or skips; then "Check with 2,000 resamples" draws the bootstrap medians and their middle 95% (about 1.0–1.9) and compares the widths. Section 1 is a two-row diagram, real world vs bootstrap world. The ★ resampler uses tokens with ×k badges and faded left-out patients, a chip row of the draws and a dot plot of the resample, median or mean, at speeds 1–10,000 per second plus a +10,000 button. Its readout gives the bootstrap SE (median ≈ 0.23, mean ≈ 0.37) and the patients left out (3.5 on average). Section 3 compares the reader's range in a dynamic callout and notes that at n = 10 the percentile interval covers only about 93%, while the distribution-free 2nd-to-9th-value interval (0.8–2.4 h) covers 97.9%. Section 4 overlays 10,000 bootstrap means on the s/√n bell (0.369 vs 0.389, a ratio of √(9/10)). Section 5 is a truth-vs-bootstrap comparison (the sample on its own axis, with the zoomed window shaded). Its readout says whether the bootstrap's middle 95% contains the truth, and "Draw 50 samples" plots 50 bootstrap/true spread ratios on a log strip. Presets: works (bell mean, n = 20, most of 50 within 25%), tiny sample (median, n = 3, three spikes, ¼–2× the true spread), largest value (flat, n = 20, ~64% spike, the 95% range never contains 100), heavy tails (Pareto α = 1.5 mean, typical ratio under ¼).

<a id="permutation-tests"></a>
### **6. Shuffling to test**

> **Idea:** if the groups don't matter, shuffling the labels changes nothing, so shuffles show what chance alone produces.
>
> **Hook:** "She claims she can taste whether the milk went into the cup first. Eight cups, four of each. How many must she get right?" (Fisher's lady tasting tea)
>
> **Predict first:** before shuffling, guess how often a label-shuffle gives a gap as big as the button test's 1.4 points.
>
> **Sections:**
>   - **The tea test**: 70 ways to pick 4 cups; all correct by luck is 1 in 70
>   - **Shuffle the labels**: the button test, shuffled
>   - **Sign flips for paired data**: the sleep trial, all 1,024 flips exactly
>   - **Every test is this test**: statistic, a world where nothing happens, where you land
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Shuffler: dots coloured by group; press shuffle, labels scramble, the gap drops into a null histogram with the real gap as an accent line; count beyond it
>   - Tea set: choose 4 cups of 8 yourself, then see all 70 arrangements
>
> **Data:** button test, sleep trial.
>
> **Links:** builds on Binomial (counting arrangements), The bootstrap. Leads to p-values.
>
> **Built:** the hero asks how many of the 4 milk-first cups she must catch (at least 2, at least 3, or all 4), restates the choice and shows the 70-way distribution (1/16/36/16/1) with the reader's threshold in gold. The tea set has 8 clickable cups poured at random; after picking 4 and revealing, all 70 choices are drawn as strips stacked into a histogram by number right, with the reader's choice outlined and the columns that would pass their threshold shaded. The outcome is attributed to H. Fairfield Smith via Salsburg (2001). The ★ shuffler shows two 50×20 grids of 1,000 visitors (stacked on phones) with the 50/64 clicks, a predict-first step restated after 300 shuffles (answer: about 1 in 5), and a gap histogram (exact permutation p = 0.21 two-sided; the text notes page 1's 19% came from a slightly different chance world). In the sign flips, clicking a patient flips that bar, alongside random and all-1,024 buttons (2 patterns ≥ +1.58, 4 two-sided = 0.4%, labeled on the histogram; patient 5's 0.0 doubles every pattern). Section 4 gives Downey's three steps and a table covering tea, button, sleep and heights.

<a id="p-values"></a>
### **7. p-values**

> **Idea:** a p-value says how surprising the data would be if chance alone were at work; it is not the probability that chance is at work.
>
> **Hook:** "p = 0.03. Is there a 97% chance the drug works?" (No, and this page shows why.)
>
> **Predict first:** if a drug does nothing and you run 1,000 trials, what shape is the histogram of their p-values?
>
> **Sections:**
>   - **The fraction beyond the line**: p-value read off the shuffle histogram
>   - **What it is not**: the probability the null is true; the size of the effect; the chance of replication
>   - **Under the null, p-values are flat**: uniform between 0 and 1
>   - **With a real effect, they pile up near 0**, more so with bigger n
>   - **Small p, tiny effect**: huge n makes trivial differences "significant"
>   - Uses, quiz
>
> **Widgets:**
>   - ★ p-value rain: run many experiments with a dial for the true effect; each p-value drops into a histogram; flat at zero effect, piling up as it grows
>   - Misreading checker: five sentences about one result; tap the wrong ones
>
> **Data:** button test (p ≈ 0.21 by shuffling, 0.18 by formula).
>
> **Links:** builds on Shuffling to test. Wasserstein & Lazar, ASA statement (2016).
>
> **Built:** the hero poses the p = 0.03 question, then a predict-the-shape step (4 mini histograms), then rains 1,000 null trials into a 20-bin histogram (flat; counts below 0.05 and at or below 0.03), with a link to the duds array. Section 1 shows the exact permutation null of the button gap with a draggable observed line and an either-direction or orange-only toggle (0.210 / 0.105; the text says "0.21 by shuffling (0.18 by formula)"). Section 2's misreading checker has six p = 0.03 sentences, 2 right and 4 wrong (probability of the null, 97% works, size, replication ≈ 58%; the right ones are the definition and "if chance alone were at work… unusual (about 1 in 33)"). Then "How many discoveries are duds?" (`#duds`): a predict step and a 1,000-drug icon array (working drugs in the top rows; significant ones green or red), with sliders for the share that works (1–50%) and power (20–95%) and a toggle for p near 0.03 (0.02–0.04). At defaults (1 in 10, 80%) 36% of discoveries are duds (45 of 125); at 1 in 100, 86%; near p = 0.03, about 2 in 3 (66.7%). Power is introduced there. The ★ p-value rain uses a two-group z-test with a true-effect dial of 0–1 SD (Cohen's labels) and n = 10–500 per group, with presets for no effect and for d = 0.2 at 50 and 500 per group (17% / 89%). Section 5 plots the typical p for a 0.1-point gap (5.0% vs 5.1%) against visitors per button from 1k to 100M (p ≈ 0.001 at 1M, 10⁻²⁴ at 10M); the curve is marked "off the chart" below 10⁻¹². The quiz Q4 is 2 million people, a million per group, p = 0.001.

<a id="confidence-intervals"></a>
### **8. Confidence intervals**

> **Idea:** "95% confident" describes the method, which catches the truth 95% of the time, not any single interval.
>
> **Hook:** "The poll says 52% ± 3%. What exactly does the ± promise?"
>
> **Predict first:** of 100 intervals from 100 polls, how many miss the truth?
>
> **Sections:**
>   - **Estimate ± wobble**: where 1.96 comes from
>   - **Coverage**: 100 intervals, about 5 misses
>   - **Width**: n, confidence level, and the square-root law
>   - **Intervals and tests are the same thing**: 0 outside the interval ⇔ p < 0.05
>   - **When the simple interval fails**: proportions near 0 or 1 (Wald vs Wilson)
>   - Common misreadings; uses, quiz
>
> **Widgets:**
>   - ★ Interval rain: intervals fall as horizontal bars against the true value; misses light up; running coverage counter
>   - Coverage map for proportions across p and n, Wald vs Wilson
>
> **Data:** button test (interval for the difference includes 0).
>
> **Links:** builds on Binomial (its CI section), Normal, The bootstrap, p-values.
>
> **Built:** the hero recalls that 95% of polls of 1,000 land within about 3 points (3.1), asks how many of 100 poll intervals (± 3.1) miss (None / about 5 / about 25 / about half), then adds 100 polls of 1,000 from 50.6% as stacked bars every 25 ms (via setInterval, so it works in background tabs), with misses in red. Section 1 shows the sampling bell in gray with its middle 95% shaded and a draggable poll whose ±3.1 interval turns dark gray (hit) or red (miss); it notes that the bootstrap page's 1.0–1.9 range was a confidence interval. The ★ interval rain offers 80/90/95/99% and n = 25–6,400 (default 400), keeps the last 60 rows and a coverage counter (the simple interval covers only ~93% at n = 25). A "Hide the truth" mode deals 40 polls without the truth line; the reader taps the suspected misses, then reveals them. Section 3 has a width table (95%: ±9.8/4.9/3.1/1.5/1.0; 99%: ±12.9/6.4/4.1/2.0/1.3). Section 4 asks first how many orange clicks drop 0 out (66/71/80/100), then walks the slider to the answer. The chart shows the p-value for "true gap = h" against every h (square-root scale) above the CI for the gap (unpooled SE), with a draggable h line. At 64, −0.6 to +3.4 and p = 0.177; 0 drops out at 71 (+0.01 to +4.2, p = 0.049; at 70, p = 0.059). Section 5 plots exact coverage of the simple (Wald) and Wilson intervals against p for n = 10–1,000 (n = 20, p = 5%: 64% vs 92%; 0 of 20 → Wilson 0–16.1%). Section 6 is a tap-to-judge misreading checker with six readings, 2 right (including that a repeat poll lands inside the first interval only ~83% of the time, and that the interval doesn't prove support is above 49%).

<a id="errors"></a>
### **9. Errors and decisions**

> **Idea:** every decision rule trades false alarms against misses; you choose the balance, you cannot avoid both.
>
> **Hook:** "You're the quality inspector. 50 batches, some faulty. Pass or reject each one."
>
> **Predict first:** the reader plays the game before any terms are introduced; their error rates are revealed at the end.
>
> **Sections:**
>   - **Play the inspector**: decisions under noise
>   - **Two kinds of mistake**: false alarm (type I), miss (type II)
>   - **Moving the threshold**: α and β trade off
>   - **The costs decide**: smoke alarms vs criminal trials
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Inspector game with scoreboard: 50 rounds, each a sample from a good or faulty batch; final screen shows the reader's own α and β as a dot on the trade-off curve
>   - Two-curves threshold: null and alternative distributions with a draggable cutoff, shaded α and β
>
> **Links:** builds on p-values. Leads to Power.
>
> **Built:** the hero is the inspector game: a filling machine puts 100 g in a bag when good and 97 g when drifted (bags ± 3 g); each of 50 batches (30 good, 20 drifted, shuffled) shows 4 bag weights and their average, the reader presses Pass or Reject (keys P/R), and a 50-square scoreboard fills green/red. At the end the canvas turns into the trade-off curve (false alarm rate across, miss rate up, 4 bags: SE 1.5 g, d′ = 2) with the reader's dot; "skip" plays the rest with the rule "reject below 98.5 g". Round 2 ("misses cost 10×") plays 50 more batches; both dots land on the curve, with the reader's round-2 cost against the cheapest rule for those costs (reject below 99.9 g, about 20 units per 50 batches, vs about 37 for 98.5 g); skipping round 2 uses 99.9 g. Section 1 lays out the 50 batch averages in two rows (good/drifted, filled = rejected, green/red = right/wrong) with a draggable rule, the hindsight-best cutoff and whether the reader's decisions match any single cutoff. A second scale gives each weight's one-sided p-value against 100 g, and a button sets the rule to p < 0.05 (97.5 g). Section 2 is the 2×2 table with the game's counts, α, β and the share of rejections that were good (linked to p-values#duds), plus an inspector ↔ test mapping table and the boy-who-cried-wolf aid. Section 3 has the two humps with a draggable cutoff (shaded α and β), bags per batch 1–16, and the trade-off curve with fainter curves for the other n (98.5 g: 15.9%/15.9%; α = 5%: β = 36%; 16 bags: β < 1%). Section 4 asks whether a 10× miss cost moves the cheapest cutoff left or right, then plots expected cost against cutoff for a miss-cost ratio (1/10–50) and drift share (1–60%), marking the cheapest cutoff (defaults 1 and 40%: 98.2 g, α 11.5%, β 21.2%; at 10×: 99.9 g, α 47.9%, β 2.6%; it says "pass almost everything" when the cheapest rule misses over 80%). Then a table of smoke alarm, trial (Blackstone 1769), screening, spam, and Fisher's 1925 "1 in 20" vs 5 sigma.

<a id="power"></a>
### **10. Power and sample size**

> **Idea:** a small study can't see a small effect, and when it does "see" one it exaggerates it.
>
> **Hook:** "The button test found nothing. Does that mean the orange button doesn't work?"
>
> **Predict first:** guess how many visitors per button would be needed to detect 5% → 6.4% reliably (answer: about 4,300).
>
> **Sections:**
>   - **Power**: chance of detecting an effect that is really there
>   - **The three dials**: effect size, n, α
>   - **Planning a study**: power curves
>   - **Absence of evidence**: "not significant" ≠ "no effect"
>   - **The winner's curse**: underpowered studies that succeed overestimate
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Study planner: effect, n and α dials; repeat the study 200 times; scoreboard of hits; power curve traced as you move n
>   - Winner's curse: only "significant" runs are kept; their average effect vs the truth
>
> **Data:** button test.
>
> **Links:** builds on Errors and decisions, Confidence intervals. Gelman & Carlin (2014) on type M errors.
>
> **Built:** the hero asks for a guess of visitors per button (log slider 200–50,000) to catch 5% → 6.4% 8 times in 10, then fills three 10×10 grids of simulated pooled z-tests: 1,000 per button with orange = gray (about 5 false alarms), 1,000 per button with the real lift (~27 of 100 find it) and the reader's size; the answer is 4,300 (exact 4,304), with a "try 4,300" link. Section 1 shows the null and +1.4-point humps for the gap with the cutoffs and shaded power on a log slider (250–50,000 per button, jump buttons 1,000 / 4,300 / 10,000) and α 0.10/0.05/0.01 (at α = 0.05: 27% / 80% / 99%; cutoff ±2.0 / ±1.0 / ±0.6 points). Section 2 is the ★ study planner: true rate 5.5–8%, n 100–50,000 (18 log steps), α 0.10/0.05/0.01; runs of 200 studies fill a 40×5 tile board and add gold dots to a log-n power curve, "trace the whole curve" sweeps all n (the slider follows), and the formula curve is a toggle (8% at 1,000: 78%; at 2,000: 97%). Section 3 plots the formula curves for the five lifts with 80% crossings and a table with one row per lift (80%: 31,200 / 8,200 / 4,300 / 2,200 / 1,100; 90%: 41,800 / 10,900 / 5,800 / 3,000 / 1,400), Lehr's 16σ²/Δ² (~4,400) and Hoenig & Heisey (2001) on observed power (p = 0.05 → 50%, 0.01 → 73%, 0.5 → 10%). Section 4 compares the real test's CI (−0.6 to +3.4) with a 4,300-per-button null result (±0.9) against a draggable "worth having" line (0.2–3.5 points, default 1; Altman & Bland 1995), with a readout of what each interval rules out, and names the equivalence test (two one-sided tests use a 90% interval). Section 5 asks first what the significant tests will average at 1,000 per button (+1.4 / +2 / +2.6 / +4), then runs the winner's curse histogram for 250–10,000 per button (at 1,000: +2.65, 1.9×; at 250: 3.3×, ~4% wrong sign), says the guess back, and plots exaggeration against n from the bell-curve approximation (3.3× / 2.5× / 1.9× / 1.1× / 1.01× at 250 / 500 / 1,000 / 4,300 / 10,000), citing Gelman & Carlin (2014) and the Open Science Collaboration (2015: 97% vs 36% significant, effects about half).

<a id="student-t"></a>
### **11. Student's t**

> **Idea:** when you estimate the spread from the data too, small samples give heavier tails; the t distribution is the shortcut that accounts for it.
>
> **Hook:** "A Guinness brewer can only afford a handful of samples." (Gosset, writing as Student, 1908)
>
> **Predict first:** standardise samples of 3 using s; will extreme values be more or less common than the normal says?
>
> **Sections:**
>   - **The Guinness story**
>   - **Dividing by a wobbly s**: where the heavy tails come from (normal over chi)
>   - **Degrees of freedom**: heavy at n = 3, nearly normal by 30
>   - **The t-test is a shortcut to the shuffle**: sleep trial, t vs sign-flip test side by side
>   - One- and two-sample tests, t intervals; when to prefer the shuffle
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Standardiser: draw small samples, standardise with σ vs with s; two histograms against normal and t curves; n slider
>   - Shuffle vs formula overlay for the sleep trial
>
> **Data:** sleep trial (Student's own example: t ≈ 4.06).
>
> **Links:** builds on Normal, Chi-square (the chi section), Shuffling to test, p-values.
>
> **Built:** the hero asks how often samples of 3, standardized with their own standard error s/√3, land beyond ±3 (Less often / 3 in 1,000 / 1 in 100 / 1 in 10; answer ~9.5%, about 35× the bell curve's 0.27%), builds a histogram of 2,000 such values with the tails in red and counted, overlays Student's t(2) and says the guess back. Section 1 tells the Guinness story (Gosset joined 1899; 1908 Biometrika "The probable error of a mean" as Student, because Guinness did not let its scientists publish under their own names; 3,000 criminals' measurements on cards dealt into 750 samples of 4; the curve partly guessed, proved later by Fisher, who also named t and degrees of freedom). Section 2 is the ★ standardizer: n = 2–30 from a bell-shaped or skewed (shifted exponential) population with mean 100 and σ 10; the latest sample with σ/√n and s/√n bars; histograms divided by σ vs by s (beyond ±2: 4.6% vs ~18% at n = 3) with a Student's-curve toggle; a histogram of s/σ (below half of σ ~22% at n = 3); "Mark the small-s samples" colors them in all three charts (~64% of the t values beyond ±2 at n = 3). Skewed: ~23% below −2 and ~3% above +2 at n = 3 against Student's 9.2% each side; ~7% vs 2.75% at n = 30. Section 3 has a df slider (1–59, ∞) with t vs normal and the 95% multiplier, a table with one row per n (12.71/4.30/2.78/2.26/2.09/2.05/1.96; z-interval coverage 70/81/88/92/94/94/95%), and 100 intervals for n = 3/10/30 with ±1.96·s/√n vs ±t*·s/√n, misses counted (n = 3: ~19 vs ~5 per 100). Section 4 shows the t statistics of all 1,024 sign flips for the sleep differences, drug 1 alone and drug 2 alone, with t(9) and normal overlays, and a log-scale tail chart (exact flip steps, t(9), bell curve) marking each p (pairs: flips 0.39%, t 0.28%, normal 0.0049%; drug 1: 23.8%/21.8%/18.5%, consistent with chance, t interval −0.53 to +2.03 h; drug 2: 0.59%/0.51%/0.02%). Section 5 is a table of one-sample, paired, Welch two-sample (sleep as 20 people: t = 1.86, p = 0.08) and t interval (0.70 to 2.46 h), a slope chart of the 10 patients toggling between pairs (t = 4.06, p = 0.003) and two separate groups (Welch t = 1.86, p = 0.08), and when to prefer the shuffle.

<a id="chi-square-tests"></a>
### **12. Chi-square tests**

> **Idea:** add up how far the counts you got are from the counts you expected.
>
> **Hook:** "Mendel's pea counts fit his theory almost perfectly. Too perfectly?" (Fisher, 1936; the debate since is worth a sentence)
>
> **Predict first:** roll a die 60 times; how uneven can the counts get before you suspect it?
>
> **Sections:**
>   - **Observed vs expected**: the statistic built cell by cell
>   - **Goodness of fit**: dice, horse kicks fitting a Poisson
>   - **Tables of counts**: is clicking independent of button colour? (χ² = z² for the 2×2)
>   - **Too good to be true**: the left tail
>   - **When it breaks**: small expected counts; the shuffle as backup
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Count table: editable cells with each cell's contribution drawn as a bar; statistic against a shuffle histogram and the χ² curve
>   - Die roller, fair or loaded
>
> **Data:** button test as a 2×2 table.
>
> **Links:** builds on Chi-square, Poisson (its goodness-of-fit section), Shuffling to test.
>
> **Built:** the hero frames Mendel and Fisher, then asks how often 60 rolls of a fair die keep every face between 8 and 12 (Most of the time / About half / About 1 in 4 / Less than 1 in 10; exact 7.8%, about 1 in 13) and rolls 100 sets into a grid of small bar charts, each with its χ² underneath and the in-band sets in green (all χ² ≤ 2.4; nine honest sets in ten land between about 1 and 11; the busiest face reaches 15+ in 37%), saying the guess back. Section 1 builds χ² cell by cell for six die counts with steppers and three views (gaps, which sum to 0; squared gaps; squared gaps ÷ expected), plus a 10-vs-1,000 table on why to divide. Section 2 is a fair-or-loaded mystery die game (loaded face at 22/25/30%; roll 10/60/600 up to 3,000; χ² against 2,000 fair dice, binned in whole multiples of χ²'s 12/n step, with a 5-df curve toggle; score kept) and Bortkiewicz's horse kicks against the Poisson (classes 0/1/2/3+, 3+ expects 4.8, χ² = 0.32 on 2 df, p = 0.85), with Fisher's 1922–24 correction of Pearson's degrees of freedom. Section 3 is the ★ editable count table (button test, 4,300 per button, 20 per button, optional third button) with expected counts, contribution bars, a live shuffle histogram and the χ² curve: χ² = 1.82 = z², curve p = 0.177, shuffle ≈ 0.21, explained by whole-number counts and Yates (1934, 0.210); before the 4,300 preset the reader predicts the change (same / 4× / 18×): 7.79 (4.3×), p = 0.005. Section 4 tabulates Mendel's seven 3:1 experiments (total χ² = 2.14 on 7 df, fit this close 4.8%) with honest binomial replays, and the 84 comparisons as 84 binomial experiments (Edwards 1986; Pires & Branco 2010, Table 7; total 41.34, Fisher's grouping 41.6056; a fit this close 2–3 in 100,000 by 2M honest replays and by the curve; Fisher printed 0.99993), Fisher's 2:1 vs 1.7:1 argument ((3/4)¹⁰ = 5.6%), citing Pires & Branco (2010) and Franklin et al. (2008). Section 5 compares every possible shuffle (Fisher's exact test; same ranking as χ² for equal groups) with the 1-df curve on a log scale, the exact line ending at the most extreme table: 20 per button 0 vs 4 → curve 3.5%, exact 10.6%; 50 per button 2 vs 8 → 4.6% vs 9.2%; plus counts not percentages, independence, huge samples and lost direction. The Titanic class-by-survival table was considered but dropped because its counts could not be verified from a source.

<a id="anova"></a>
### **13. ANOVA**

> **Idea:** to compare many groups, compare the spread *between* group means with the spread *within* groups.
>
> **Hook:** "Five fertilisers on five plots each. Does any of them matter?" (Fisher at Rothamsted)
>
> **Predict first:** looking at five dot strips, guess whether the groups really differ.
>
> **Sections:**
>   - **Why not ten t-tests**: the multiple-comparison problem in miniature
>   - **Between vs within**: the F ratio as signal over noise
>   - **The F distribution** as the shortcut to the shuffle
>   - **Which groups differ?** a first look at corrections
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Group spreader: drag group means apart and squeeze within-group spread; F and its shuffle histogram update live
>   - Ten pairwise t-tests on pure noise: count the false alarms
>
> **Links:** builds on Student's t, Chi-square (F as a ratio of chi-squares), Shuffling to test. Leads to Forking paths.
>
> **Built:** the hero shows six experiments (five fertilizers × five plots, yields 30 ± 3 kg); each is real (means offset by ±0.6/±1.2 SD, F-test power ≈ 87%) or pure noise with probability ½, and the reader marks each real or chance before a reveal with F and p per panel and both scores. Section 1 runs ten pooled t-tests on five noise groups with a p-value triangle and a tally, after a guess (5/15/30/60%) that is said back beside the result (any false alarm ≈ 29% vs ANOVA 5%; table for 3/5/7/10 groups: 12/29/45/63%, by simulation). Section 2 is the ★ group spreader: draggable gold group averages (also arrow keys, with a focus ring), a within-spread slider (0.5–5.5 kg) using fixed residuals scaled so within variance = s², between/within bars, 2,000 shuffles recomputed live with an F(4,20) overlay; "Fertilizers do nothing" draws the averages with σ/√5 wobble and shows their variance against s²/5 and a running F tally (usually 0.3–2, mean 1); "Identical averages (F = 0)"; and a challenge to move one bar until p < 5% (one bar needs about 1.7 within-group spreads, F = 2.87). Section 3 tells the Rothamsted story (Fisher 1919; Fisher & Mackenzie 1923; Statistical Methods for Research Workers 1925; Snedecor named F in 1934) and checks R's PlantGrowth (Dobson 1983; F = 4.85 on 2 and 27 df, p = 0.016; shuffle ≈ 1.65%) with the ANOVA table and F = t² (t = 3.01, F = 9.06). Section 4 compares the three pairs: separate two-group t (0.25/0.047/0.008), Bonferroni on those (0.75/0.14/0.023), Tukey (0.39/0.20/0.012) and a largest-gap shuffle widget (≈ 0.48/0.26/0.012) with a pair selector that turns the bars beyond the chosen gap accent; a note explains that Tukey and the shuffle use all three groups' spread, hence Tukey 0.20 > Bonferroni 0.14 for treatment 2 vs control. Phone layouts abbreviate the pairs and ANOVA tables. Section 5 has simulated false-alarm rates with unequal spreads (5/10/23/0.4%), Welch's ANOVA, and four misreadings including Fisher's randomization and blocks.

<a id="forking-paths"></a>
### **14. ⚠ The garden of forking paths**

> **Idea:** with enough tests, or enough choices about how to analyse, pure noise will always produce a "discovery".
>
> **Hook:** "Listening to 'When I'm Sixty-Four' made students younger, p < 0.05." (Simmons, Nelson & Simonsohn, 2011, who did it on purpose)
>
> **Predict first:** how many tries will you need to get p < 0.05 from data with no effect?
>
> **Sections:**
>   - **20 tests, one "discovery"**: multiple testing
>   - **The forking paths**: outliers, subgroups, covariates, stopping early (Gelman & Loken)
>   - **The p-hacking sandbox**: the reader does it themselves
>   - **The fixes**: pre-registration, corrections (Bonferroni, false discovery rate), replication
>   - Uses, quiz
>
> **Widgets:**
>   - ★ p-hacking sandbox: a noise dataset with switches (drop outliers, split by gender/age, add covariate, peek and stop); live p-value; counts the forks taken; afterwards replays on fresh data where the "effect" vanishes
>   - Many-tests machine: 20 tests on noise, with Bonferroni and FDR toggles
>
> **Links:** builds on p-values, ANOVA, Errors and decisions. Returns in Overfitting.
>
> **Built:** the hero quotes Simmons, Nelson & Simonsohn's (2011) Study 2 verbatim (adjusted 20.1 vs 21.5 years, F(1, 17) = 4.92, p = .040; without father's age p = .33), asks how many pure-noise studies until p < 0.05 (5 / 20 / 100 / never; answer ~20, median 14), shows one researcher's studies as p-value tiles and a histogram for 200 researchers. Section 1 is the many-tests machine: 20 z-tests, all noise or 5 real (shift 3), sorted p on a log axis with the 0.05, Bonferroni and Benjamini–Hochberg (step-up) staircase thresholds, and a tally (noise: 64% / 4.9% / 5%; 5 real: 4.3 / 2.5 / 3.3 found, FDR ~4%), linking to the 1,000-drug icon array on p-values (#duds). Section 2 covers Gelman & Loken (2013) and Borges's 1941 story, the paper's Table 1 (9.5/7.7/11.7/12.6/14.4/30.9/60.7%) and a peeking widget (start at 10 per group, test every 1/5/10/20 more up to 50: ~22/17/14/12%; paper 22.1/17.0/14.3/12.7%). Section 3 is the ★ sandbox modeled on Study 2: 3 songs × 30 students of noise, 6 forks (outcome, comparison, covariate, outliers, subgroup, +10 per song) = 486 paths, live p, paths-tried counter, adjusted averages drawn and explained when a covariate is on, Publish (replays the path on 1,000 fresh datasets), Search all paths, and a garden test (~90% of noise studies have a significant path); it notes that per-group 2 SD trimming alone gives ~10% (2.5 SD ~6.5%). Section 4 lists fixes (pre-registration and registered reports, corrections, replication with the Open Science Collaboration's 2015 97% vs 36%, disclosure with the paper's six requirements quoted, explore then confirm).

<a id="polio-trial"></a>
### **15. 📖 The 1954 polio vaccine trial**

> **Idea (case study):** a randomised, controlled, double-blind trial is how you separate a real effect from everything else; the whole of Part I in one story.
>
> **Hook:** "1.8 million children took part. Paralytic polio struck only a few dozen per 100,000. How do you tell if the vaccine worked?"
>
> **Predict first:** compare the two trial designs (randomised vs vaccinate-the-volunteers) and guess which one gives a bigger apparent effect, and why.
>
> **Sections:**
>   - **The problem**: rare outcome, huge trial, worried parents
>   - **Two designs ran side by side**: the observed-control design and the randomised placebo design; why "no consent" children had lower rates (selection, page 3)
>   - **Is the difference chance?** shuffle and test on the real counts (pages 6–7)
>   - **How sure, how big?** interval for the rate difference (page 8)
>   - **Why it needed to be so big**: power for a rare outcome (page 10)
>   - What it teaches; quiz
>
> **Widgets:**
>   - ★ Trial simulator with both designs: the reader chooses who gets vaccine; a hidden "consent tends to come from richer families" effect shows how the volunteer design misleads
>   - Real counts: shuffle test and interval on the randomised arm
>
> **Data:** rates per 100,000 from Freedman, Pisani & Purves, *Statistics*, ch. 1 (randomised: ~28 vaccinated vs ~71 placebo; verify before use). Francis report (1955).
>
> **Links:** recaps pages 3, 6–10.
>
> **Built:** data verified from Meier's Table 1 (adapted from Francis 1955; rows sum to the printed totals): randomized areas vaccine 57/200,745 (28 per 100,000), placebo 142/201,229 (71), refused 157/338,778 (46); observed-control areas grade 2 vaccinated 56/221,998 (25), grades 1 and 3 391/725,173 (54), grade 2 refused 54/123,605 (44); paralytic 33 vs 115 and 38 vs 330; 1,829,916 children in all. The hero asks which design shows the bigger effect and reveals both as bar panels (42 vs 29 fewer per 100,000). Section 1 draws 100,000 children with 71 or 28 cases. Section 2 is the ★ simulator, a labeled model with a predict step (volunteer estimate on / below / above the truth) and 100 trials per click (better-off 85 vs less well-off 35 per 100,000; consent 55/55, 75/35 or 90/20%; true effect 0–90%; diagnosis blind or doctors know, which overstates the randomized estimate by ~8 per 100,000 and roughly cancels the volunteer bias at the defaults), running both designs with a strip of repeated estimates in cases prevented against the truth (default: randomized ≈ 41, volunteers ≈ 33; a useless vaccine looks harmful in the volunteer design), plus the real table (U.S. areas; Dublin, JAMA 1955: 91 of 217 U.S. areas chose the placebo design state by state, plus 46 Canadian and 2 Finnish areas, about 73,000 children; placebo footnoted as 'solution 199' vs Meier's 'salt solution'). Section 3 shuffles the 199 cases (expected 99.4 ± 7.0 in the vaccine group vs 57; z = 6.0, p ≈ 2 × 10⁻⁹; paralytic toggle). Section 4 plots intervals for cases prevented (randomized 42 (28–56), paralytic 41 (29–53); observed 29 (20–37, even narrower than the randomized one), 28 (21–36)) and efficacy 60% (45–70%), paralytic 71% (58–81%). Section 5 is a power slider for halving 71 per 100,000 (10,000 per group 19%; 80% at ~67,000, 90% at ~89,000) with 100 simulated trials. Section 6 maps the trial to pages 3 and 6–10 and 14 (including the Cutter incident: about 200 paralyzed, 10 deaths, lots withdrawn April 27, 1955; Offit 2005); the closing leads to Likelihood.

---

<a id="bridge"></a>
## Bridge

<a id="likelihood"></a>
### **16. Likelihood**

> **Idea:** turn the probability around: fix the data and ask which setting of the world makes it most likely. Both frequentist and Bayesian methods are built on it.
>
> **Hook:** "Seven heads in ten flips. Which coin, out of all possible coins, most likely made this?"
>
> **Predict first:** drag a marker to where you think the likelihood curve peaks.
>
> **Sections:**
>   - **Same formula, read backwards**: probability of data vs likelihood of a parameter
>   - **The likelihood curve**: and its peak, the **maximum likelihood estimate**
>   - **More data, sharper peak**: curvature as precision (link to SE)
>   - **Poisson counts and the tanks**: MLEs elsewhere (and why the tank MLE is biased)
>   - **Where it goes next**: likelihood ratios (tests) and posteriors (Bayes)
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Likelihood explorer: flips arrive one by one; the curve is drawn by sweeping a coin through p and scoring the data; peak marked; n slider sharpens it
>   - Poisson λ version using the horse-kick counts
>
> **Links:** builds on Bernoulli, Binomial, Poisson ("Going backwards: what is λ?"), What makes a good guess. Leads to Bayes' theorem, Logistic regression.
>
> **Built:** the hero shows 7 heads in 10, takes the reader's guess for the peak (gold) and sweeps every coin to trace P(7 of 10 | p): peak 0.70 → 0.267, fair coin 0.117 (44%). Section 1 is a p × k table of binomial probabilities (n = 10); a column becomes bars that sum to 1, a row becomes the likelihood curve with area 1/11. Fisher's 1922 definition is quoted (p. 310, via Aldrich 1997, Statistical Science 12: 1912 absolute criterion as an undergraduate, "likelihood" in 1921, "maximum likelihood" in 1922). Section 2 is the ★ explorer: a secret coin's 1,000-flip stream with +1/+10/+100 and a flips slider, or the reader's own flips (gold rings); each visible flip shows its score at a draggable candidate; product shown as m × 10ⁿ with its log; sweep button; likelihood/log toggle; reveal. Section 3 plots log-likelihood vs the curvature parabola with the 1.92 cut (7/10: likelihood interval 0.394–0.915 vs 0.416–0.984; 0/10: 0–0.175) and 1,000 repeats whose SD matches 1/√curvature. Section 4: horse kicks (109/65/22/3/1; λ̂ = 0.61, SE 0.055, interval 0.51–0.72; λ = 1 is 2 × 10⁻⁸ of the peak) with a "climb to the peak" slider; tanks 19, 40, 42, 60 (likelihood 1/C(N,4), peak 60; 74 → 0.42, 100 → 0.12) and 1,000 captures from 100 (largest averages 80.8, largest + gap 100), plus the n vs n − 1 note. Section 5 shows both roads: likelihood ratio (7/10: 2.28, 2 ln = 1.65, p = 0.20 vs exact 0.34; Wilks 1938) and posterior with a flat or Beta(20, 20) prior (P(p > 0.5) 89% vs 72%). Closing leads to Bayes' theorem.

---

<a id="bayesian-inference"></a>
## Bayesian inference

Probability as degree of belief, updated by data. Uses the Beta page heavily. Every page
shows, somewhere, the frequentist answer next to the Bayesian one.

<a id="bayes-theorem"></a>
### **17. Bayes' theorem**

> **Idea:** how common something is to begin with matters as much as the evidence for it.
>
> **Hook:** "A disease affects 1 in 1,000. The test is 99% sensitive with a 5% false-positive rate. You test positive. Should you panic?" (≈ 2% chance you're ill)
>
> **Predict first:** slide your answer for P(ill | positive) before the reveal.
>
> **Sections:**
>   - **Count, don't calculate**: 100,000 people as dots (natural frequencies)
>   - **The theorem**: flipping the conditional
>   - **Base rates**: the same test in a clinic vs a mass screening
>   - **Second test**: posterior becomes the new prior
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Population grid: a dot per person; sliders for prevalence, sensitivity, false-positive rate; positives light up and are sorted into ill/healthy
>   - Bayes box: area diagram whose rectangles resize with the sliders
>
> **Links:** builds on Bernoulli, Likelihood. Leads to Updating beliefs; trap version in The prosecutor's fallacy.

<a id="updating-beliefs"></a>
### **18. Updating beliefs**

> **Idea:** posterior ∝ prior × likelihood: belief is a distribution, and data reshapes it.
>
> **Hook:** "One restaurant has 4 of 5 good reviews, another 400 of 500. Which would you trust more?"
>
> **Predict first:** sketch where you think the posterior for each restaurant sits, and how wide.
>
> **Sections:**
>   - **Belief as a curve**: a prior over the unknown rate
>   - **Multiply and renormalise**: prior × likelihood, drawn point by point
>   - **The beta–binomial model**: add successes to α and failures to β
>   - **Watch it learn**: one observation at a time
>   - **Same data, any order**: batch vs sequential updating agree
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Updater: prior, likelihood and posterior stacked; click "good"/"bad" to add a review and watch the posterior shift and narrow
>   - Two restaurants side by side
>
> **Data:** button test (posteriors for A and B, P(B > A) ≈ 0.91).
>
> **Links:** builds on Beta, Binomial, Likelihood, Bayes' theorem.

<a id="priors"></a>
### **19. Choosing priors**

> **Idea:** with enough data, reasonable priors end up in the same place; with little data the prior matters, and that's honest, not a flaw.
>
> **Hook:** "An optimist and a sceptic start out disagreeing about a new drug. Do they agree after seeing the data?"
>
> **Predict first:** after 50 patients, how far apart will their posteriors still be?
>
> **Sections:**
>   - **Flat, weak, strong**: priors as pseudo-observations
>   - **Data overwhelms the prior**: two observers converge
>   - **Conjugate priors**: when the posterior stays in the prior's family (beta–binomial, gamma–Poisson, normal–normal), as a convenient shortcut
>   - **Bad priors**: zero probability can never be updated (Cromwell's rule)
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Two observers: two priors you shape, shared data stream, both posteriors evolving with a "gap" readout
>   - Conjugate pairs table: pick a pair, see the update rule animate
>
> **Links:** builds on Updating beliefs, Beta, Gamma, Poisson.

<a id="credible-intervals"></a>
### **20. Credible intervals**

> **Idea:** a credible interval is a direct statement about the parameter ("95% probability it's in here, given the model"), unlike a confidence interval.
>
> **Hook:** "Can I just say there's a 95% chance the true click rate is in this interval?" (Only with a credible interval.)
>
> **Predict first:** for the button test, will the 95% credible and confidence intervals be wider, narrower or the same?
>
> **Sections:**
>   - **Reading off the posterior**: equal-tailed and highest-density intervals
>   - **Side by side with confidence intervals**: same numbers often, different meaning
>   - **Where they differ**: small samples, strong priors, near the edges
>   - **Answering the question you actually have**: P(B > A), P(effect > 1 hour)
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Two intervals: one dataset, CI and credible interval drawn together; prior strength and n sliders show when they diverge
>   - Probability-of-claim: drag a threshold on the posterior to get P(effect > threshold)
>
> **Data:** button test, sleep trial.
>
> **Links:** builds on Confidence intervals, Updating beliefs.

<a id="model-comparison"></a>
### **21. Comparing models**

> **Idea:** Bayes factors weigh how well each model predicted the data, and automatically penalise models that could have predicted anything.
>
> **Hook:** "A friend's coin came up heads 9 times in 12. Fair coin, or trick coin?"
>
> **Predict first:** which model wins: "fair" or "any bias at all"?
>
> **Sections:**
>   - **Models make predictions**: each spreads its bets over possible data
>   - **The Bayes factor**: ratio of how well each bet paid off
>   - **The automatic Occam's razor**: flexible models spread themselves thin
>   - **Bayes factor vs p-value**: the same data can disagree (Lindley's paradox, lightly)
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Prediction bars: each model's predicted distribution of heads as bars; the observed count highlighted; Bayes factor as a balance scale
>   - Occam demo: simple vs flexible model on growing data
>
> **Links:** builds on Likelihood, Updating beliefs, p-values. MacKay, ch. 28.

<a id="shrinkage"></a>
### **22. Shrinkage**

> **Idea:** when estimating many related things, pull each estimate toward the group average; groups borrow strength (hierarchical models / partial pooling).
>
> **Hook:** "After 45 at-bats in 1970, Roberto Clemente is hitting .400. Will it last?" (Efron & Morris, 1975: shrunk estimates beat raw averages for the rest of the season)
>
> **Predict first:** for each of 18 players, drag your guess for their end-of-season average; scoreboard vs raw and shrunk estimates.
>
> **Sections:**
>   - **No pooling, full pooling, partial pooling**
>   - **How much to shrink**: noisy groups shrink more
>   - **The hierarchical model**: a prior learned from the data
>   - **Everywhere**: hospital rankings, small-town cancer rates, school scores
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Shrinkage slider: 18 raw averages as dots with arrows to the shrunk values; slider from none to full pooling; total error vs the rest-of-season truth
>   - Small-county map: highest and lowest rates are all small counties
>
> **Links:** builds on Updating beliefs, Choosing priors, What makes a good guess (bias–variance). Leads to Overfitting (regularisation is the same idea).

<a id="mcmc"></a>
### **23. MCMC**

> **Idea:** when you can't compute a posterior, you can explore it by a random walk that visits each region in proportion to its probability.
>
> **Hook:** "How do you map a landscape you can only feel one step at a time?"
>
> **Predict first:** after 200 steps, will the walker's histogram match the target? (Usually not yet.)
>
> **Sections:**
>   - **Why we need it**: posteriors with no formula
>   - **The Metropolis walk**: propose, compare heights, accept or stay
>   - **The histogram becomes the posterior**
>   - **Tuning**: step size, burn-in, stuck chains, multiple chains
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Metropolis walker on a 2-D posterior landscape: trail, accept/reject flashes, histogram on the margins; step-size slider; a two-peak target to show it getting stuck
>   - Trace plots: good vs bad mixing
>
> **Links:** builds on Updating beliefs, Shrinkage (a model that needs MCMC). Metropolis et al. (1953).

<a id="prosecutors-fallacy"></a>
### **24. ⚠ The prosecutor's fallacy**

> **Idea:** P(evidence | innocent) is not P(innocent | evidence); confusing them can convict innocent people.
>
> **Hook:** the Sally Clark case (convicted 1999 on a "1 in 73 million" figure; overturned 2003). Treat with care and respect; it is a real family's tragedy.
>
> **Predict first:** "Given that 1 in 73 million, how likely is she innocent?" Slide an answer.
>
> **Sections:**
>   - **The number and what it claimed**
>   - **Mistake 1: independence** (two deaths in one family are not independent)
>   - **Mistake 2: flipping the conditional** (compare with the rival explanation's probability)
>   - **The defence attorney's fallacy** too (OJ Simpson case, briefly)
>   - **How to say it right**: likelihood ratios in court; the Royal Statistical Society's 2001 statement
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Two-explanation weighing: both explanations as population grids, sized by how often each happens; the evidence filters both; compare survivors
>   - Independence check: probability of two events with and without a shared cause
>
> **Links:** builds on Bayes' theorem, Comparing models.

<a id="air-france-447"></a>
### **25. 📖 Finding Air France 447**

> **Idea (case study):** Bayesian search: combine every clue, including failed searches, into a probability map; then search where it's highest.
>
> **Hook:** "An airliner vanished over the Atlantic in 2009. Two years of searching found nothing. After a Bayesian reanalysis the wreck was found within about a week."
>
> **Predict first:** on a blank ocean grid, click where you'd search first.
>
> **Sections:**
>   - **The prior map**: last known position, flight dynamics, drift
>   - **Failed searches are data**: each search lowers its area (but not to zero)
>   - **The posterior map** and the overlooked detail (the beacon may have failed)
>   - **Search where the posterior is highest**
>   - What it teaches; quiz
>
> **Widgets:**
>   - ★ Search game: hidden wreck on a grid; reader allocates search effort each round; the map updates with each failure; compare with the Bayesian strategy's average time to find
>   - Beacon toggle: how a single assumption about the beacon reshapes the map
>
> **Data:** Stone, Keller, Kratzke & Strumpfer, *Statistical Science* (2014). Also mention USS Scorpion (1968).
>
> **Links:** recaps pages 17–23.

---

<a id="regression"></a>
## Relationships and regression

How one quantity moves with another, and how to tell when it really does. Every slope is
shown with its bootstrap and shuffle counterparts.

<a id="correlation"></a>
### **26. Correlation**

> **Idea:** one number for how tightly two things move together in a straight line, and everything that number can hide.
>
> **Hook:** "Guess the correlation." A quick scored game.
>
> **Predict first:** the whole opening is the guessing game; score tracked.
>
> **Sections:**
>   - **Guess the correlation**: calibrate your eye
>   - **What r measures**: products of z-scores, drawn as rectangles
>   - **What r hides**: Anscombe's quartet, curves, outliers, restricted range
>   - **r² and "variance explained"**
>   - **Correlation is not causation** (preview of page 31)
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Guess-the-correlation game with streak and error history
>   - Drag points: add or move points and watch r jump
>
> **Data:** heights (parents vs children).
>
> **Links:** builds on Normal (z-scores). Line-up returns: which scatter has real correlation?

<a id="least-squares"></a>
### **27. Least squares**

> **Idea:** the best-fit line is the one that makes the squared errors as small as possible.
>
> **Hook:** "Draw the line that best fits these points." Then see how close you got.
>
> **Predict first:** drag your own line first; the page scores it.
>
> **Sections:**
>   - **Residuals**: the misses, drawn as vertical sticks
>   - **Squares**: literally drawn as squares; their total area is what we minimise
>   - **Why squares?** vs absolute errors (outlier sensitivity)
>   - **The slope is r × (sy / sx)**
>   - **The line passes through the means**
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Line drawer: drag the line; residual squares grow and shrink; total area meter; "snap to best"
>   - Squares vs absolute: two fits on data with a draggable outlier
>
> **Data:** heights.
>
> **Links:** builds on Correlation, What makes a good guess.

<a id="regression-to-mean"></a>
### **28. ⚠ Regression to the mean**

> **Idea:** extreme results are partly luck, and luck doesn't repeat, so the next result tends to be less extreme.
>
> **Hook:** "Athletes on the cover of Sports Illustrated tend to have a worse season next. A jinx?" Also Galton: tall parents, slightly less tall children.
>
> **Predict first:** the top 10% scorers on test 1: will they average higher, equal or lower on test 2?
>
> **Sections:**
>   - **Skill + luck**: each score is both
>   - **Select the extremes, and the luck goes with them**
>   - **Galton's discovery**: where the word "regression" comes from
>   - **The trap**: "punishment works, praise backfires" (Kahneman's flight instructors); treatments that "work" on the sickest
>   - **The fix**: a control group
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Two tests: skill and luck sliders; select the top or bottom group on test 1; watch them move toward the middle on test 2
>   - Galton plot with the 45° line and the regression line
>
> **Data:** heights.
>
> **Links:** builds on Least squares, Who's missing?. Galton (1886).

<a id="slope-inference"></a>
### **29. Is the slope real?**

> **Idea:** a fitted slope wobbles like any estimate; bootstrap it for an interval, shuffle it to test it.
>
> **Hook:** "Is this trend real, or a line drawn through noise?" (line-up of scatterplots with fitted lines)
>
> **Predict first:** guess the slope's 95% range before bootstrapping.
>
> **Sections:**
>   - **Bootstrap the line**: a fan of lines
>   - **Shuffle y**: the slope chance alone gives
>   - **The formula shortcut**: SE of the slope, t-test
>   - **Prediction vs confidence bands**: where the line is vs where the next point will be
>   - **Residual checks**: curves, funnels, outliers
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Line fan: bootstrap lines accumulate as a translucent fan; switch to shuffle mode and watch flat-ish lines form the null
>   - Band explorer: confidence vs prediction bands with n slider
>
> **Data:** heights.
>
> **Links:** builds on Least squares, The bootstrap, Shuffling to test, Student's t.

<a id="multiple-regression"></a>
### **30. Multiple regression**

> **Idea:** a coefficient in multiple regression is the effect of one variable while holding the others fixed.
>
> **Hook:** "Ice-cream sales predict drownings. Should we ban ice cream?"
>
> **Predict first:** after adding temperature, what happens to the ice-cream coefficient?
>
> **Sections:**
>   - **Holding constant**: slicing the data by the third variable
>   - **A plane instead of a line**
>   - **Coefficients change when you add variables**, and why
>   - **Collinearity**: when two predictors tell the same story
>   - **Categorical predictors**: the button test as a regression
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Plane fitter: rotatable 3-D scatter with a fitted plane; a "hold temperature fixed" slice shows the partial slope
>   - Add/remove predictors and watch coefficients move
>
> **Data:** heights (mother's and father's height as two predictors, plus sex of child).
>
> **Links:** builds on Is the slope real?, ANOVA (ANOVA is regression).

<a id="simpsons-paradox"></a>
### **31. ⚠ Simpson's paradox**

> **Idea:** a trend in the combined data can reverse inside every group, because a hidden variable drives both; correlation is not causation.
>
> **Hook:** "In 1973 Berkeley admitted 44% of male applicants and 35% of female. Yet department by department, women did as well or better." (Bickel, Hammel & O'Connell, 1975)
>
> **Predict first:** before splitting by department, guess whether the gap will stay, shrink or reverse.
>
> **Sections:**
>   - **The Berkeley data**: combined vs by department
>   - **The lurking variable**: department choice drives both
>   - **The reversal in pictures**: group lines vs overall line
>   - **Which answer is right?** It depends on the causal story (simple causal diagrams)
>   - **Randomisation breaks the link**: why trials beat observation
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Group toggle: scatter or bar chart with a "split by group" switch; the overall trend and within-group trends drawn together; a slider controls how strongly the confounder drives both
>   - Causal diagram: tiny DAG where you choose arrows and see which comparison is fair
>
> **Links:** builds on Multiple regression, Who's missing?, the polio trial.

<a id="overfitting"></a>
### **32. Overfitting**

> **Idea:** a model that fits the past perfectly predicts the future badly; regularisation trades a little fit for much better prediction.
>
> **Hook:** "This curve passes through every data point. Why is it useless?"
>
> **Predict first:** as the polynomial degree increases, sketch what happens to the error on new data.
>
> **Sections:**
>   - **Underfit, just right, overfit**
>   - **Training vs test error**: the U-shaped curve
>   - **Cross-validation**: hold data out to keep yourself honest
>   - **Regularisation**: ridge and lasso as shrinkage (page 22 again)
>   - **Bias–variance one last time**
>   - Uses, quiz
>
> **Widgets:**
>   - ★ Degree slider: fit on training points, fresh test points appear; train/test error curves trace out; "new sample" button shows how wild high-degree fits are
>   - Penalty slider: coefficients shrink (lasso sends some to zero)
>
> **Links:** builds on Least squares, Multiple regression, Shrinkage, What makes a good guess, Forking paths (overfitting is p-hacking's cousin).

<a id="logistic-regression"></a>
### **33. Logistic regression**

> **Idea:** to predict yes/no outcomes, model the probability with an S-shaped curve that never leaves 0–1.
>
> **Hook:** "Hours studied, pass or fail. Draw a line through that?"
>
> **Predict first:** drag the S-curve's midpoint and steepness to fit the points before the computer does.
>
> **Sections:**
>   - **Why a straight line fails**: probabilities above 1
>   - **Odds and log-odds**: the logistic curve
>   - **Fitting by maximum likelihood**: the S-curve version of page 16
>   - **Coefficients as odds ratios**
>   - **Thresholds and errors**: the confusion matrix (page 9 again)
>   - Uses, quiz
>
> **Widgets:**
>   - ★ S-curve fitter: yes/no points as dots at 0 and 1; draggable curve; log-likelihood meter; "fit" button
>   - Threshold slider with a live confusion matrix
>
> **Data:** button test as a logistic regression (one predictor: colour).
>
> **Links:** builds on Bernoulli, Likelihood, Multiple regression, Errors and decisions.

<a id="glm"></a>
### **34. Generalised linear models**

> **Idea:** one framework covers counts, yes/no outcomes and positive amounts: pick a distribution, a link, and a linear predictor.
>
> **Hook:** "How many bikes will be rented tomorrow?" A straight line predicts negative rentals in winter.
>
> **Predict first:** will the spread of counts grow, shrink or stay constant as the average grows?
>
> **Sections:**
>   - **Three parts**: distribution, link, linear predictor
>   - **Poisson regression** for counts
>   - **Overdispersion**: when counts are too spread out, negative binomial
>   - **Gamma regression** for positive skewed amounts
>   - **The family tree**: linear and logistic as special cases
>   - Uses, quiz
>
> **Widgets:**
>   - ★ GLM builder: pick distribution and link; see the fitted curve with its spread band over the bike data
>   - Poisson vs negative binomial on overdispersed counts
>
> **Data:** UCI bike-sharing dataset (daily counts vs temperature).
>
> **Links:** builds on Logistic regression, Poisson, Negative binomial, Gamma.

<a id="challenger"></a>
### **35. 📖 The Challenger O-rings**

> **Idea (case study):** the data to predict the disaster existed on the night before the launch; looking at only part of it hid the pattern.
>
> **Hook:** "23 previous flights. A forecast near freezing, colder than any previous launch (the coldest was 53°F). Launch or wait?"
>
> **Predict first:** looking only at flights with O-ring damage (what the engineers looked at), is there a temperature trend?
>
> **Sections:**
>   - **The night of 27 January 1986**
>   - **The missing flights**: adding the zero-damage flights reveals the pattern (page 3)
>   - **Fit the curve**: logistic regression of damage on temperature (page 33)
>   - **Extrapolating to 31°F**: the uncertainty band (pages 29, 32)
>   - What it teaches; quiz
>
> **Widgets:**
>   - ★ Flight table toggle: show only damaged flights vs all flights; scatter and fitted logistic curve update; drag temperature to read off the predicted probability with a bootstrap band
>   - Bootstrap fan of logistic curves
>
> **Data:** Dalal, Fowlkes & Hoadley, *JASA* (1989); Rogers Commission report (1986). Tufte's critique as further reading.
>
> **Links:** recaps pages 3, 26–33.

---

<a id="capstones"></a>
## Capstones

<a id="two-lenses"></a>
### **36. Two lenses, one dataset**

> **Idea:** frequentist, Bayesian and regression methods answer subtly different questions about the same data; seeing them side by side shows what each one is really saying.
>
> **Hook:** "The button test: p = 0.18, yet P(orange is better) ≈ 0.91. Who's right?"
>
> **Predict first:** before the reveal, should the company switch to orange?
>
> **Sections:**
>   - **The frequentist answer**: shuffle test, p-value, confidence interval
>   - **The Bayesian answer**: posteriors, P(B > A), credible interval, expected loss of switching
>   - **The regression answer**: logistic regression with colour as a predictor (and what adding covariates would do)
>   - **They agree more than they argue**: what each number means, side by side
>   - **The decision**: costs, power, and "run it longer"
>   - Quiz
>
> **Widgets:**
>   - ★ Three panels on one dataset: change the counts once and all three analyses update together
>   - Decision dial: cost of switching vs benefit; recommended action under each lens
>
> **Data:** button test, then heights as a second example.
>
> **Links:** recaps Shuffling to test, p-values, Confidence intervals, Updating beliefs, Credible intervals, Logistic regression.

<a id="test-guide"></a>
### **37. A field guide to tests**

> **Idea:** which tool for which question: a map of the whole series, organised by what you want to know and what kind of data you have.
>
> **Hook:** "You have data and a question. Where do you start?"
>
> **Predict first:** a few quick scenarios; pick the tool before the guide answers.
>
> **Sections:**
>   - **By question**: is there a difference? how big? is there a relationship? which model?
>   - **By data type**: means, proportions, counts, rankings, yes/no
>   - **The shuffle always works**: the universal fallback
>   - **Named tests and their shuffle equivalents** (t, χ², F, Mann–Whitney, Fisher's exact…)
>   - **Checklist before you trust a result**: sample, power, forks, confounders
>   - Quiz
>
> **Widgets:**
>   - ★ Interactive decision tree: answer questions about your data and goal; lands on a card with the tool, its shuffle version and a link to the page
>   - Scenario quiz: 10 short real-world cases
>
> **Links:** every page in the series; companion to A Field Guide to Distributions. Ends the statistics series.
