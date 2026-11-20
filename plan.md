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
- [ ] [Power laws](#power-laws)
- [ ] [A Field Guide to Distributions](#field-guide)

## Statistics
### [Statistical inference](#statistical-inference)
- [ ] [Sampling distributions](#sampling-distributions)
- [ ] [Estimation](#estimation)
- [ ] [Confidence intervals](#confidence-intervals)
- [ ] [Hypothesis tests & p-values](#hypothesis-tests)
- [ ] [Student's t distribution](#student-t)
- [ ] [Chi-square tests](#chi-square-tests)
- [ ] [Power & sample size](#power)
- [ ] [Bootstrap & permutation tests](#bootstrap)
- [ ] [F distribution & ANOVA](#anova)

### [Bayesian inference](#bayesian-inference)
- [ ] [Bayes' theorem](#bayes-theorem)
- [ ] [Priors and posteriors](#priors-posteriors)
- [ ] [The beta–binomial model](#beta-binomial)
- [ ] [Conjugate priors](#conjugate-priors)
- [ ] [Credible intervals](#credible-intervals)
- [ ] [Comparing models and Bayes factors](#bayes-factors)
- [ ] [Hierarchical models](#hierarchical-models)
- [ ] [MCMC sampling](#mcmc)

### [Regression](#regression)
- [ ] [Correlation](#correlation)
- [ ] [Least squares](#least-squares)
- [ ] [Simple linear regression](#simple-regression)
- [ ] [Inference for regression](#regression-inference)
- [ ] [Multiple regression](#multiple-regression)
- [ ] [Overfitting and regularization](#regularization)
- [ ] [Logistic regression](#logistic-regression)
- [ ] [Generalized linear models](#glm)

---

# Probability

<a id="probability-distributions"></a>
## Probability distributions

From a single coin flip to counting, waiting, the bell curve and its squares.
The remaining pages widen the view: proportions, extremes, power laws, and a
guide to everything else. Each page builds on the earlier ones.

<a id="power-laws"></a>
### **Power laws**

> **Idea:** when size breeds size, there is no typical value: a few giants and a long tail of small ones.
>
> **Sections:**
>   - **No typical size**: city populations, wealth, word counts; the 80/20 rule
>   - **Pareto**: the continuous version, and how the tail exponent controls everything
>   - Straight lines on log–log plots, and why a straight-ish line is not proof
>   - **Zipf**: rank vs frequency for words, cities and websites
>   - **Where they come from**: rich-get-richer (Yule–Simon, preferential attachment), multiplicative growth
>   - **When averages break**: infinite variance or mean, and what sample averages do then
>   - Properties, uses, quiz
>
> **Widgets:**
>   - Rich-get-richer simulator: new items join existing groups in proportion to size; watch the tail form
>   - Log–log plot toggle on the same data, with a lognormal look-alike to show the trap
>   - Running average of Pareto samples for different exponents
>
> **Links:** builds on Exponential, Normal (lognormal section). Links to [Extreme values](https://nishs1729.github.io/explainers/probability/extreme-values.html) and the [field guide](#field-guide).

<a id="field-guide"></a>
### **A Field Guide to Distributions**

> **Idea:** short cards for the less common distributions, grouped by what produces them, so the reader can recognize them in the wild. Ends the series.
>
> **Sections:**
>   - **Family map at the top**: an interactive diagram of how all the distributions relate, with series pages as solid nodes and cards as clickable ones
>   - Sections, by origin story. Distributions with their own page in the series (in brackets) are only mentioned and linked, not described, so the guide covers everything:
>     - **Flip and count**: [Bernoulli, binomial, geometric, negative binomial]; hypergeometric, Skellam, zero-inflated Poisson, Benford
>     - **Wait for it**: [exponential, Poisson, gamma]; inverse Gaussian, Lévy, Gompertz, hyperexponential
>     - **Add it up**: [normal]
>     - **Square it**: [chi-square]
>     - **Multiply instead of add**: lognormal
>     - **Divide**: Cauchy
>     - **Stay in bounds**: [beta]; Dirichlet, Kumaraswamy, triangular, arcsine
>     - **Go around in circles**: von Mises
>     - **Take the biggest**: [extreme values]
>     - **Rich get richer**: [power laws]
>     - **Never settle**: stable, Laplace, logistic
>     - **Random matrices**: Wigner semicircle, Marchenko–Pastur, Tracy–Widom
>   - Ends with a "Which distribution?" quiz: match a histogram or scenario to its distribution
>
> **Widgets:**
>   - Each card: name and one-line idea, a small live plot with one slider (built by simulating the mechanism where possible), 2–3 real examples, "when to suspect it", and links to related pages
>   - Cards come from a single JS list, so adding one is a one-entry change; each card draws only when scrolled into view
>
> **Links:** every page in the series links here from its ending; this page links back to all of them.

---

# Statistics

<a id="statistical-inference"></a>
## Statistical inference

Turning probability around: from data back to the process that made it.
Assumes Normal and Chi-square; Student's t and F are introduced where they are
needed.

<a id="sampling-distributions"></a>
### **Sampling distributions**

> **Idea:** any number computed from a sample is itself random, with its own distribution.
>
> **Sections:**
>   - One sample, one number; many samples, a distribution
>   - **Standard error**: the spread of the sample mean, σ/√n
>   - **Not just the mean**: medians, maxima and SDs have sampling distributions too
>   - **Population vs sample**: the difference between the spread of data and the spread of an estimate
>   - Uses, quiz
>
> **Widgets:**
>   - Sample machine: pick a population (including a drawn shape), sample size and statistic; collect thousands of samples
>   - Side-by-side: data histogram vs histogram of sample means
>
> **Links:** builds on Normal (√n law, CLT), Chi-square (sample variance).

<a id="estimation"></a>
### **Estimation**

> **Idea:** what makes a guess from data good: unbiased, precise, and how to find one.
>
> **Sections:**
>   - Estimators as recipes; bias and variance
>   - Mean squared error, and when a little bias is worth it
>   - **Maximum likelihood**: pick the value that makes the data most likely
>   - Method of moments as a quick alternative
>   - **Consistency**: getting it right as n grows
>   - Uses, quiz
>
> **Widgets:**
>   - Dartboard of bias vs variance with several estimators
>   - Likelihood curve you drag to its peak, for coin flips and Poisson counts
>   - Estimator race: mean vs median vs trimmed mean on clean and outlier-heavy data
>
> **Links:** builds on Bernoulli (MLE), Sampling distributions, Chi-square (n−1).

<a id="confidence-intervals"></a>
### **Confidence intervals**

> **Idea:** what "95% confident" really means: the method, not the single interval, is right 95% of the time.
>
> **Sections:**
>   - Estimate ± margin; where the 1.96 comes from
>   - **Coverage**: 100 intervals, about 5 misses
>   - Width vs n and confidence level
>   - Common misreadings
>   - Intervals for proportions (Wald vs Wilson) and when the simple one fails
>   - Uses, quiz
>
> **Widgets:**
>   - Interval rain: draw 100 intervals and light up the misses
>   - Proportion coverage across p and n, comparing Wald and Wilson
>
> **Links:** builds on Binomial (its CI section), Normal, Sampling distributions.

<a id="hypothesis-tests"></a>
### **Hypothesis tests & p-values**

> **Idea:** how surprising the data would be if nothing were going on.
>
> **Sections:**
>   - The null hypothesis and the null distribution
>   - **p-value**: what it is and what it is not
>   - Type I and type II errors; significance levels
>   - p-values are uniform when the null is true
>   - **Multiple testing and forking paths**: 20 tests, one "discovery"
>   - Uses, quiz
>
> **Widgets:**
>   - Is the coin fair? Flip, see the null distribution and shaded p-value
>   - p-value histogram under null vs under an effect
>   - Jelly-bean machine: run many tests on noise, count false discoveries, apply a correction
>
> **Links:** builds on Binomial (its test section), Confidence intervals.

<a id="student-t"></a>
### **Student's t distribution**

> **Idea:** standardizing with the sample SD instead of the true σ gives heavier tails, which matter for small samples.
>
> **Sections:**
>   - **The Guinness story**: Gosset and small batches
>   - **Where the extra spread comes from**: a normal divided by a chi
>   - **Degrees of freedom**: heavy at n = 3, nearly normal by n = 30
>   - One-sample and two-sample t-tests; t intervals
>   - Uses, quiz
>
> **Widgets:**
>   - Standardize small samples with s vs σ; compare histograms to t and normal
>   - Tail comparison with a df slider
>
> **Links:** builds on Normal, Chi-square (the chi section), Hypothesis tests.

<a id="chi-square-tests"></a>
### **Chi-square tests**

> **Idea:** comparing observed counts with expected counts.
>
> **Sections:**
>   - **Goodness of fit**: is this die fair? Do horse kicks fit a Poisson?
>   - The statistic, and why it follows a chi-square
>   - **Degrees of freedom**: categories minus constraints
>   - **Tables of counts**: test of independence
>   - **When it breaks**: small expected counts
>   - Uses, quiz
>
> **Widgets:**
>   - Roll a loaded or fair die, watch the statistic against χ²
>   - 2×2 and larger tables with editable counts
>
> **Links:** builds on Chi-square, Poisson (its goodness-of-fit section), Hypothesis tests.

<a id="power"></a>
### **Power & sample size**

> **Idea:** how big a study must be to find an effect that is really there.
>
> **Sections:**
>   - **Two curves**: null vs alternative
>   - Power, effect size and n
>   - Planning a study
>   - **Underpowered studies exaggerate**: the winner's curse
>   - Uses, quiz
>
> **Widgets:**
>   - Overlapping null/alternative curves with effect size, n and α sliders
>   - Simulate many small studies; show which reach significance and how big their estimates are
>
> **Links:** builds on Hypothesis tests, Student's t.

<a id="bootstrap"></a>
### **Bootstrap & permutation tests**

> **Idea:** inference by resampling your own data instead of formulas.
>
> **Sections:**
>   - **Resampling with replacement**: the bootstrap idea
>   - Bootstrap standard errors and intervals for any statistic
>   - **Permutation tests**: shuffle the labels to build the null
>   - When resampling fails (tiny samples, extremes)
>   - Uses, quiz
>
> **Widgets:**
>   - Bootstrap your data: watch resamples build a distribution for the median
>   - Shuffle machine: two groups, shuffle labels, compare with the observed difference
>
> **Links:** builds on Sampling distributions, Confidence intervals, Hypothesis tests.

<a id="anova"></a>
### **F distribution & ANOVA**

> **Idea:** comparing several groups at once by comparing variances.
>
> **Sections:**
>   - Why not many t-tests
>   - Between-group vs within-group spread
>   - **The F distribution**: a ratio of chi-squares
>   - One-way ANOVA table, step by step
>   - Uses, quiz
>
> **Widgets:**
>   - Groups of points with adjustable means and spread; live F statistic
>   - Ratio of chi-squares building the F histogram
>
> **Links:** builds on Chi-square, Student's t, Hypothesis tests. Leads to [Regression](#regression).

<a id="bayesian-inference"></a>
## Bayesian inference

Probability as degree of belief, updated by data. Assumes the probability
distributions series (especially Beta and Gamma); the inference series helps but
is not required.

<a id="bayes-theorem"></a>
### **Bayes' theorem**

> **Idea:** reversing a conditional probability, and why base rates matter.
>
> **Sections:**
>   - **Medical test paradox**: a positive result for a rare disease
>   - The theorem as counting in a population of 1,000
>   - Prior, likelihood, posterior
>   - Updating step by step with new evidence
>   - Uses (diagnosis, spam filters, courts), quiz
>
> **Widgets:**
>   - Population grid: base rate, sensitivity, specificity; see who tests positive
>   - Sequential updating with repeated tests
>
> **Links:** standalone start; leads to Priors and posteriors.

<a id="priors-posteriors"></a>
### **Priors and posteriors**

> **Idea:** from single numbers to whole distributions of belief.
>
> **Sections:**
>   - A prior over a parameter
>   - **Grid updating**: multiply prior by likelihood, normalize
>   - Strong vs weak priors; data eventually wins
>   - Posterior mean, mode and spread
>   - Uses, quiz
>
> **Widgets:**
>   - Draw a prior, add data, watch the posterior
>   - Two people with different priors converging
>
> **Links:** builds on Bayes' theorem, Estimation (likelihood).

<a id="beta-binomial"></a>
### **The beta–binomial model**

> **Idea:** the classic worked case: learning a success rate from yes/no data.
>
> **Sections:**
>   - Beta prior + binomial data = beta posterior
>   - **Pseudo-counts**: what α and β mean
>   - Predicting the next trial
>   - A/B testing the Bayesian way
>   - Uses, quiz
>
> **Widgets:**
>   - A/B test: two arms, live posteriors, probability B beats A
>   - Prediction of the next k trials (the beta–binomial distribution)
>
> **Links:** builds on [Beta](https://nishs1729.github.io/explainers/probability/beta.html), Binomial, Priors and posteriors.

<a id="conjugate-priors"></a>
### **Conjugate priors**

> **Idea:** prior–likelihood pairs where the posterior stays in the same family.
>
> **Sections:**
>   - Why conjugacy is convenient
>   - **Gamma–Poisson**: learning a rate
>   - **Normal–normal**: learning a mean
>   - **Dirichlet–multinomial**: learning proportions
>   - **Limits**: when no conjugate exists
>   - Uses, quiz
>
> **Widgets:**
>   - Pick a pair; feed data; watch parameters update in closed form
>
> **Links:** builds on Gamma ("Learn a rate"), Beta–binomial, Negative binomial.

<a id="credible-intervals"></a>
### **Credible intervals**

> **Idea:** a range that contains the parameter with a stated probability, given the data.
>
> **Sections:**
>   - Equal-tailed vs highest-density intervals
>   - **Credible vs confidence intervals**: what each claims
>   - When they agree and when they differ
>   - Uses, quiz
>
> **Widgets:**
>   - Posterior with draggable interval types
>   - Side-by-side with a confidence interval on the same data
>
> **Links:** builds on Confidence intervals, Priors and posteriors.

<a id="bayes-factors"></a>
### **Comparing models and Bayes factors**

> **Idea:** weighing how well two explanations predicted the data.
>
> **Sections:**
>   - **Marginal likelihood**: averaging over the parameter
>   - Bayes factors and their scales
>   - **Automatic Occam's razor**: complex models spread their bets
>   - Sensitivity to priors
>   - Uses, quiz
>
> **Widgets:**
>   - Fair coin vs any-bias coin: Bayes factor as flips arrive
>   - Occam demo: simple vs flexible model predictions
>
> **Links:** builds on Hypothesis tests, Priors and posteriors.

<a id="hierarchical-models"></a>
### **Hierarchical models**

> **Idea:** groups that share information: partial pooling between "all the same" and "all different".
>
> **Sections:**
>   - Many small groups (hospitals, schools, players)
>   - No pooling, complete pooling, partial pooling
>   - Shrinkage toward the overall mean
>   - Uses, quiz
>
> **Widgets:**
>   - Batting averages early in the season: raw vs shrunken, checked against end-of-season values
>   - Pooling slider
>
> **Links:** builds on Beta–binomial, Conjugate priors.

<a id="mcmc"></a>
### **MCMC sampling**

> **Idea:** exploring a posterior you cannot write down by taking a clever random walk.
>
> **Sections:**
>   - Why integrals get hard
>   - **Metropolis**: propose, accept or reject
>   - Burn-in, mixing and step size
>   - **Diagnostics**: trace plots, multiple chains
>   - Uses, quiz
>
> **Widgets:**
>   - Random walker on a 2-D posterior with a step-size slider
>   - Trace plot and histogram building live
>
> **Links:** builds on Priors and posteriors, Hierarchical models.

<a id="regression"></a>
## Regression

Modelling how one quantity depends on others. Assumes Normal and the
inference series.

<a id="correlation"></a>
### **Correlation**

> **Idea:** one number for how tightly two quantities move together, and what it does not tell you.
>
> **Sections:**
>   - Scatter plots and the correlation coefficient
>   - Same r, very different pictures (Anscombe-style)
>   - Correlation is not causation; confounders
>   - Restricted range and outliers
>   - Uses, quiz
>
> **Widgets:**
>   - Guess the correlation
>   - Drag points and watch r change
>
> **Links:** builds on Normal. Leads to Least squares.

<a id="least-squares"></a>
### **Least squares**

> **Idea:** the best-fitting line minimizes the total squared vertical miss.
>
> **Sections:**
>   - Residuals and why we square them
>   - The slope and intercept formulas
>   - Regression to the mean (Galton's heights)
>   - **Squares vs absolute values**: sensitivity to outliers
>   - Uses, quiz
>
> **Widgets:**
>   - Drag a line; see residual squares and their total
>   - Galton heights: regression toward the mean
>
> **Links:** builds on Correlation.

<a id="simple-regression"></a>
### **Simple linear regression**

> **Idea:** a line plus noise as a model of the data.
>
> **Sections:**
>   - **The model**: y = a + bx + error
>   - R² and what it measures
>   - **Residual plots**: checking the assumptions
>   - Transformations (logs) for curved data
>   - Uses, quiz
>
> **Widgets:**
>   - Generate data from a known line, fit it, compare
>   - Residual-plot gallery: good fit vs curvature vs fanning
>
> **Links:** builds on Least squares.

<a id="regression-inference"></a>
### **Inference for regression**

> **Idea:** how sure we are about the slope, and about a prediction.
>
> **Sections:**
>   - The slope's sampling distribution
>   - Confidence interval and t-test for the slope
>   - Confidence band vs prediction band
>   - Uses, quiz
>
> **Widgets:**
>   - Refit on many samples; watch the lines fan out
>   - Bands that widen away from the center
>
> **Links:** builds on Simple regression, Student's t, Confidence intervals.

<a id="multiple-regression"></a>
### **Multiple regression**

> **Idea:** several predictors at once, each effect "holding the others fixed".
>
> **Sections:**
>   - Planes instead of lines
>   - Adjusting for confounders; Simpson's paradox
>   - Categorical predictors and interactions
>   - Collinearity
>   - Uses, quiz
>
> **Widgets:**
>   - 3-D plane fit you can rotate
>   - Simpson's paradox: toggle the grouping variable
>
> **Links:** builds on Inference for regression, F distribution & ANOVA.

<a id="regularization"></a>
### **Overfitting and regularization**

> **Idea:** a model that fits the data too well predicts new data badly.
>
> **Sections:**
>   - **Polynomial fits**: underfitting vs overfitting
>   - Training vs test error; cross-validation
>   - **Ridge and lasso**: penalizing big coefficients
>   - The bias–variance trade-off again
>   - Uses, quiz
>
> **Widgets:**
>   - Polynomial degree slider with train/test error curves
>   - Penalty slider showing coefficients shrinking (lasso sending some to zero)
>
> **Links:** builds on Multiple regression, Estimation (bias–variance).

<a id="logistic-regression"></a>
### **Logistic regression**

> **Idea:** regression for yes/no outcomes through the S-shaped logistic curve.
>
> **Sections:**
>   - Why a straight line fails for probabilities
>   - Odds, log-odds and the logistic curve
>   - Fitting by maximum likelihood
>   - Reading coefficients as odds ratios
>   - Classification thresholds
>   - Uses, quiz
>
> **Widgets:**
>   - Fit an S-curve to yes/no points
>   - Threshold slider with a confusion matrix
>
> **Links:** builds on Bernoulli, Estimation (MLE), Multiple regression.

<a id="glm"></a>
### **Generalized linear models**

> **Idea:** one framework for regression on counts, proportions and positive values.
>
> **Sections:**
>   - **Three parts**: distribution, link function, linear predictor
>   - Poisson regression for counts
>   - Overdispersion and negative binomial regression
>   - Gamma regression for positive skewed data
>   - Uses, quiz
>
> **Widgets:**
>   - Pick a distribution and link; see the fitted curve and spread
>   - Count data with too much spread: Poisson vs negative binomial fit
>
> **Links:** builds on Logistic regression, Poisson, Negative binomial, Gamma. Ends the series.
