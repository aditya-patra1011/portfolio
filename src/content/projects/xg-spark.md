---
title: xG-Spark
summary: An expected-goals (xG) model for football built end to end on Apache Spark, from StatsBomb's open event data to a partitioned Parquet lakehouse.
tier: more
status: in-progress
order: 0
year: 2026
domains: [Sport, Big Data]
stack: [Python, PySpark, Parquet, StatsBomb Open Data]
repo: https://github.com/aditya-patra1011/xG-Spark
---

## The problem

Expected goals (xG) estimates how likely a shot is to become a goal from where and how it was taken. This
Big Data Analytics project builds an xG model as a full PySpark pipeline instead of a single notebook.

## Progress

- **Phase 0:** project setup with a local PySpark environment
- **Phase 1:** a parallel downloader for StatsBomb's open event data
- **Phase 2:** Spark ingestion into a partitioned Parquet "bronze" layer

Feature engineering, the model and its evaluation come next.

<!-- TODO: update with results and a screenshot when the project is finished. -->
