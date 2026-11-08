---
title: Exoplanet Habitability
summary: Predicts which of Kepler's unresolved candidates are likely real planets, then scores over 7,000 planets for habitable-zone status and Earth similarity. Presented in a Streamlit app and a Next.js site.
tier: flagship
status: shipped
order: 3
year: 2026
domains: [Space, Data Science]
stack: [Python, scikit-learn, XGBoost, TensorFlow, SHAP, Streamlit, Next.js]
highlights:
  - 1,267 of 1,977 unresolved Kepler candidates predicted likely real
  - 38 planets both likely rocky and in a habitable zone (31 confirmed, 7 candidates)
  - Ablation shows NASA's vetting flags add 2–5 F1 points over raw physics
repo: https://github.com/aditya-patra1011/exoplanet-habitability-project
cover: /projects/habitability-ablation.png
---

## The problem

This project builds on my Kepler classifier and takes on a harder question: which of Kepler's ~2,000
unresolved candidate signals are likely real planets, and how many of those could sit in a habitable zone?

## Part A: candidate classification

I trained six models (random forest, XGBoost, gradient boosting, SVM, logistic regression and an MLP) on
7,587 labelled KOIs, with 5-fold cross-validation grouped by host star so no star's planets leak between
folds.

- **Best full-feature model:** gradient boosting, **F1 = 0.9938**, just ahead of XGBoost (0.9932).
- **Applied to the 1,977 candidates**, it predicts **1,267** are likely real planets.
- **A three-tier ablation** (full / no-score / raw physical) shows how much comes from NASA's own vetting
  outputs: removing them costs tree models 2.1–2.5 F1 points, the MLP 3.3, and linear or kernel models
  4.4–4.9.

These scores are measured on labelled rows and may overstate accuracy on candidates: 98% of labelled false
positives carry a vetting flag, against only 0.15% of candidates.

## Part B: habitability scoring

The 5,737 confirmed planets with the needed measurements were merged with the 1,267 predicted-real
candidates, for **7,004 planets**. Each was scored with:

- **Habitable-zone status** from insolation flux, using Kopparapu-derived bounds (conservative 0.36–1.11 S⊕,
  optimistic 0.25–1.5 S⊕) and a rocky-planet radius cut (< 1.6 R⊕)
- **A simplified Earth Similarity Index**, from radius and equilibrium temperature

**3.21%** of planets fall in the conservative habitable zone (4.85% including the optimistic zone), and
**38** are both likely rocky and in a zone. Some well-known planets rank near the top, such as Kepler-438 b
(1st) and TRAPPIST-1 d (3rd), while others sit much lower, such as TRAPPIST-1 e (88th). The simplified
index only uses two inputs, so it is a rough guide rather than a verdict.

## Dashboards

Both dashboards are built from the same processed data: an interactive Streamlit app, and a static Next.js
site with overview, Part A, ablation, Part B and top-candidate pages.

![Insolation flux vs equilibrium temperature, coloured by Earth Similarity Index](/projects/habitability-scatter.png)

![Top habitable candidates ranked by Earth Similarity Index](/projects/habitability-top.png)

## Data

NASA Exoplanet Archive via its TAP service: the KOI cumulative table (9,564 rows) and PSCompPars (6,366 rows).
