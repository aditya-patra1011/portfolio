---
title: Lunar Crater Detection
summary: Detects impact craters in lunar elevation data, tests the detectors on terrain they never saw, and serves the best model from ONNX behind a FastAPI service with calibrated confidence and drift monitoring.
tier: featured
status: shipped
order: 2
year: 2026
domains: [Space, Computer Vision]
stack: [Python, PyTorch, U-Net, ONNX, FastAPI, pytest, GitHub Actions]
highlights:
  - F1 0.539 on held-out terrain, against 0.369 for a classical baseline
  - About 81% of detections are real craters, after a by-eye audit
  - Calibrated confidence and drift monitoring on the served model
repo: https://github.com/aditya-patra1011/lunar_crater_detection
cover: /projects/lunar-dashboard.png
---

## The problem

Landing-site assessment, terrain-relative navigation and surface dating all need crater maps, but
cataloguing craters by hand doesn't scale. Crater detectors already exist, so this project focuses on what
they often skip: a reproducible pipeline, honest evaluation on unseen terrain, confidence estimates and a
deployable service.

## Approach

1. Tile LRO/LOLA elevation data and rasterise crater labels from the Robbins catalogue.
2. Split by geography, using blocked regions with a buffer, so test terrain is never seen in training or tuning.
3. Compare a classical radial-slope filter, a U-Net and a multi-scale U-Net.
4. Convert predictions into georeferenced craters: latitude, longitude and diameter.
5. Evaluate by crater size against the catalogue, then audit the unmatched detections by eye.
6. Export to ONNX, serve with FastAPI, and monitor input and prediction drift.

![Geographic split: training, validation and test regions](/projects/lunar-split-map.png)

## Results

On 429 test tiles from 7 regions never used for training or tuning (circle IoU ≥ 0.5):

| Detector | F1, all | F1, over 8 km |
| --- | ---: | ---: |
| Classical radial-slope filter | 0.369 | 0.443 |
| U-Net | 0.533 | 0.351 |
| **Served: U-Net plus a large-crater network** | **0.539** | **0.562** |

![Catalogue craters found (blue) and missed (yellow), with unmatched detections (red)](/projects/lunar-detections.png)

## What I found

- **Learning beats hand-written rules,** but the U-Net alone stitched arcs of small craters into false
  large ones. A second output trained only on craters 6 km and wider fixed that.
- **Small craters are the main gap.** Craters of 1–2 km are 70% of the test set, and 38% of them are found.
- **Precision is better than the catalogue says.** Of 60 unmatched detections checked by eye, 28% were real
  craters, which puts precision near 0.81 rather than 0.735.
- **The tile edge causes most large false alarms.** Circles running off the edge match the catalogue about
  half as often as circles inside the tile.
- **Confidence is calibrated** on unseen data, off by 0.014 on average, and **drift monitoring** stays quiet
  on normal tiles while flagging heights in the wrong units or smoothed data.

## Serving

The networks are exported to ONNX and served with FastAPI. Each detection comes back with latitude,
longitude, diameter and a calibrated confidence, a `/monitoring` report tracks drift against the training
data, and the API's home page is a small dashboard. CI runs the tests on every pull request.

## Limitations

The Robbins catalogue is roughly complete only above 1–2 km, so a detection with no match may still be a real
crater: reported precision is a lower bound. Craters over 32 km need bigger tiles than the ones used here.
