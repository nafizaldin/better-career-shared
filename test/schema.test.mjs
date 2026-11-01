// Run: pnpm test (builds first). Uses the CommonJS build.
import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { metadataSchema, defaultMetadata, resumeDataSchema, defaultResumeData, educationSchema } =
  require("../dist/schema/index.js");

test("old metadata without css/page.options/theme validates and gets defaults", () => {
  // Shape of resumes created from a template row before the v1.2.0 defaults
  const legacy = {
    template: "onyx",
    layout: [[["summary"], ["skills"]]],
    page: { margin: 18, format: "a4" },
    typography: { font: { family: "IBM Plex Serif", subset: "latin", variants: ["regular"] }, lineHeight: 1.5, hideIcons: false, underlineLinks: true },
  };
  const parsed = metadataSchema.parse(legacy);
  assert.deepEqual(parsed.page.options, { breakLine: true, pageNumbers: true });
  assert.equal(parsed.css.visible, false);
  assert.equal(parsed.theme.primary, "#dc2626");
  assert.equal(parsed.typography.font.size, 14);
  assert.equal(parsed.notes, "");
  // New v1.2.0 groups are filled in
  assert.equal(parsed.presentation.dateFormat, "mmm yyyy");
  assert.equal(parsed.display.experience.primary, "company");
  assert.equal(parsed.advanced.fontWeight.body, 400);
  assert.equal(parsed.page.marginLeft, 18);
  // Existing values are kept
  assert.deepEqual(parsed.layout, [[["summary"], ["skills"]]]);
});

test("defaultMetadata is complete and valid", () => {
  assert.deepEqual(metadataSchema.parse(defaultMetadata), defaultMetadata);
  assert.deepEqual(defaultMetadata.typography.font.variants, ["regular", "italic", "600"]);
  assert.equal(defaultMetadata.advanced.spacing.betweenSections, 16);
});

test("default resume data validates", () => {
  assert.ok(resumeDataSchema.safeParse(defaultResumeData).success);
});

test("education location defaults for older items", () => {
  const item = { id: "edu1", visible: true, institution: "MIT", studyType: "BSc", area: "CS", score: "", date: "", summary: "", url: { label: "", href: "" } };
  assert.equal(educationSchema.parse(item).location, "");
});

test("invalid enum values are rejected", () => {
  assert.equal(metadataSchema.safeParse({ presentation: { dateFormat: "dd.mm.yyyy" } }).success, false);
  assert.equal(metadataSchema.safeParse({ advanced: { bullets: "star" } }).success, false);
});

test("every allowed page format has a size", () => {
  const { pageSizeMap } = require("../dist/utils/index.js");
  for (const format of metadataSchema.shape.page.removeDefault().shape.format.removeDefault().options) {
    assert.ok(pageSizeMap[format], `pageSizeMap.${format}`);
  }
});
