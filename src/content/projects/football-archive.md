---
title: Football Archive Database
summary: A normalised MySQL database for football analytics, with views, stored procedures and a dozen analytical queries.
tier: more
status: shipped
order: 3
year: 2026
domains: [Sport, Databases]
stack: [MySQL, SQL]
repo: https://github.com/aditya-patra1011/football-archive
---

## Overview

The schema covers countries, leagues, seasons, teams, players, matches, goals and transfers, plus
aggregated season statistics and standings tables.

## Highlights

- Views for league tables, match results, goal logs, top scorers and transfer history
- Stored procedures for team fixtures, top-N scorers and head-to-head records
- Analytical queries, including xG over- or under-performance by team, goal contributions per 90 minutes and a discipline index
