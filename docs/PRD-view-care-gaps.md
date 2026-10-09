# PRD: View Open Care Gaps

**Owner:** Hemalatha Elango | **Status:** Approved | **Version:** 1.0

## Problem
Providers miss open HEDIS care gaps because gaps aren't visible in the EHR workflow.

## User Story
As a primary care provider, I want to see a patient's open care gaps when I open their chart, so that I can address them during the visit.

## Acceptance Criteria
```gherkin
Scenario: Open gaps displayed
  Given a patient has 2 open HEDIS gaps
  When the provider opens the patient chart
  Then both gaps are listed with measure name and due date
  And the list loads within 2 seconds

Scenario: No open gaps
  Given a patient has no open care gaps
  When the provider opens the patient chart
  Then the panel shows "No open care gaps"
```

## Open Questions
- [ ] Which EHRs are in scope for MVP?
