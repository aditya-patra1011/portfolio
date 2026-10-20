---
title: BoxBox
summary: An F1 strategy dashboard built on the full 2024 season. It models tyre degradation, simulates pit strategies and explains its own predictions.
tier: flagship
status: shipped
order: 2
year: 2026
domains: [Motorsport, Data Science]
stack: [Python, FastF1, scikit-learn, lifelines, SHAP, Plotly Dash, Streamlit]
highlights:
  - 9-phase pipeline across 23 circuits
  - 6 purpose-built ML models plus survival analysis
  - Random Forest won 39 of 59 degradation models, Ridge won the other 20
repo: https://github.com/aditya-patra1011/boxbox_strategy_intelligence
cover: /projects/boxbox.png
---

## The problem

A race strategist has to decide which tyres to run, in what order, when to pit, and how risky that plan
is. BoxBox tries to answer those questions with data from the 2024 Formula 1 season.

## The pipeline

1. **Data:** the full 2024 season via FastF1, covering lap timing, pit stops, results, weather and telemetry.
2. **Cleaning:** removes pit, safety-car and outlier laps, then engineers features like fuel-corrected pace and compound age ratio.
3. **Degradation models:** polynomial, ridge and random-forest models per circuit and compound, with cross-validated RMSE picking the winner.
4. **Survival analysis:** Kaplan-Meier curves and Cox proportional-hazards models for stint length.
5. **Strategy simulation:** every realistic one- and two-stop plan per circuit, ranked into Plans A, B and C with risk scores.
6. **ML models:** stint length, compound selection, strategy, pit window, circuit clustering and undercut viability.
7. **Anomaly detection:** DBSCAN independently checks the manual cleaning from step 2.
8. **Circuit maps:** broadcast-style maps from GPS telemetry, with braking zones, DRS zones and turn markers.
9. **Dashboard:** a five-page Plotly Dash app with shareable per-circuit URLs.

## What I found

- **No single model wins.** Random forest was best for 39 of 59 circuit–compound pairs and ridge for 20.
  Degradation is often non-linear, but not always.
- **Two methods agreed on an outlier.** Canada 2024 lost 80% of its laps to safety-car disruption in
  cleaning, and DBSCAN flagged it independently.
- **Finding bugs changed the conclusions.** A safety-car probability that silently returned zero and a
  failing Cox model had been flattening the risk scores. Fixing them produced real variation between circuits.

<!-- TODO: one paragraph on what you'd do differently. -->
