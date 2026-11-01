import { z } from "zod";

export const defaultLayout = [
  [
    ["profiles", "summary", "experience", "education", "projects", "volunteer", "references"],
    ["skills", "interests", "certifications", "awards", "publications", "languages"],
  ],
];

/*
 * Every nested object has `.default({})`, so resumes saved before a field was
 * added still validate (the inner defaults fill in). Keep it that way when
 * adding fields: new field -> `.default(...)`, new object -> `.default({})`.
 * The editor's Design tab writes these values; templates render them
 * (artboard: CSS variables + useTemplateSettings()).
 */

/** One value per text role (font weight / scale / transform settings). */
const roles = <T>(value: () => T) => ({
  body: value(),
  name: value(),
  primaryHeading: value(),
  secondaryHeading: value(),
  sectionTitle: value(),
  minor: value(),
});
const weight = () => z.number().int().min(300).max(800).default(400);
const scale = () => z.number().min(0.75).max(2).default(1);
const transform = () => z.enum(["none", "uppercase", "capitalize"]).default("none");

// Schema
export const metadataSchema = z.object({
  template: z.string().default("onyx"),
  layout: z.array(z.array(z.array(z.string()))).default(defaultLayout), // pages -> columns -> sections
  css: z
    .object({
      value: z.string().default(".section {\n\toutline: 1px solid #000;\n\toutline-offset: 4px;\n}"),
      visible: z.boolean().default(false),
    })
    .default({}),
  page: z
    .object({
      /** Top/bottom margin in mm (also the side margins unless marginLeft/Right are set). */
      margin: z.number().default(18),
      /** Side margins in mm. */
      marginLeft: z.number().min(0).max(50).default(18),
      marginRight: z.number().min(0).max(50).default(18),
      format: z.enum(["a4", "letter", "legal"]).default("a4"),
      options: z
        .object({
          breakLine: z.boolean().default(true),
          pageNumbers: z.boolean().default(true),
        })
        .default({}),
    })
    .default({}),
  theme: z
    .object({
      background: z.string().default("#ffffff"),
      text: z.string().default("#000000"),
      /** Accent colour (Design → Presentation). */
      primary: z.string().default("#dc2626"),
    })
    .default({}),
  typography: z
    .object({
      font: z
        .object({
          /** CSS font-family name the artboard can load (Google Fonts or bundled). */
          family: z.string().default("IBM Plex Serif"),
          subset: z.string().default("latin"),
          variants: z.array(z.string()).default(["regular"]),
          /** Base size in px. */
          size: z.number().default(14),
        })
        .default({}),
      /** Line-height multiplier for paragraphs. */
      lineHeight: z.number().min(1).max(2.5).default(1.5),
      /** Line-height multiplier for list items. */
      listLineHeight: z.number().min(1).max(2.5).default(1.4),
      hideIcons: z.boolean().default(false),
      underlineLinks: z.boolean().default(true),
    })
    .default({}),
  /** Design → Presentation */
  presentation: z
    .object({
      dateFormat: z.enum(["mm/yyyy", "mmm yyyy", "month yyyy", "yyyy"]).default("mmm yyyy"),
      headerAlignment: z.enum(["left", "center", "right"]).default("left"),
      dateAlignment: z.enum(["left", "right"]).default("right"),
      locationAlignment: z.enum(["left", "right"]).default("right"),
      skillsLayout: z.enum(["comma-separated", "comma-separated-list", "columns"]).default("comma-separated"),
      skillsColumns: z.number().int().min(1).max(5).default(3),
    })
    .default({}),
  /** Design → Settings: what each entry leads with */
  display: z
    .object({
      experience: z
        .object({
          primary: z.enum(["company", "position"]).default("company"),
          location: z.enum(["company", "position", "none"]).default("company"),
          dates: z.enum(["company", "position", "both"]).default("company"),
        })
        .default({}),
      education: z
        .object({
          primary: z.enum(["institution", "degree"]).default("institution"),
        })
        .default({}),
    })
    .default({}),
  /** Design → Advanced */
  advanced: z
    .object({
      bullets: z.enum(["circle", "dash", "chevron", "arrow", "comma", "line"]).default("circle"),
      /** CSS font-weight per role. */
      fontWeight: z.object(roles(weight)).default({}),
      /** Font-size multiplier per role, relative to typography.font.size. */
      fontScale: z.object(roles(scale)).default({}),
      textTransform: z.object(roles(transform)).default({}),
      /** Spacing in px. */
      spacing: z
        .object({
          betweenSections: z.number().min(0).max(48).default(16),
          titleToContent: z.number().min(0).max(48).default(8),
          headingToSubheading: z.number().min(0).max(48).default(2),
          betweenBlocks: z.number().min(0).max(48).default(12),
          betweenListItems: z.number().min(0).max(48).default(4),
        })
        .default({}),
      /** Border widths in px (0 = none). */
      borders: z
        .object({
          aboveHeader: z.number().min(0).max(4).default(0),
          belowHeader: z.number().min(0).max(4).default(0),
          sectionTitles: z.number().min(0).max(4).default(0),
        })
        .default({}),
    })
    .default({}),
  notes: z.string().default(""),
});

// Type
export type Metadata = z.infer<typeof metadataSchema>;

// Defaults (derived from the schema so the two can never drift apart)
export const defaultMetadata: Metadata = metadataSchema.parse({
  typography: { font: { variants: ["regular", "italic", "600"] } },
});
