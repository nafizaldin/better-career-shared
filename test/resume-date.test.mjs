import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { parseResumeDate, formatResumeDate, toResumeDate } = require("../dist/utils/index.js");

test("parses canonical and legacy forms", () => {
  assert.deepEqual(parseResumeDate("2020-01"), { start: { year: 2020, month: 1 } });
  assert.deepEqual(parseResumeDate("2020-01-15"), { start: { year: 2020, month: 1 } });
  assert.deepEqual(parseResumeDate("01/2020"), { start: { year: 2020, month: 1 } });
  assert.deepEqual(parseResumeDate("Jan 2020"), { start: { year: 2020, month: 1 } });
  assert.deepEqual(parseResumeDate("September 2021"), { start: { year: 2021, month: 9 } });
  assert.deepEqual(parseResumeDate("2019"), { start: { year: 2019 } });
  assert.deepEqual(parseResumeDate("Jan 2020 - Mar 2022"), { start: { year: 2020, month: 1 }, end: { year: 2022, month: 3 } });
  assert.deepEqual(parseResumeDate("2020-01 - Present"), { start: { year: 2020, month: 1 }, end: "present" });
  assert.deepEqual(parseResumeDate("2020-01 – 2021-06"), { start: { year: 2020, month: 1 }, end: { year: 2021, month: 6 } });
});

test("free text and empty values are not dates", () => {
  assert.equal(parseResumeDate(""), null);
  assert.equal(parseResumeDate("Summer internship"), null);
  assert.equal(parseResumeDate("Jan 2020 - sometime"), null);
});

test("formats in every display format", () => {
  const v = "2020-01 - 2022-03";
  assert.equal(formatResumeDate(v, "mmm yyyy"), "Jan 2020 - Mar 2022");
  assert.equal(formatResumeDate(v, "month yyyy"), "January 2020 - March 2022");
  assert.equal(formatResumeDate(v, "mm/yyyy"), "01/2020 - 03/2022");
  assert.equal(formatResumeDate(v, "yyyy"), "2020 - 2022");
  assert.equal(formatResumeDate("2020-01 - Present", "mmm yyyy", "Aktuell"), "Jan 2020 - Aktuell");
  assert.equal(formatResumeDate("Jan 2020 - Mar 2022", "mm/yyyy"), "01/2020 - 03/2022"); // legacy input
  assert.equal(formatResumeDate("Summer internship", "yyyy"), "Summer internship"); // free text untouched
});

test("builds canonical strings from form values", () => {
  assert.equal(toResumeDate("2020-01-15", "2022-03-01"), "2020-01 - 2022-03");
  assert.equal(toResumeDate("2020-01-15", "present"), "2020-01 - Present");
  assert.equal(toResumeDate("2020-01-15"), "2020-01");
  assert.equal(toResumeDate(new Date(2021, 8, 1)), "2021-09");
  assert.equal(toResumeDate(""), "");
});
