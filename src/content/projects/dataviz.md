---
title: DataViz
summary: A Streamlit web app that turns data you type, paste or upload into cleaning reports, interactive charts and plain-English insights.
tier: more
status: in-progress
order: 1
year: 2026
domains: [Data Apps, Data Science]
stack: [Python, Streamlit, pandas, Plotly, pytest, GitHub Actions]
repo: https://github.com/aditya-patra1011/DataViz
---

## The idea

Most people who need a quick chart don't want to write code. DataViz takes data typed into a table, pasted
from a spreadsheet or uploaded as CSV/Excel, cleans and checks it, and turns it into interactive charts.

## Design

The Streamlit pages only handle presentation. All the logic (ingesting, cleaning, profiling, statistics,
chart recommendations and storage) lives in a pure-Python `core/` package that never imports Streamlit, so
every piece is tested on its own and could sit behind a different front end, such as a REST API. Every pull
request is linted and tested by GitHub Actions.

## Progress

- **Done:** project setup and CI; data input (manual table, paste, CSV/Excel upload); a cleaning and
  validation pipeline with type detection, missing-value handling and outlier checks
- **In progress:** interactive visualisations (bar, line, pie, scatter, histogram, box plot, heatmap)
- **Next:** a chart recommender with auto-insights, saved datasets with export, and deployment

<!-- TODO: add a screenshot and a live link once it's deployed. -->
