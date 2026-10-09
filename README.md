# Care Gap App

Shows providers a patient's open HEDIS care gaps inside the EHR, so gaps can be closed during the visit.

> Practice repository — sample content for learning how a product repo is organized. No real patient data.

## What's in this repository

| Folder / file | What it holds |
|---|---|
| `docs/` | Product requirement documents (PRDs), one per feature |
| `src/api/` | Code that talks to the EHR through FHIR |
| `src/screens/` | What the provider sees |
| `src/rules/` | Business rules (HEDIS measures) |
| `tests/` | Automated checks |
| `CLAUDE.md` | Rules for AI coding tools |
| `.github/` | GitHub settings, such as the pull request template |

## Features

- [View open care gaps](docs/PRD-view-care-gaps.md)
- [Close a care gap](docs/PRD-close-care-gaps.md)
