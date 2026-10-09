// Automated checks for care gap rules. Run before every merge.

import { isOverdue } from "../src/rules/hedisMeasures.js";

test("a gap past its due date is overdue", () => {
  expect(isOverdue({ dueDate: "2026-01-01" }, new Date("2026-10-09"))).toBe(true);
});

test("a gap due in the future is not overdue", () => {
  expect(isOverdue({ dueDate: "2026-12-31" }, new Date("2026-10-09"))).toBe(false);
});
