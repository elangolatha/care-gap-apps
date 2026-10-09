# PRD: Close a Care Gap

**Owner:** Hemalatha Elango | **Status:** Draft | **Version:** 0.1

## Problem
Gap lists go stale when providers address a gap but have no way to record it at the point of care.

## User Story
As a primary care provider, I want to mark a care gap as addressed during the visit, so that the gap list stays accurate.

## Acceptance Criteria
```gherkin
Scenario: Provider closes a care gap
  Given a patient chart shows an open HEDIS gap
  When the provider marks the gap as addressed
  Then the gap moves to "Closed" with today's date
  And the open gap count decreases by 1
Scenario: Provider cancels closing a gap
  Given a patient chart shows an open HEDIS gap
  When the provider clicks "Mark as addressed"
  And then clicks "Cancel"
  Then the gap stays open

```

## Open Questions
- [ ] Does closing a gap require supporting documentation?
