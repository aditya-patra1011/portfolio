---
title: OrbitGuard
summary: Screens thousands of satellites and debris pieces for close approaches from public orbital data, and is growing into an ML collision-risk service.
tier: flagship
status: in-progress
order: 1
year: 2026
domains: [Space, ML Engineering]
stack: [Python, SGP4, NumPy, SciPy KD-tree, pytest, FastAPI (planned), Docker (planned)]
highlights:
  - 14,391 objects screened over 24 h in 273 s
  - 47,753 conjunctions under 5 km found in one run
  - Linear pre-filter made the pipeline ~6x faster with identical results
repo: https://github.com/aditya-patra1011/Orbitguard
cover: /projects/orbitguard.svg
---

## The problem

Earth orbit is getting crowded. Operators need to know which pairs of objects will pass close to each
other in the next day or two, and how worried to be about each one. OrbitGuard does the first part
today using only public data, and is being extended to do the second.

## How screening works

1. Pull the latest general-perturbations element sets from CelesTrak, validate them and cache them for two hours.
2. Drop element sets older than 14 days, since SGP4 error grows by roughly 1–3 km per day.
3. Propagate every object with SGP4 on a 10-second grid, vectorised.
4. Find candidate pairs with a KD-tree, then a linear relative-motion pre-filter removes ~99% of them.
5. Group what survives into encounters and refine the time of closest approach.

## Design decisions

- **No missed encounters by construction.** Objects can close at up to ~15.8 km/s, so the KD-tree
  search radius is padded by `v_max · Δt / 2`. A test checks that a head-on crossing is still caught with a 60 s grid.
- **The pre-filter is lossless in practice.** On a live one-hour window, filtered and unfiltered runs
  produced the same 1,773 conjunctions.
- **Formation flyers are separated.** Pairs moving slower than 0.1 km/s relative to each other
  (same-plane Starlinks, docked vehicles) are flagged as co-orbital instead of flooding the list.

## Honest limitations

Public element sets have no covariance and kilometre-level error, so a 31 m predicted miss is not a 31 m
real miss. That gap is what the next phase is for.

## What's next

<!-- TODO: update this list as phases land. -->

- Collision probability in the B-plane, with covariance estimated from element-set history
- An ML risk model trained on ESA's Kelvins collision-avoidance data
- A FastAPI service, scheduled screening with monitoring, and a 3-D globe dashboard
