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
- [ ] [2. Sampling distributions](#sampling-distributions)
- [ ] [3. ⚠ Who's missing?](#selection-bias)
- [ ] [4. What makes a good guess](#estimation)
- [ ] [5. The bootstrap](#bootstrap)
- [ ] [6. Shuffling to test](#permutation-tests)
- [ ] [7. p-values](#p-values)
- [ ] [8. Confidence intervals](#confidence-intervals)
- [ ] [9. Errors and decisions](#errors)
- [ ] [10. Power and sample size](#power)
- [ ] [11. Student's t](#student-t)
- [ ] [12. Chi-square tests](#chi-square-tests)
- [ ] [13. ANOVA](#anova)
- [ ] [14. ⚠ The garden of forking paths](#forking-paths)
- [ ] [15. 📖 The 1954 polio vaccine trial](#polio-trial)

### [Bridge](#bridge)
- [ ] [16. Likelihood](#likelihood)

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
- **Button test (A/B):** a website tests its grey button (A) against an orange one (B).
  A: 1,000 visitors, 50 clicks (5.0%). B: 1,000 visitors, 64 clicks (6.4%).
  Deliberately *ambiguous*: two-proportion z ≈ 1.35, p ≈ 0.18, yet with flat priors
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
  simulated** worlds = `--ink-3` (muted grey); **the reader's own guess or data** = `--gold`;
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
> **Built:** the hero is the line-up on real Galton data (30 sons, 19 shuffles). The cast section gives each dataset a "show me chance" button (identical buttons, all 1,024 drug relabelings, 1,000 son shuffles), and section 4 adds the three-step recipe. The "fake a coin" widget is this page's use-my-data mode.

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
> **Data:** button test (p ≈ 0.18).
>
> **Links:** builds on Shuffling to test. Wasserstein & Lazar, ASA statement (2016).

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
