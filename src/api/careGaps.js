// Talks to the EHR through FHIR to read and update care gaps.
// Sample code for learning — not connected to a real EHR.

export async function getOpenCareGaps(patientId) {
  const response = await fetch(`/fhir/MeasureReport?patient=${patientId}&status=open`);
  if (!response.ok) {
    throw new Error("Care gaps are temporarily unavailable");
  }
  return response.json();
}

export async function closeCareGap(gapId) {
  return fetch(`/fhir/MeasureReport/${gapId}`, {
    method: "PATCH",
    body: JSON.stringify({ status: "closed", closedDate: new Date().toISOString() }),
  });
}
