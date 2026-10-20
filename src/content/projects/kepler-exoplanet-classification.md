---
title: Kepler Exoplanet Classification
summary: Classifies Kepler signals as real planets or false positives, then audits how much of the near-perfect score comes from NASA's own vetting flags.
tier: featured
status: shipped
order: 1
year: 2026
domains: [Space, Data Science]
stack: [Python, scikit-learn, XGBoost, SHAP, Streamlit]
highlights:
  - F1 ≈ 0.996 with the full feature set
  - F1 ≈ 0.94 using raw physical measurements only
repo: https://github.com/aditya-patra1011/kepler-exoplanet-classification
cover: /projects/kepler-data-explorer.png
---

## The problem

NASA's Kepler mission flagged thousands of Kepler Objects of Interest. Each one is either a confirmed
planet or a false positive. Can a model tell them apart, and what is it really learning?

## The key finding

With every column available, the best model reaches **F1 ≈ 0.996**. That number looked too good, so I
checked where it came from. Much of it came from NASA's own vetting-pipeline flags, which already encode
a human decision. Using only raw physical measurements, the model drops to **F1 ≈ 0.94**. That is still
strong, and it is an honest measure of what the model learns from the data itself.

## Approach

<!-- TODO: summarise the ten phases in 4–6 bullets: cleaning, feature tiers, models compared, validation, audit. -->

## Dashboard

A five-tab Streamlit app for exploring the data, comparing models and reviewing the methodology audit.

![Model comparison on the raw-physical feature tier](/projects/kepler-raw-tier.png)

![SHAP explorer showing which features drive predictions](/projects/kepler-shap.png)

<!-- TODO: if the dashboard is hosted, add a demo link in the frontmatter. -->
