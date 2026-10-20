---
title: Heart Disease Analysis
summary: A six-phase pipeline on the Cleveland heart-disease data, covering cleaning, EDA, statistical tests and classification models.
tier: more
status: shipped
order: 1
year: 2026
domains: [Healthcare, Data Science]
stack: [Python, pandas, SciPy, scikit-learn]
repo: https://github.com/aditya-patra1011/Healthcare-Data-Analysis-Project
cover: /projects/healthcare-importance.png
---

## Overview

About 303 patients, with a binary target for whether heart disease is present. The work is split into six
independent notebooks connected through saved state on disk, similar to the separate, auditable stages
of a production pipeline.

## Phases

Load and understand → clean and preprocess → EDA → statistical analysis → correlation and feature
importance → logistic regression and random forest models, evaluated with confusion matrices and ROC curves.

## Results

Random forest in a leakage-safe scikit-learn `Pipeline` reached **84% accuracy and ROC-AUC 0.909**,
holding steady across 5-fold cross-validation (83.8% ± 2.9%).

![ROC curves for logistic regression and random forest](/projects/healthcare-roc.png)
