---
title: India AQI Forecasting
summary: Forecasts next-day air quality for five Indian cities, comparing 10 models from simple baselines to LSTM and GRU networks under one leakage-safe protocol, and serves the result in a Streamlit app.
tier: featured
status: shipped
order: 3
year: 2026
domains: [Environment, Time Series]
stack: [Python, pandas, statsmodels, Prophet, scikit-learn, XGBoost, PyTorch, SHAP, Streamlit]
highlights:
  - LSTM cuts next-day error by 19% against "tomorrow = today" (MAE 14.7 vs 18.2)
  - 10 models compared on the same rows, with Diebold-Mariano significance tests
  - On severe-pollution days, error halves (MAE 42.6 → 21.4)
repo: https://github.com/aditya-patra1011/india-aqi-forecasting
cover: /projects/aqi-app-forecast.png
---

## The problem

Predict tomorrow's Air Quality Index from information available today, for Delhi, Bengaluru, Chennai,
Hyderabad and Lucknow. The hard part is that AQI tomorrow is mostly AQI today (lag-1 autocorrelation is
0.89 in Delhi), so any model has to beat "tomorrow = today" to be worth anything.

## Data and protocol

CPCB readings compiled in Kaggle's *Air Quality Data in India (2015–2020)*: daily AQI and 12 pollutants.

- **Chronological split:** train 2015–2018, validate on 2019, test on the first half of 2020. Every
  choice of model, feature set, hyperparameter and epoch count was made on validation; the test set was
  scored once.
- **Leakage tests for every model family:** change a future test day and check that no earlier forecast
  moves. Scalers and imputers are fitted only on the rows a model trains on.

## Models

Baselines (persistence, 7-day mean, seasonal naive, climatology), classical models (SARIMAX with Fourier
seasonality, Prophet), machine learning (Ridge, Random Forest, XGBoost) and deep learning (LSTM, GRU in
PyTorch), all scored on exactly the same rows.

| Model | Test MAE | Skill vs persistence |
| --- | ---: | ---: |
| **LSTM** (chosen on validation) | 14.7 | +19% |
| GRU | 14.4 | +21% |
| Random Forest | 15.4 | +16% |
| XGBoost | 15.2 | +16% |
| Persistence | 18.2 | 0% |
| Prophet (lag-1) | 20.9 | −15% |

![Dashboard: skill against persistence, by city and model](/projects/aqi-app-comparison.png)

## What I found

- **The best models beat persistence, and not by chance.** LSTM, GRU, Random Forest and XGBoost all win
  on test pooled over cities (Diebold-Mariano p < 0.001), though not significantly in every city.
- **Classical models barely help.** SARIMAX gains 4% on validation and loses 4% on test; Prophet is
  worse than persistence.
- **Yesterday's pollutants carry the signal.** With AQI history alone, every ML model ties persistence.
  Adding lag-1 pollutants brings the 15–20% gain, and SHAP agrees.
- **The lockdown erased most of the gain.** Before 25 March 2020 the GRU beats persistence by about 30%;
  during the lockdown by about 8%.
- **Severe days improve the most.** On days with AQI ≥ 300, MAE falls from 42.6 with persistence to 21.4
  with the LSTM.

![XGBoost SHAP importance on the test period](/projects/aqi-shap.png)

## The app

A Streamlit app with a next-day forecast and what-if sliders, actual-vs-forecast history with the
lockdown marked, the full EDA, one analysis tab per modelling phase, and a leaderboard with the
significance tests.

![Dashboard history: actual vs forecasts through 2020, with the lockdown marked](/projects/aqi-app-history.png)

![Dashboard EDA: seasonality by month for each city](/projects/aqi-app-eda.png)

## Limitations

Over half of the test period falls in the COVID-19 lockdown, so test numbers show how the models handle
an unusual period rather than a typical one. There is only one validation year, so models a few
hundredths apart on validation can't be told apart reliably.
