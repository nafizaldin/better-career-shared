/*
 * Resume dates are stored as strings in item.date. Canonical form (written by
 * the editor since v1.2.0):
 *   "2020-01"                 single month
 *   "2020"                    year only
 *   "2020-01 - 2022-03"       range
 *   "2020-01 - Present"       ongoing
 * Older data used display strings ("Jan 2020 - Mar 2022", "01/2020") or ISO
 * dates ("2020-01-15"); parseResumeDate reads all of them, and templates
 * format the result with metadata.presentation.dateFormat.
 */

export type DateFormat = "mm/yyyy" | "mmm yyyy" | "month yyyy" | "yyyy";

export type ResumeMonth = { year: number; month?: number }; // month: 1-12

export type ResumeDateRange = {
  start?: ResumeMonth;
  /** "present" for ongoing ranges */
  end?: ResumeMonth | "present";
};

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

const PRESENT = /^(present|current|now|ongoing)$/i;

/** One date part: "2020-01", "2020-01-15", "01/2020", "Jan 2020", "January 2020", "2020". */
const parseMonth = (raw: string): ResumeMonth | undefined => {
  const value = raw.trim();
  let m = value.match(/^(\d{4})-(\d{1,2})(?:-\d{1,2})?(?:T.*)?$/);
  if (m) return { year: Number(m[1]), month: Number(m[2]) };
  m = value.match(/^(\d{1,2})\/(\d{4})$/);
  if (m) return { year: Number(m[2]), month: Number(m[1]) };
  m = value.match(/^([A-Za-z]{3,9})\.?\s+(\d{4})$/);
  if (m) {
    const index = MONTHS.findIndex((name) => name.startsWith(m![1].toLowerCase()));
    if (index >= 0) return { year: Number(m[2]), month: index + 1 };
  }
  m = value.match(/^(\d{4})$/);
  if (m) return { year: Number(m[1]) };
  return undefined;
};

/** Parse a stored date or range; null if it isn't a recognisable date (free text). */
export const parseResumeDate = (input: string | undefined | null): ResumeDateRange | null => {
  const value = (input ?? "").trim();
  if (!value) return null;
  // Split ranges on " - ", " – ", " — " or " to " (spaces required: "2020-01" has a dash)
  const parts = value.split(/\s+(?:-|–|—|to)\s+/i);
  if (parts.length > 2) return null;
  const start = parseMonth(parts[0]);
  if (!start) return null;
  if (parts.length === 1) return { start };
  if (PRESENT.test(parts[1].trim())) return { start, end: "present" };
  const end = parseMonth(parts[1]);
  return end ? { start, end } : null;
};

const pad = (n: number) => String(n).padStart(2, "0");

export const formatResumeMonth = (date: ResumeMonth, format: DateFormat): string => {
  if (!date.month || format === "yyyy") return String(date.year);
  const name = MONTHS[date.month - 1];
  switch (format) {
    case "mm/yyyy":
      return `${pad(date.month)}/${date.year}`;
    case "month yyyy":
      return `${name[0].toUpperCase()}${name.slice(1)} ${date.year}`;
    default:
      return `${name[0].toUpperCase()}${name.slice(1, 3)} ${date.year}`;
  }
};

/** Display a stored date in the resume's format; free text is returned unchanged. */
export const formatResumeDate = (
  input: string | undefined | null,
  format: DateFormat = "mmm yyyy",
  presentLabel = "Present",
): string => {
  const parsed = parseResumeDate(input);
  if (!parsed?.start) return (input ?? "").trim();
  const start = formatResumeMonth(parsed.start, format);
  if (!parsed.end) return start;
  const end = parsed.end === "present" ? presentLabel : formatResumeMonth(parsed.end, format);
  return `${start} - ${end}`;
};

/** Build the canonical stored string from form values ("YYYY-MM[-DD]" / Date / empty). */
export const toResumeDate = (
  start: string | Date | undefined | null,
  end?: string | Date | "present" | null,
): string => {
  const month = (value: string | Date | undefined | null): string => {
    if (!value) return "";
    if (value instanceof Date) return `${value.getFullYear()}-${pad(value.getMonth() + 1)}`;
    const parsed = parseMonth(value);
    if (!parsed) return "";
    return parsed.month ? `${parsed.year}-${pad(parsed.month)}` : String(parsed.year);
  };
  const from = month(start);
  if (!from) return "";
  if (end === "present") return `${from} - Present`;
  const to = month(end ?? undefined);
  return to ? `${from} - ${to}` : from;
};
