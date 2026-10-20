---
title: India AQI Forecasting
summary: Forecasts next-day air quality for five Indian cities and compares classical time-series, machine-learning and deep-learning models on equal terms.
tier: featured
status: in-progress
order: 3
year: 2026
domains: [Environment, Time Series]
stack: [Python, pandas, statsmodels, scikit-learn, LSTM (planned)]
highlights:
  - Strict chronological split (train ≤2018, validate 2019, test 2020)
repo: https://github.com/aditya-patra1011/india-aqi-forecasting
cover: /projects/aqi-delhi-val.png
---

## The problem

Predict tomorrow's Air Quality Index from past pollutant readings and calendar features, for Delhi,
Bengaluru, Chennai, Hyderabad and Lucknow.

## Data

CPCB readings compiled in Kaggle's *Air Quality Data in India (2015–2020)*.

## Approach

- Chronological split: train 2015–2018, validate on 2019, test on the first half of 2020
- Baselines first, then classical models, then ML models, then an LSTM, all compared on the same split

## Status

Cleaning, EDA, baselines and classical models are done. Machine-learning models, the LSTM, the
comparison and an app are still to come.

![Average AQI by month across the five cities](/projects/aqi-monthly.png)

<!-- TODO: add results as phases land. The 2020 test window includes the COVID lockdown, which is worth discussing. -->
