---
title: Network Intrusion Detection
summary: Separates attack traffic from normal traffic using hypothesis tests and three benchmarked classifiers.
tier: more
status: shipped
order: 2
year: 2026
domains: [Cybersecurity, Data Science]
stack: [Python, pandas, SciPy, scikit-learn]
repo: https://github.com/aditya-patra1011/Network-Intrusion-Cybersecurity-Analysis
---

## Overview

A seven-phase notebook pipeline that runs from preprocessing through EDA and statistical testing to modelling.

- Drops the `attack_type` column before training to avoid leaking the label
- T-tests and chi-square tests show which features really differ between normal and attack traffic
- Logistic regression, a decision tree and a random forest are compared with 5-fold cross-validation in an sklearn `Pipeline`
- Random-forest feature importances pick out the strongest signals

<!-- TODO: add headline accuracy / ROC-AUC. -->
