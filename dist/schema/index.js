"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/schema/index.ts
var schema_exports = {};
__export(schema_exports, {
  awardSchema: () => awardSchema,
  basicsSchema: () => basicsSchema,
  certificationSchema: () => certificationSchema,
  customFieldSchema: () => customFieldSchema,
  customSchema: () => customSchema,
  customSectionSchema: () => customSectionSchema,
  defaultAward: () => defaultAward,
  defaultBasics: () => defaultBasics,
  defaultCertification: () => defaultCertification,
  defaultCustomSection: () => defaultCustomSection,
  defaultEducation: () => defaultEducation,
  defaultExperience: () => defaultExperience,
  defaultInterest: () => defaultInterest,
  defaultItem: () => defaultItem,
  defaultLanguage: () => defaultLanguage,
  defaultLayout: () => defaultLayout,
  defaultMetadata: () => defaultMetadata,
  defaultProfile: () => defaultProfile,
  defaultProject: () => defaultProject,
  defaultPublication: () => defaultPublication,
  defaultReference: () => defaultReference,
  defaultResumeData: () => defaultResumeData,
  defaultSection: () => defaultSection,
  defaultSections: () => defaultSections,
  defaultSkill: () => defaultSkill,
  defaultUrl: () => defaultUrl,
  defaultVolunteer: () => defaultVolunteer,
  educationSchema: () => educationSchema,
  emptyResumeData: () => emptyResumeData,
  experienceSchema: () => experienceSchema,
  idSchema: () => idSchema,
  interestSchema: () => interestSchema,
  itemSchema: () => itemSchema,
  languageSchema: () => languageSchema,
  metadataSchema: () => metadataSchema,
  minimalResumeData: () => minimalResumeData,
  profileSchema: () => profileSchema,
  projectSchema: () => projectSchema,
  publicationSchema: () => publicationSchema,
  referenceSchema: () => referenceSchema,
  resumeDataSchema: () => resumeDataSchema,
  sampleResume: () => sampleResume,
  sectionSchema: () => sectionSchema,
  sectionsSchema: () => sectionsSchema,
  skillSchema: () => skillSchema,
  urlSchema: () => urlSchema,
  volunteerSchema: () => volunteerSchema
});
module.exports = __toCommonJS(schema_exports);
var import_zod21 = require("zod");

// src/schema/basics/index.ts
var import_zod5 = require("zod");

// src/schema/shared/id.ts
var import_cuid2 = require("@paralleldrive/cuid2");
var import_zod = require("zod");
var idSchema = import_zod.z.string().min(1).default((0, import_cuid2.createId)()).describe("Unique identifier for the item");

// src/schema/shared/item.ts
var import_zod2 = require("zod");
var itemSchema = import_zod2.z.object({
  id: idSchema,
  visible: import_zod2.z.boolean()
});
var defaultItem = {
  id: "",
  visible: true
};

// src/schema/shared/url.ts
var import_zod3 = require("zod");
var urlSchema = import_zod3.z.object({
  label: import_zod3.z.string(),
  href: import_zod3.z.literal("").or(import_zod3.z.string().url())
});
var defaultUrl = {
  label: "",
  href: ""
};

// src/schema/basics/custom.ts
var import_zod4 = require("zod");
var customFieldSchema = import_zod4.z.object({
  id: import_zod4.z.string().min(1),
  icon: import_zod4.z.string(),
  name: import_zod4.z.string(),
  value: import_zod4.z.string()
});

// src/schema/basics/index.ts
var basicsSchema = import_zod5.z.object({
  name: import_zod5.z.string(),
  headline: import_zod5.z.string(),
  email: import_zod5.z.literal("").or(import_zod5.z.string().email()),
  phone: import_zod5.z.string(),
  location: import_zod5.z.string(),
  url: urlSchema,
  customFields: import_zod5.z.array(customFieldSchema),
  picture: import_zod5.z.object({
    url: import_zod5.z.string(),
    size: import_zod5.z.number().default(64),
    aspectRatio: import_zod5.z.number().default(1),
    borderRadius: import_zod5.z.number().default(0),
    effects: import_zod5.z.object({
      hidden: import_zod5.z.boolean().default(false),
      border: import_zod5.z.boolean().default(false),
      grayscale: import_zod5.z.boolean().default(false)
    })
  })
});
var defaultBasics = {
  name: "",
  headline: "",
  email: "",
  phone: "",
  location: "",
  url: defaultUrl,
  customFields: [],
  picture: {
    url: "",
    size: 64,
    aspectRatio: 1,
    borderRadius: 8,
    effects: {
      hidden: false,
      border: false,
      grayscale: false
    }
  }
};

// src/schema/metadata/index.ts
var import_zod6 = require("zod");
var defaultLayout = [
  [
    ["profiles", "summary", "experience", "education", "projects", "volunteer", "references"],
    ["skills", "interests", "certifications", "awards", "publications", "languages"]
  ]
];
var roles = (value) => ({
  body: value(),
  name: value(),
  primaryHeading: value(),
  secondaryHeading: value(),
  sectionTitle: value(),
  minor: value()
});
var weight = () => import_zod6.z.number().int().min(300).max(800).default(400);
var scale = () => import_zod6.z.number().min(0.75).max(2).default(1);
var transform = () => import_zod6.z.enum(["none", "uppercase", "capitalize"]).default("none");
var metadataSchema = import_zod6.z.object({
  template: import_zod6.z.string().default("onyx"),
  layout: import_zod6.z.array(import_zod6.z.array(import_zod6.z.array(import_zod6.z.string()))).default(defaultLayout),
  // pages -> columns -> sections
  css: import_zod6.z.object({
    value: import_zod6.z.string().default(".section {\n	outline: 1px solid #000;\n	outline-offset: 4px;\n}"),
    visible: import_zod6.z.boolean().default(false)
  }).default({}),
  page: import_zod6.z.object({
    /** Top/bottom margin in mm (also the side margins unless marginLeft/Right are set). */
    margin: import_zod6.z.number().default(18),
    /** Side margins in mm. */
    marginLeft: import_zod6.z.number().min(0).max(50).default(18),
    marginRight: import_zod6.z.number().min(0).max(50).default(18),
    format: import_zod6.z.enum(["a4", "letter", "legal"]).default("a4"),
    options: import_zod6.z.object({
      breakLine: import_zod6.z.boolean().default(true),
      pageNumbers: import_zod6.z.boolean().default(true)
    }).default({})
  }).default({}),
  theme: import_zod6.z.object({
    background: import_zod6.z.string().default("#ffffff"),
    text: import_zod6.z.string().default("#000000"),
    /** Accent colour (Design → Presentation). */
    primary: import_zod6.z.string().default("#dc2626")
  }).default({}),
  typography: import_zod6.z.object({
    font: import_zod6.z.object({
      /** CSS font-family name the artboard can load (Google Fonts or bundled). */
      family: import_zod6.z.string().default("IBM Plex Serif"),
      subset: import_zod6.z.string().default("latin"),
      variants: import_zod6.z.array(import_zod6.z.string()).default(["regular"]),
      /** Base size in px. */
      size: import_zod6.z.number().default(14)
    }).default({}),
    /** Line-height multiplier for paragraphs. */
    lineHeight: import_zod6.z.number().min(1).max(2.5).default(1.5),
    /** Line-height multiplier for list items. */
    listLineHeight: import_zod6.z.number().min(1).max(2.5).default(1.4),
    hideIcons: import_zod6.z.boolean().default(false),
    underlineLinks: import_zod6.z.boolean().default(true)
  }).default({}),
  /** Design → Presentation */
  presentation: import_zod6.z.object({
    dateFormat: import_zod6.z.enum(["mm/yyyy", "mmm yyyy", "month yyyy", "yyyy"]).default("mmm yyyy"),
    headerAlignment: import_zod6.z.enum(["left", "center", "right"]).default("left"),
    dateAlignment: import_zod6.z.enum(["left", "right"]).default("right"),
    locationAlignment: import_zod6.z.enum(["left", "right"]).default("right"),
    skillsLayout: import_zod6.z.enum(["comma-separated", "comma-separated-list", "columns"]).default("comma-separated"),
    skillsColumns: import_zod6.z.number().int().min(1).max(5).default(3)
  }).default({}),
  /** Design → Settings: what each entry leads with */
  display: import_zod6.z.object({
    experience: import_zod6.z.object({
      primary: import_zod6.z.enum(["company", "position"]).default("company"),
      location: import_zod6.z.enum(["company", "position", "none"]).default("company"),
      dates: import_zod6.z.enum(["company", "position", "both"]).default("company")
    }).default({}),
    education: import_zod6.z.object({
      primary: import_zod6.z.enum(["institution", "degree"]).default("institution")
    }).default({})
  }).default({}),
  /** Design → Advanced */
  advanced: import_zod6.z.object({
    bullets: import_zod6.z.enum(["circle", "dash", "chevron", "arrow", "comma", "line"]).default("circle"),
    /** CSS font-weight per role. */
    fontWeight: import_zod6.z.object(roles(weight)).default({}),
    /** Font-size multiplier per role, relative to typography.font.size. */
    fontScale: import_zod6.z.object(roles(scale)).default({}),
    textTransform: import_zod6.z.object(roles(transform)).default({}),
    /** Spacing in px. */
    spacing: import_zod6.z.object({
      betweenSections: import_zod6.z.number().min(0).max(48).default(16),
      titleToContent: import_zod6.z.number().min(0).max(48).default(8),
      headingToSubheading: import_zod6.z.number().min(0).max(48).default(2),
      betweenBlocks: import_zod6.z.number().min(0).max(48).default(12),
      betweenListItems: import_zod6.z.number().min(0).max(48).default(4)
    }).default({}),
    /** Border widths in px (0 = none). */
    borders: import_zod6.z.object({
      aboveHeader: import_zod6.z.number().min(0).max(4).default(0),
      belowHeader: import_zod6.z.number().min(0).max(4).default(0),
      sectionTitles: import_zod6.z.number().min(0).max(4).default(0)
    }).default({})
  }).default({}),
  notes: import_zod6.z.string().default("")
});
var defaultMetadata = metadataSchema.parse({
  typography: { font: { variants: ["regular", "italic", "600"] } }
});

// src/schema/sections/index.ts
var import_zod20 = require("zod");

// src/schema/sections/award.ts
var import_zod7 = require("zod");
var awardSchema = itemSchema.extend({
  title: import_zod7.z.string().min(1),
  awarder: import_zod7.z.string(),
  date: import_zod7.z.string(),
  summary: import_zod7.z.string(),
  url: urlSchema
});
var defaultAward = {
  ...defaultItem,
  title: "",
  awarder: "",
  date: "",
  summary: "",
  url: defaultUrl
};

// src/schema/sections/certification.ts
var import_zod8 = require("zod");
var certificationSchema = itemSchema.extend({
  name: import_zod8.z.string().min(1),
  issuer: import_zod8.z.string(),
  date: import_zod8.z.string(),
  summary: import_zod8.z.string(),
  url: urlSchema
});
var defaultCertification = {
  ...defaultItem,
  name: "",
  issuer: "",
  date: "",
  summary: "",
  url: defaultUrl
};

// src/schema/sections/custom-section.ts
var import_zod9 = require("zod");
var customSectionSchema = itemSchema.extend({
  name: import_zod9.z.string(),
  description: import_zod9.z.string(),
  date: import_zod9.z.string(),
  location: import_zod9.z.string(),
  summary: import_zod9.z.string(),
  keywords: import_zod9.z.array(import_zod9.z.string()).default([]),
  url: urlSchema
});
var defaultCustomSection = {
  ...defaultItem,
  name: "",
  description: "",
  date: "",
  location: "",
  summary: "",
  keywords: [],
  url: defaultUrl
};

// src/schema/sections/education.ts
var import_zod10 = require("zod");
var educationSchema = itemSchema.extend({
  institution: import_zod10.z.string().min(1),
  studyType: import_zod10.z.string(),
  area: import_zod10.z.string(),
  score: import_zod10.z.string(),
  /** Added in v1.2.0; older items get "" */
  location: import_zod10.z.string().default(""),
  date: import_zod10.z.string(),
  summary: import_zod10.z.string(),
  url: urlSchema
});
var defaultEducation = {
  ...defaultItem,
  id: "",
  institution: "",
  studyType: "",
  area: "",
  score: "",
  location: "",
  date: "",
  summary: "",
  url: defaultUrl
};

// src/schema/sections/experience.ts
var import_zod11 = require("zod");
var experienceSchema = itemSchema.extend({
  company: import_zod11.z.string().min(1),
  position: import_zod11.z.string(),
  location: import_zod11.z.string(),
  date: import_zod11.z.string(),
  summary: import_zod11.z.string(),
  url: urlSchema
});
var defaultExperience = {
  ...defaultItem,
  company: "",
  position: "",
  location: "",
  date: "",
  summary: "",
  url: defaultUrl
};

// src/schema/sections/interest.ts
var import_zod12 = require("zod");
var interestSchema = itemSchema.extend({
  name: import_zod12.z.string().min(1),
  keywords: import_zod12.z.array(import_zod12.z.string()).default([])
});
var defaultInterest = {
  ...defaultItem,
  name: "",
  keywords: []
};

// src/schema/sections/language.ts
var import_zod13 = require("zod");
var languageSchema = itemSchema.extend({
  name: import_zod13.z.string().min(1),
  description: import_zod13.z.string(),
  level: import_zod13.z.number().min(0).max(5).default(1)
});
var defaultLanguage = {
  ...defaultItem,
  name: "",
  description: "",
  level: 1
};

// src/schema/sections/profile.ts
var import_zod14 = require("zod");
var profileSchema = itemSchema.extend({
  network: import_zod14.z.string().min(1),
  username: import_zod14.z.string().min(1),
  icon: import_zod14.z.string().describe(
    'Slug for the icon from https://simpleicons.org. For example, "github", "linkedin", etc.'
  ),
  url: urlSchema
});
var defaultProfile = {
  ...defaultItem,
  network: "",
  username: "",
  icon: "",
  url: defaultUrl
};

// src/schema/sections/project.ts
var import_zod15 = require("zod");
var projectSchema = itemSchema.extend({
  name: import_zod15.z.string().min(1),
  description: import_zod15.z.string(),
  date: import_zod15.z.string(),
  summary: import_zod15.z.string(),
  keywords: import_zod15.z.array(import_zod15.z.string()).default([]),
  url: urlSchema
});
var defaultProject = {
  ...defaultItem,
  name: "",
  description: "",
  date: "",
  summary: "",
  keywords: [],
  url: defaultUrl
};

// src/schema/sections/publication.ts
var import_zod16 = require("zod");
var publicationSchema = itemSchema.extend({
  name: import_zod16.z.string().min(1),
  publisher: import_zod16.z.string(),
  date: import_zod16.z.string(),
  summary: import_zod16.z.string(),
  url: urlSchema
});
var defaultPublication = {
  ...defaultItem,
  name: "",
  publisher: "",
  date: "",
  summary: "",
  url: defaultUrl
};

// src/schema/sections/reference.ts
var import_zod17 = require("zod");
var referenceSchema = itemSchema.extend({
  name: import_zod17.z.string().min(1),
  description: import_zod17.z.string(),
  summary: import_zod17.z.string(),
  url: urlSchema
});
var defaultReference = {
  ...defaultItem,
  name: "",
  description: "",
  summary: "",
  url: defaultUrl
};

// src/schema/sections/skill.ts
var import_zod18 = require("zod");
var skillSchema = itemSchema.extend({
  name: import_zod18.z.string(),
  description: import_zod18.z.string(),
  level: import_zod18.z.number().min(0).max(5).default(1),
  keywords: import_zod18.z.array(import_zod18.z.string()).default([])
});
var defaultSkill = {
  ...defaultItem,
  name: "",
  description: "",
  level: 1,
  keywords: []
};

// src/schema/sections/volunteer.ts
var import_zod19 = require("zod");
var volunteerSchema = itemSchema.extend({
  organization: import_zod19.z.string().min(1),
  position: import_zod19.z.string(),
  location: import_zod19.z.string(),
  date: import_zod19.z.string(),
  summary: import_zod19.z.string(),
  url: urlSchema
});
var defaultVolunteer = {
  ...defaultItem,
  organization: "",
  position: "",
  location: "",
  date: "",
  summary: "",
  url: defaultUrl
};

// src/schema/sections/index.ts
var sectionSchema = import_zod20.z.object({
  name: import_zod20.z.string(),
  columns: import_zod20.z.number().min(0).max(5).default(1),
  separateLinks: import_zod20.z.boolean().default(true),
  visible: import_zod20.z.boolean().default(true),
  layoutSystem: import_zod20.z.enum(["grid", "flex"]).default("grid"),
  layoutSetting: import_zod20.z.object({
    visibleType: import_zod20.z.enum(["default", "list"]).default("default")
  }).default({ visibleType: "default" })
});
var customSchema = sectionSchema.extend({
  id: idSchema,
  items: import_zod20.z.array(customSectionSchema)
});
var sectionsSchema = import_zod20.z.object({
  summary: sectionSchema.extend({
    id: import_zod20.z.literal("summary"),
    content: import_zod20.z.string().default("")
  }),
  awards: sectionSchema.extend({
    id: import_zod20.z.literal("awards"),
    items: import_zod20.z.array(awardSchema)
  }),
  certifications: sectionSchema.extend({
    id: import_zod20.z.literal("certifications"),
    items: import_zod20.z.array(certificationSchema)
  }),
  education: sectionSchema.extend({
    id: import_zod20.z.literal("education"),
    items: import_zod20.z.array(educationSchema)
  }),
  experience: sectionSchema.extend({
    id: import_zod20.z.literal("experience"),
    items: import_zod20.z.array(experienceSchema)
  }),
  volunteer: sectionSchema.extend({
    id: import_zod20.z.literal("volunteer"),
    items: import_zod20.z.array(volunteerSchema)
  }),
  interests: sectionSchema.extend({
    id: import_zod20.z.literal("interests"),
    items: import_zod20.z.array(interestSchema)
  }),
  languages: sectionSchema.extend({
    id: import_zod20.z.literal("languages"),
    columns: import_zod20.z.number().min(1).max(5).default(2),
    items: import_zod20.z.array(languageSchema)
  }),
  profiles: sectionSchema.extend({
    id: import_zod20.z.literal("profiles"),
    items: import_zod20.z.array(profileSchema)
  }),
  projects: sectionSchema.extend({
    id: import_zod20.z.literal("projects"),
    items: import_zod20.z.array(projectSchema)
  }),
  publications: sectionSchema.extend({
    id: import_zod20.z.literal("publications"),
    items: import_zod20.z.array(publicationSchema)
  }),
  references: sectionSchema.extend({
    id: import_zod20.z.literal("references"),
    items: import_zod20.z.array(referenceSchema)
  }),
  skills: sectionSchema.extend({
    id: import_zod20.z.literal("skills"),
    items: import_zod20.z.array(skillSchema)
  }),
  custom: import_zod20.z.record(import_zod20.z.string(), customSchema).default({})
});
var defaultSection = {
  name: "",
  columns: 1,
  separateLinks: true,
  visible: true,
  layoutSystem: "grid",
  layoutSetting: {
    visibleType: "default"
  }
};
var defaultSections = {
  summary: { ...defaultSection, id: "summary", name: "Summary", content: "" },
  awards: { ...defaultSection, id: "awards", name: "Awards", items: [] },
  certifications: { ...defaultSection, id: "certifications", name: "Certifications", items: [] },
  education: { ...defaultSection, id: "education", name: "Education", items: [] },
  experience: { ...defaultSection, id: "experience", name: "Experience", items: [] },
  volunteer: { ...defaultSection, id: "volunteer", name: "Volunteering", items: [] },
  interests: { ...defaultSection, id: "interests", name: "Interests", items: [] },
  languages: { ...defaultSection, columns: 2, id: "languages", name: "Languages", items: [] },
  profiles: { ...defaultSection, id: "profiles", name: "Profiles", items: [] },
  projects: { ...defaultSection, id: "projects", name: "Projects", items: [] },
  publications: { ...defaultSection, id: "publications", name: "Publications", items: [] },
  references: { ...defaultSection, id: "references", name: "References", items: [] },
  skills: { ...defaultSection, id: "skills", name: "Skills", items: [] },
  custom: {}
};

// src/schema/sample.ts
var sampleResume = {
  basics: {
    name: "John Doe",
    headline: "Creative and Innovative Web Developer",
    email: "john.doe@gmail.com",
    phone: "(555) 123-4567",
    location: "Pleasantville, CA 94588",
    url: {
      label: "",
      href: "https://johndoe.me/"
    },
    customFields: [],
    picture: {
      url: "https://i.imgur.com/HgwyOuJ.jpg",
      size: 120,
      aspectRatio: 1,
      borderRadius: 0,
      effects: {
        hidden: false,
        border: false,
        grayscale: false
      }
    }
  },
  sections: {
    summary: {
      name: "Summary",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "summary",
      layoutSystem: "grid",
      layoutSetting: { visibleType: "default" },
      content: "<p>Innovative Web Developer with 5 years of experience in building impactful and user-friendly websites and applications. Specializes in <strong>front-end technologies</strong> and passionate about modern web standards and cutting-edge development techniques. Proven track record of leading successful projects from concept to deployment.</p>"
    },
    awards: {
      name: "Awards",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "awards",
      layoutSystem: "grid",
      layoutSetting: { visibleType: "default" },
      items: []
    },
    certifications: {
      name: "Certifications",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "certifications",
      layoutSystem: "grid",
      layoutSetting: { visibleType: "default" },
      items: [
        {
          id: "spdhh9rrqi1gvj0yqnbqunlo",
          visible: true,
          name: "Full-Stack Web Development",
          issuer: "CodeAcademy",
          date: "2020",
          summary: "",
          url: {
            label: "",
            href: ""
          }
        },
        {
          id: "n838rddyqv47zexn6cxauwqp",
          visible: true,
          name: "AWS Certified Developer",
          issuer: "Amazon Web Services",
          date: "2019",
          summary: "",
          url: {
            label: "",
            href: ""
          }
        }
      ]
    },
    education: {
      name: "Education",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "education",
      layoutSystem: "grid",
      layoutSetting: { visibleType: "default" },
      items: [
        {
          id: "yo3p200zo45c6cdqc6a2vtt3",
          visible: true,
          institution: "University of California",
          studyType: "Bachelor's in Computer Science",
          area: "Berkeley, CA",
          score: "",
          location: "",
          date: "August 2012 to May 2016",
          summary: "",
          url: {
            label: "",
            href: ""
          }
        }
      ]
    },
    experience: {
      name: "Experience",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "experience",
      layoutSystem: "grid",
      layoutSetting: { visibleType: "default" },
      items: [
        {
          id: "lhw25d7gf32wgdfpsktf6e0x",
          visible: true,
          company: "Creative Solutions Inc.",
          position: "Senior Web Developer",
          location: "San Francisco, CA",
          date: "January 2019 to Present",
          summary: "<ul><li><p>Spearheaded the redesign of the main product website, resulting in a 40% increase in user engagement.</p></li><li><p>Developed and implemented a new responsive framework, improving cross-device compatibility.</p></li><li><p>Mentored a team of four junior developers, fostering a culture of technical excellence.</p></li></ul>",
          url: {
            label: "",
            href: "https://creativesolutions.inc/"
          }
        },
        {
          id: "r6543lil53ntrxmvel53gbtm",
          visible: true,
          company: "TechAdvancers",
          position: "Web Developer",
          location: "San Jose, CA",
          date: "June 2016 to December 2018",
          summary: "<ul><li><p>Collaborated in a team of 10 to develop high-quality web applications using React.js and Node.js.</p></li><li><p>Managed the integration of third-party services such as Stripe for payments and Twilio for SMS services.</p></li><li><p>Optimized application performance, achieving a 30% reduction in load times.</p></li></ul>",
          url: {
            label: "",
            href: "https://techadvancers.com/"
          }
        }
      ]
    },
    volunteer: {
      name: "Volunteering",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "volunteer",
      layoutSystem: "grid",
      layoutSetting: { visibleType: "default" },
      items: []
    },
    interests: {
      name: "Interests",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "interests",
      layoutSystem: "grid",
      layoutSetting: { visibleType: "default" },
      items: []
    },
    languages: {
      name: "Languages",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "languages",
      layoutSystem: "grid",
      layoutSetting: { visibleType: "default" },
      items: []
    },
    profiles: {
      name: "Profiles",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "profiles",
      layoutSystem: "grid",
      layoutSetting: { visibleType: "default" },
      items: [
        {
          id: "cnbk5f0aeqvhx69ebk7hktwd",
          visible: true,
          network: "LinkedIn",
          username: "johndoe",
          icon: "linkedin",
          url: {
            label: "",
            href: "https://linkedin.com/in/johndoe"
          }
        },
        {
          id: "ukl0uecvzkgm27mlye0wazlb",
          visible: true,
          network: "GitHub",
          username: "johndoe",
          icon: "github",
          url: {
            label: "",
            href: "https://github.com/johndoe"
          }
        }
      ]
    },
    projects: {
      name: "Projects",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "projects",
      layoutSystem: "grid",
      layoutSetting: { visibleType: "default" },
      items: [
        {
          id: "yw843emozcth8s1ubi1ubvlf",
          visible: true,
          name: "E-Commerce Platform",
          description: "Project Lead",
          date: "",
          summary: "<p>Led the development of a full-stack e-commerce platform, improving sales conversion by 25%.</p>",
          keywords: [],
          url: {
            label: "",
            href: ""
          }
        },
        {
          id: "ncxgdjjky54gh59iz2t1xi1v",
          visible: true,
          name: "Interactive Dashboard",
          description: "Frontend Developer",
          date: "",
          summary: "<p>Created an interactive analytics dashboard for a SaaS application, enhancing data visualization for clients.</p>",
          keywords: [],
          url: {
            label: "",
            href: ""
          }
        }
      ]
    },
    publications: {
      name: "Publications",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "publications",
      layoutSystem: "grid",
      layoutSetting: { visibleType: "default" },
      items: []
    },
    references: {
      name: "References",
      columns: 1,
      separateLinks: true,
      visible: false,
      id: "references",
      layoutSystem: "grid",
      layoutSetting: { visibleType: "default" },
      items: [
        {
          id: "f2sv5z0cce6ztjl87yuk8fak",
          visible: true,
          name: "Available upon request",
          description: "",
          summary: "",
          url: {
            label: "",
            href: ""
          }
        }
      ]
    },
    skills: {
      name: "Skills",
      columns: 1,
      separateLinks: true,
      visible: true,
      id: "skills",
      layoutSystem: "grid",
      layoutSetting: { visibleType: "default" },
      items: [
        {
          id: "hn0keriukh6c0ojktl9gsgjm",
          visible: true,
          name: "Web Technologies",
          description: "Advanced",
          level: 0,
          keywords: ["HTML5", "JavaScript", "PHP", "Python"]
        },
        {
          id: "r8c3y47vykausqrgmzwg5pur",
          visible: true,
          name: "Web Frameworks",
          description: "Intermediate",
          level: 0,
          keywords: ["React.js", "Angular", "Vue.js", "Laravel", "Django"]
        },
        {
          id: "b5l75aseexqv17quvqgh73fe",
          visible: true,
          name: "Tools",
          description: "Intermediate",
          level: 0,
          keywords: ["Webpack", "Git", "Jenkins", "Docker", "JIRA"]
        }
      ]
    },
    custom: {}
  },
  // Defaults + overrides, so new metadata fields never need listing here
  metadata: metadataSchema.parse({
    template: "onyx",
    layout: [
      [
        ["profiles", "summary", "experience", "education", "projects", "volunteer", "references"],
        ["skills", "languages", "interests", "certifications", "awards"]
      ]
    ],
    css: { value: "", visible: false },
    page: { options: { pageNumbers: false } },
    theme: { primary: "#000000" },
    typography: { font: { family: "Inter", variants: ["regular", "italic", "600", "700"] } }
  })
};

// src/schema/index.ts
var resumeDataSchema = import_zod21.z.object({
  basics: basicsSchema,
  sections: sectionsSchema,
  metadata: metadataSchema
  // ✅ Include metadata in data
});
var defaultResumeData = {
  basics: defaultBasics,
  sections: defaultSections,
  metadata: defaultMetadata
  // ✅ Include metadata
};
var minimalResumeData = {
  basics: {
    name: "John Doe",
    headline: "Senior Software Engineer | Full-Stack Developer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    url: { label: "", href: "https://johndoe.dev" },
    customFields: [],
    picture: {
      url: "",
      size: 64,
      aspectRatio: 1,
      borderRadius: 8,
      effects: { hidden: false, border: false, grayscale: false }
    }
  },
  sections: {
    summary: {
      ...defaultSections.summary,
      content: "<p>Dynamic professional with [X] years of experience in [Your Industry]. Skilled in [Key Skill 1], [Key Skill 2], and [Key Skill 3]. Proven track record of delivering impactful results and driving organizational success.</p>"
    },
    experience: {
      ...defaultSections.experience,
      items: [
        {
          id: "work_1764208459_4504",
          visible: true,
          company: "Company Name",
          position: "Your Job Title",
          location: "City, State",
          date: "Jan 2020 - Present",
          summary: "<p>Brief description of your role and key responsibilities.</p><ul><li>Achievement or responsibility #1 with measurable impact</li><li>Achievement or responsibility #2 with measurable impact</li><li>Achievement or responsibility #3 with measurable impact</li></ul>",
          url: { label: "", href: "" }
        }
      ]
    },
    education: {
      ...defaultSections.education,
      items: [
        {
          id: "edu_1764208459_2626",
          visible: true,
          institution: "University Name",
          studyType: "Bachelor",
          area: "Computer Science",
          score: "",
          location: "",
          date: "Nov 2025 - Present",
          summary: "Relevant coursework, honors, or achievements.",
          url: { label: "", href: "" }
        }
      ]
    },
    skills: {
      ...defaultSections.skills,
      items: [
        {
          id: "skill_1764208473056_8934",
          visible: true,
          name: "Soft Skills",
          description: "Advanced",
          level: 4,
          keywords: ["Leadership", "Communication", "Problem Solving"]
        }
      ]
    },
    languages: {
      ...defaultSections.languages,
      items: [
        {
          id: "lang_1",
          visible: true,
          name: "English",
          description: "Native",
          level: 5
        }
      ]
    },
    awards: {
      ...defaultSections.awards,
      items: [
        {
          id: "award_1764208459_2940",
          visible: true,
          title: "Award 1",
          awarder: "myself",
          date: "2025-11-20",
          summary: "asdasdas sasa dsadsadssa as ads",
          url: { label: "", href: "https://award.com" }
        }
      ]
    },
    certifications: {
      ...defaultSections.certifications,
      items: [
        {
          id: "cert_1764208459_2766",
          visible: true,
          name: "certificate",
          issuer: "myself",
          date: "2025-11-26",
          summary: "sasad sdasad sdasa sda sadsd as adsdadasdsas as as das sad",
          url: { label: "", href: "" }
        }
      ]
    },
    profiles: {
      ...defaultSections.profiles,
      items: [
        {
          id: "profile_1764209013188_5118",
          visible: true,
          network: "Tweet",
          username: "asdasdd",
          icon: "x/fff",
          url: { label: "", href: "https://x.com" }
        }
      ]
    },
    projects: {
      ...defaultSections.projects,
      items: [
        {
          id: "proj_1764212248831_3275",
          visible: true,
          name: "Project 1",
          description: "Some project it is",
          summary: "This is a project about the project 1, Worth mentioning the project 1 is a project about the project 1",
          date: "Nov 2025 - Nov 2025",
          keywords: ["React JS", "Node.js", "MongoDB", "Tailwind CSS"],
          url: { label: "", href: "https://example.dev" }
        }
      ]
    },
    publications: {
      ...defaultSections.publications,
      items: [
        {
          id: "pub_1764208459_6076",
          visible: true,
          name: "Publication 1",
          publisher: "asd",
          date: "2025-11-20",
          summary: "This is a publication about the project 1",
          url: { label: "", href: "" }
        }
      ]
    },
    volunteer: {
      ...defaultSections.volunteer,
      items: [
        {
          id: "vol_1764208459_4149",
          visible: true,
          organization: "Volunteering",
          position: "Cat show volunteer",
          location: "Dhaka",
          date: "2025-11-20 - 2025-11-20",
          summary: "This is a volunteer about the cat show",
          url: { label: "", href: "" }
        }
      ]
    },
    interests: {
      ...defaultSections.interests,
      layoutSetting: {
        visibleType: "list"
      },
      items: [
        {
          id: "interest_1764212532064_0.7978620154878027",
          name: "Hiking",
          keywords: ["Hiking", "Nature", "Adventure"],
          visible: true
        },
        {
          id: "interest_1764212532064_0.033283923354965106",
          name: "Coding",
          keywords: ["Programming", "Software Development", "Web Development"],
          visible: true
        }
      ]
    },
    references: {
      ...defaultSections.references,
      items: []
    },
    custom: {}
  },
  metadata: defaultMetadata
};
var emptyResumeData = {
  basics: {
    ...defaultBasics,
    name: "",
    headline: "",
    email: "",
    phone: "",
    location: "",
    url: { label: "", href: "" },
    customFields: [],
    picture: {
      url: "",
      size: 64,
      aspectRatio: 1,
      borderRadius: 8,
      effects: {
        hidden: false,
        border: false,
        grayscale: false
      }
    }
  },
  sections: {
    summary: {
      ...defaultSections.summary,
      content: ""
    },
    experience: {
      ...defaultSections.experience,
      items: []
    },
    education: {
      ...defaultSections.education,
      items: []
    },
    skills: {
      ...defaultSections.skills,
      items: []
    },
    languages: {
      ...defaultSections.languages,
      items: []
    },
    awards: {
      ...defaultSections.awards,
      items: []
    },
    certifications: {
      ...defaultSections.certifications,
      items: []
    },
    profiles: {
      ...defaultSections.profiles,
      items: []
    },
    projects: {
      ...defaultSections.projects,
      items: []
    },
    publications: {
      ...defaultSections.publications,
      items: []
    },
    volunteer: {
      ...defaultSections.volunteer,
      items: []
    },
    interests: {
      ...defaultSections.interests,
      items: []
    },
    references: {
      ...defaultSections.references,
      items: []
    },
    custom: {}
  },
  metadata: defaultMetadata
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  awardSchema,
  basicsSchema,
  certificationSchema,
  customFieldSchema,
  customSchema,
  customSectionSchema,
  defaultAward,
  defaultBasics,
  defaultCertification,
  defaultCustomSection,
  defaultEducation,
  defaultExperience,
  defaultInterest,
  defaultItem,
  defaultLanguage,
  defaultLayout,
  defaultMetadata,
  defaultProfile,
  defaultProject,
  defaultPublication,
  defaultReference,
  defaultResumeData,
  defaultSection,
  defaultSections,
  defaultSkill,
  defaultUrl,
  defaultVolunteer,
  educationSchema,
  emptyResumeData,
  experienceSchema,
  idSchema,
  interestSchema,
  itemSchema,
  languageSchema,
  metadataSchema,
  minimalResumeData,
  profileSchema,
  projectSchema,
  publicationSchema,
  referenceSchema,
  resumeDataSchema,
  sampleResume,
  sectionSchema,
  sectionsSchema,
  skillSchema,
  urlSchema,
  volunteerSchema
});
//# sourceMappingURL=index.js.map