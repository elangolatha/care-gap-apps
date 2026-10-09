# Rules for AI coding tools

## Project
Care Gap App: shows open HEDIS care gaps to providers inside the EHR.

## Always
- Read the matching PRD in `docs/` before building a feature.
- Meet every Given/When/Then acceptance criterion in that PRD.
- Add or update a test in `tests/` for every change.
- Keep pages loading in under 2 seconds.

## Never
- Never log, print or store patient names, dates of birth or other PHI.
- Never hard-code passwords, API keys or EHR credentials.
- Never change files in `docs/` — PRDs are owned by the product team.

## Definition of done
- All acceptance criteria pass.
- Tests pass.
- A pull request links the Jira ticket.
