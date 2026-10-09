// What the provider sees: the list of open care gaps in the patient chart.

import { getOpenCareGaps, closeCareGap } from "../api/careGaps.js";

export async function renderCareGapPanel(patientId) {
  const gaps = await getOpenCareGaps(patientId);

  if (gaps.length === 0) {
    return "No open care gaps";
  }

  return gaps.map(gap => ({
    measure: gap.measureName,
    due: gap.dueDate,
    action: () => closeCareGap(gap.id), // "Mark as addressed" button
  }));
}
