---
title: BoxBox
summary: An F1 Race Centre and strategy lab in one site. It replays the latest race with every car on track, tracks both championships, and models tyre strategy for every circuit.
tier: flagship
status: shipped
order: 2
year: 2026
domains: [Motorsport, Data Science]
stack: [Python, Plotly Dash, FastF1, OpenF1, scikit-learn, lifelines, SHAP, Streamlit]
highlights:
  - Race Centre replays the latest race lap by lap, from free OpenF1 data
  - Plan A/B/C from every 1-, 2- and 3-stop strategy, with risk scores
  - Random Forest won 39 of 59 degradation models, Ridge won the other 20
repo: https://github.com/aditya-patra1011/boxbox_strategy_intelligence
cover: /projects/boxbox-race-live.png
---

## The problem

A race strategist has to decide which tyres to run, in what order, when to pit, and how risky that plan
is. A fan wants to know what actually happened in the last race. BoxBox does both, in one website with
two sections.

## Race Centre: the current season

Built only on free data (OpenF1 and Jolpica), with six pages:

- **Race Live:** a replay of the latest race. Every car moves round the track in team colour, with the
  running order, tyre stints, a speed ticker and a lap chart. Safety Car, VSC and red-flag laps are
  detected from race control messages.
- **Race Analysis:** real tyre degradation measured from every clean lap, compared with the BoxBox model.
- **Standings, Calendar and Teams:** both championships round by round, including who can still
  mathematically win, every round's circuit, and each team's history counting predecessor teams.

Free data only arrives 30 minutes after a session ends, so a watcher follows the calendar and stores
each race the moment it's available. Open pages notice new data and offer to load it.

![Race Centre home page](/projects/boxbox-race-home.png)

![Race Analysis: measured tyre degradation](/projects/boxbox-race-analysis.png)

## Strategy Lab: the models

Built on the full 2024 season in nine phases:

1. **Data and cleaning:** lap timing, pit stops, weather and telemetry via FastF1, with pit, safety-car
   and outlier laps removed and features like fuel-corrected pace engineered.
2. **Degradation models:** polynomial, ridge and random forest per circuit and compound, with
   cross-validated RMSE picking the winner.
3. **Survival analysis:** Kaplan-Meier curves and Cox proportional-hazards models for stint length.
4. **Strategy simulation:** every valid 1-, 2- and 3-stop plan per circuit, ranked into Plans A, B and C
   with risk scores.
5. **Six ML models:** stint length, compound choice, strategy, pit window, circuit clustering and undercut
   viability, explained with SHAP.
6. **Anomaly detection:** DBSCAN independently checks the manual cleaning.

![Strategy Lab: Plan A/B/C for a circuit](/projects/boxbox.png)

## What I found

- **No single model wins.** Random forest was best for 39 of 59 circuit–compound pairs and ridge for 20.
  Degradation is often non-linear, but not always.
- **Two methods agreed on an outlier.** Canada 2024 lost 80% of its laps to safety-car disruption in
  cleaning, and DBSCAN flagged it independently.
- **Finding bugs changed the conclusions.** A safety-car probability that silently returned zero and a
  failing Cox model had been flattening the risk scores. Fixing them produced real variation between
  circuits.

![Championship standings](/projects/boxbox-standings.png)

<!-- TODO: one paragraph on what you'd do differently. -->
