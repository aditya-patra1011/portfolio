---
title: Lunar Crater Detection
summary: Detects impact craters in lunar elevation data and tests the detectors on terrain they never saw during training.
tier: featured
status: in-progress
order: 4
year: 2026
domains: [Space, Computer Vision]
stack: [Python, PyTorch, U-Net, GitHub Actions]
highlights:
  - Geographic train/test split with buffer zones, not random tiles
repo: https://github.com/aditya-patra1011/lunar_crater_detection
---

## The problem

Landing-site assessment, terrain-relative navigation and surface dating all need crater maps, but
cataloguing craters by hand doesn't scale. Crater detectors already exist, so this project focuses on what
they often skip: a reproducible pipeline, evaluation on held-out terrain, confidence estimates and a deployable service.

## Plan

1. Tile LRO/LOLA elevation data and rasterise crater labels from the Robbins catalogue.
2. Split by geography, using blocked regions with a buffer, so test terrain is unseen.
3. Compare a classical baseline, a U-Net, a multi-scale U-Net and an object detector.
4. Convert predictions into georeferenced craters and serve the best model behind a small API.

## Status

The repository skeleton and CI are in place. No models have been trained yet.

<!-- TODO: update as training lands. -->
