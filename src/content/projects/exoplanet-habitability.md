---
title: Exoplanet Habitability
summary: Predicts which unresolved Kepler candidates are likely real, then scores every planet for habitable-zone status and Earth similarity.
tier: flagship
status: shipped
order: 3
year: 2026
domains: [Space, Data Science]
stack: [Python, scikit-learn, XGBoost, TensorFlow, SHAP, Streamlit]
highlights:
  - 3.21% of evaluated planets fall in the conservative habitable zone
  - Confirmed vs predicted-real candidates agree (3.22% vs 3.16%)
repo: https://github.com/aditya-patra1011/exoplanet-habitability-project
cover: /projects/habitability-ablation.png
---

## The problem

This project builds on my Kepler classifier and takes on a harder question: which of Kepler's ~2,000
unresolved candidate signals are likely real planets, and how many of those could sit in a habitable zone?

## Part A: candidate classification

I trained six models (random forest, XGBoost, gradient boosting, SVM, logistic regression and an MLP) on
7,587 labelled KOIs. I used 5-fold group-aware cross-validation and compared three feature tiers to separate real signal from vetting-flag leakage.

## Part B: habitability scoring

Confirmed planets were merged with candidates predicted to be real. Each planet was then scored with:

- **Habitable-zone status** from insolation flux, using Kopparapu-derived bounds (conservative 0.36–1.11 S⊕, optimistic 0.25–1.5 S⊕) and a rocky-planet radius cut (< 1.6 R⊕)
- **A simplified Earth Similarity Index**

The scoring recovers well-known habitable-zone planets such as TRAPPIST-1 e/f/g, Proxima Centauri b
and Kepler-186f. That is a useful sanity check.

## Data

NASA Exoplanet Archive via its TAP service: the KOI cumulative table (9,564 rows) and PSCompPars (6,366 rows).

## Dashboard

![Insolation flux vs equilibrium temperature, coloured by habitable-zone status](/projects/habitability-scatter.png)

![Top habitable candidates ranked by Earth Similarity Index](/projects/habitability-top.png)
