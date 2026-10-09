// Business rules: which HEDIS measures the app tracks and how they're grouped.

export const HEDIS_MEASURES = [
  { code: "BCS", name: "Breast Cancer Screening", category: "Screenings" },
  { code: "COL", name: "Colorectal Cancer Screening", category: "Screenings" },
  { code: "HBD", name: "Diabetes HbA1c Control", category: "Chronic Care" },
];

export function isOverdue(gap, today = new Date()) {
  return new Date(gap.dueDate) < today;
}
