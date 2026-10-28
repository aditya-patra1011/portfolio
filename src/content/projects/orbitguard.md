---
title: OrbitGuard
summary: Screens every tracked satellite and debris piece for close approaches, scores each one's collision probability, and forecasts risk with ML. Runs itself every 6 hours and publishes a live 3-D dashboard.
tier: flagship
status: shipped
order: 1
year: 2026
domains: [Space, ML Engineering]
stack: [Python, SGP4, NumPy, SciPy, scikit-learn, FastAPI, PostgreSQL, Docker, GitHub Actions, CesiumJS]
highlights:
  - Live dashboard, refreshed every 6 hours by a scheduled pipeline
  - ~14,400 objects screened per run, with collision probability from measured uncertainty
  - Risk forecast on ESA's data tied a baseline only 12 of 97 competition teams beat
repo: https://github.com/aditya-patra1011/Orbitguard
demo: https://aditya-patra1011.github.io/Orbitguard/
cover: /projects/orbitguard-dashboard.webp
---

## The problem

Earth orbit is getting crowded. Operators need to know which pairs of objects will pass close to each
other in the next day or two, and how worried to be about each one. OrbitGuard answers both questions
from free public data, end to end: screening, collision probability, an ML risk forecast, an API, a
self-monitoring pipeline and a public dashboard.

## Screening

Every few hours OrbitGuard pulls the latest element sets from CelesTrak, propagates every object with
SGP4 on a 10-second grid, and finds close approaches between all pairs.

- **No missed encounters by construction.** Objects can close at up to ~15.8 km/s, so the KD-tree search
  radius is padded by `v_max · Δt / 2`, and a test checks a head-on crossing is still caught.
- **A lossless shortcut.** A linear relative-motion pre-filter made screening ~6x faster and produced
  the identical 1,773 conjunctions on a live one-hour window.
- **Formation flyers are separated.** Pairs moving slower than 0.1 km/s relative to each other (same-plane
  Starlinks, docked vehicles) are flagged as co-orbital instead of flooding the list.

![Early screening output from the command line](/projects/orbitguard.svg)

## Collision probability with measured uncertainty

Public element sets have no covariance, so OrbitGuard measures it: it propagates each object's older
element set to a newer one's epoch and fits the error growth per population. Two findings shaped the
design:

- **One model does not fit all.** Starlink satellites manoeuvre almost constantly, so their public data
  goes stale ~50x faster than passive debris. OrbitGuard fits one uncertainty model per population.
- **Calibration changes the answer.** With measured uncertainty, events above the usual action threshold
  (Pc ≥ 1e-4) fell from 97 to 7, almost all debris-on-debris.

## Forecasting final risk

Trained on ESA's Collision Avoidance Challenge data (162,634 conjunction data messages), the model
predicts an event's final risk two days before closest approach.

- Models that learned the final risk from scratch failed: only 66 of 8,293 training events end high-risk.
  So the model keeps the latest risk as its backbone and learns two corrections on top.
- The design and threshold were fixed by cross-validation before the test set was touched. On the
  held-out test set it caught **4 more dangerous events** than the baseline, with an F2 of **0.749**,
  a statistical tie with a baseline that only 12 of 97 competition teams beat.

## Serving, pipeline and dashboard

- **API:** FastAPI endpoints for runs, conjunctions and risk forecasts, backed by SQLite or PostgreSQL.
  A filtered query over a 46,000-conjunction run returns in about 60 ms.
- **Pipeline:** fetch → validate → recalibrate → screen → store → metrics → drift check. Bad data
  stops the run, and a robust z-score flags metrics that jump. It runs in Docker or on a schedule in
  GitHub Actions, and CI tests every pull request and smoke-tests the image.
- **Dashboard:** every screened object on a 3-D CesiumJS globe, propagated in the browser from the exact
  element sets the run used. Selecting an encounter replays the pass, and the miss distance is
  recomputed in the browser and checked against the server's value.

## Honest limitations

Public element sets carry kilometre-level error and lag behind manoeuvres, so a 100 m predicted miss is
not a 100 m real miss. That's why every event carries a probability, not just a distance.
