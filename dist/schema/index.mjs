// src/schema/index.ts
import { z as z21 } from "zod";

// src/schema/basics/index.ts
import { z as z5 } from "zod";

// src/schema/shared/id.ts
import { createId } from "@paralleldrive/cuid2";
import { z } from "zod";
var idSchema = z.string().min(1).default(createId()).describe("Unique identifier for the item");

// src/schema/shared/item.ts
import { z as z2 } from "zod";
var itemSchema = z2.object({
  id: idSchema,
  visible: z2.boolean()
});
var defaultItem = {
  id: "",
  visible: true
};

// src/schema/shared/url.ts
import { z as z3 } from "zod";
var urlSchema = z3.object({
  label: z3.string(),
  href: z3.literal("").or(z3.string().url())
});
var defaultUrl = {
  label: "",
  href: ""
};

// src/schema/basics/custom.ts
import { z as z4 } from "zod";
var customFieldSchema = z4.object({
  id: z4.string().min(1),
  icon: z4.string(),
  name: z4.string(),
  value: z4.string()
});

// src/schema/basics/index.ts
var basicsSchema = z5.object({
  name: z5.string(),
  headline: z5.string(),
  email: z5.literal("").or(z5.string().email()),
  phone: z5.string(),
  location: z5.string(),
  url: urlSchema,
  customFields: z5.array(customFieldSchema),
  picture: z5.object({
    url: z5.string(),
    size: z5.number().default(64),
    aspectRatio: z5.number().default(1),
    borderRadius: z5.number().default(0),
    effects: z5.object({
      hidden: z5.boolean().default(false),
      border: z5.boolean().default(false),
      grayscale: z5.boolean().default(false)
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
import { z as z6 } from "zod";
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
var weight = () => z6.number().int().min(300).max(800).default(400);
var scale = () => z6.number().min(0.75).max(2).default(1);
var transform = () => z6.enum(["none", "uppercase", "capitalize"]).default("none");
var metadataSchema = z6.object({
  template: z6.string().default("onyx"),
  layout: z6.array(z6.array(z6.array(z6.string()))).default(defaultLayout),
  // pages -> columns -> sections
  css: z6.object({
    value: z6.string().default(".section {\n	outline: 1px solid #000;\n	outline-offset: 4px;\n}"),
    visible: z6.boolean().default(false)
  }).default({}),
  page: z6.object({
    /** Top/bottom margin in mm (also the side margins unless marginLeft/Right are set). */
    margin: z6.number().default(18),
    /** Side margins in mm. */
    marginLeft: z6.number().min(0).max(50).default(18),
    marginRight: z6.number().min(0).max(50).default(18),
    format: z6.enum(["a4", "letter", "legal"]).default("a4"),
    options: z6.object({
      breakLine: z6.boolean().default(true),
      pageNumbers: z6.boolean().default(true)
    }).default({})
  }).default({}),
  theme: z6.object({
    background: z6.string().default("#ffffff"),
    text: z6.string().default("#000000"),
    /** Accent colour (Design → Presentation). */
    primary: z6.string().default("#dc2626")
  }).default({}),
  typography: z6.object({
    font: z6.object({
      /** CSS font-family name the artboard can load (Google Fonts or bundled). */
      family: z6.string().default("IBM Plex Serif"),
      subset: z6.string().default("latin"),
      variants: z6.array(z6.string()).default(["regular"]),
      /** Base size in px. */
      size: z6.number().default(14)
    }).default({}),
    /** Line-height multiplier for paragraphs. */
    lineHeight: z6.number().min(1).max(2.5).default(1.5),
    /** Line-height multiplier for list items. */
    listLineHeight: z6.number().min(1).max(2.5).default(1.4),
    hideIcons: z6.boolean().default(false),
    underlineLinks: z6.boolean().default(true)
  }).default({}),
  /** Design → Presentation */
  presentation: z6.object({
    dateFormat: z6.enum(["mm/yyyy", "mmm yyyy", "month yyyy", "yyyy"]).default("mmm yyyy"),
    headerAlignment: z6.enum(["left", "center", "right"]).default("left"),
    dateAlignment: z6.enum(["left", "right"]).default("right"),
    locationAlignment: z6.enum(["left", "right"]).default("right"),
    skillsLayout: z6.enum(["comma-separated", "comma-separated-list", "columns"]).default("comma-separated"),
    skillsColumns: z6.number().int().min(1).max(5).default(3)
  }).default({}),
  /** Design → Settings: what each entry leads with */
  display: z6.object({
    experience: z6.object({
      primary: z6.enum(["company", "position"]).default("company"),
      location: z6.enum(["company", "position", "none"]).default("company"),
      dates: z6.enum(["company", "position", "both"]).default("company")
    }).default({}),
    education: z6.object({
      primary: z6.enum(["institution", "degree"]).default("institution")
    }).default({})
  }).default({}),
  /** Design → Advanced */
  advanced: z6.object({
    bullets: z6.enum(["circle", "dash", "chevron", "arrow", "comma", "line"]).default("circle"),
    /** CSS font-weight per role. */
    fontWeight: z6.object(roles(weight)).default({}),
    /** Font-size multiplier per role, relative to typography.font.size. */
    fontScale: z6.object(roles(scale)).default({}),
    textTransform: z6.object(roles(transform)).default({}),
    /** Spacing in px. */
    spacing: z6.object({
      betweenSections: z6.number().min(0).max(48).default(16),
      titleToContent: z6.number().min(0).max(48).default(8),
      headingToSubheading: z6.number().min(0).max(48).default(2),
      betweenBlocks: z6.number().min(0).max(48).default(12),
      betweenListItems: z6.number().min(0).max(48).default(4)
    }).default({}),
    /** Border widths in px (0 = none). */
    borders: z6.object({
      aboveHeader: z6.number().min(0).max(4).default(0),
      belowHeader: z6.number().min(0).max(4).default(0),
      sectionTitles: z6.number().min(0).max(4).default(0)
    }).default({})
  }).default({}),
  notes: z6.string().default("")
});
var defaultMetadata = metadataSchema.parse({
  typography: { font: { variants: ["regular", "italic", "600"] } }
});

// src/schema/sections/index.ts
import { z as z20 } from "zod";

// src/schema/sections/award.ts
import { z as z7 } from "zod";
var awardSchema = itemSchema.extend({
  title: z7.string().min(1),
  awarder: z7.string(),
  date: z7.string(),
  summary: z7.string(),
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
import { z as z8 } from "zod";
var certificationSchema = itemSchema.extend({
  name: z8.string().min(1),
  issuer: z8.string(),
  date: z8.string(),
  summary: z8.string(),
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
import { z as z9 } from "zod";
var customSectionSchema = itemSchema.extend({
  name: z9.string(),
  description: z9.string(),
  date: z9.string(),
  location: z9.string(),
  summary: z9.string(),
  keywords: z9.array(z9.string()).default([]),
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
import { z as z10 } from "zod";
var educationSchema = itemSchema.extend({
  institution: z10.string().min(1),
  studyType: z10.string(),
  area: z10.string(),
  score: z10.string(),
  /** Added in v1.2.0; older items get "" */
  location: z10.string().default(""),
  date: z10.string(),
  summary: z10.string(),
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
import { z as z11 } from "zod";
var experienceSchema = itemSchema.extend({
  company: z11.string().min(1),
  position: z11.string(),
  location: z11.string(),
  date: z11.string(),
  summary: z11.string(),
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
import { z as z12 } from "zod";
var interestSchema = itemSchema.extend({
  name: z12.string().min(1),
  keywords: z12.array(z12.string()).default([])
});
var defaultInterest = {
  ...defaultItem,
  name: "",
  keywords: []
};

// src/schema/sections/language.ts
import { z as z13 } from "zod";
var languageSchema = itemSchema.extend({
  name: z13.string().min(1),
  description: z13.string(),
  level: z13.number().min(0).max(5).default(1)
});
var defaultLanguage = {
  ...defaultItem,
  name: "",
  description: "",
  level: 1
};

// src/schema/sections/profile.ts
import { z as z14 } from "zod";
var profileSchema = itemSchema.extend({
  network: z14.string().min(1),
  username: z14.string().min(1),
  icon: z14.string().describe(
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
import { z as z15 } from "zod";
var projectSchema = itemSchema.extend({
  name: z15.string().min(1),
  description: z15.string(),
  date: z15.string(),
  summary: z15.string(),
  keywords: z15.array(z15.string()).default([]),
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
import { z as z16 } from "zod";
var publicationSchema = itemSchema.extend({
  name: z16.string().min(1),
  publisher: z16.string(),
  date: z16.string(),
  summary: z16.string(),
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
import { z as z17 } from "zod";
var referenceSchema = itemSchema.extend({
  name: z17.string().min(1),
  description: z17.string(),
  summary: z17.string(),
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
import { z as z18 } from "zod";
var skillSchema = itemSchema.extend({
  name: z18.string(),
  description: z18.string(),
  level: z18.number().min(0).max(5).default(1),
  keywords: z18.array(z18.string()).default([])
});
var defaultSkill = {
  ...defaultItem,
  name: "",
  description: "",
  level: 1,
  keywords: []
};

// src/schema/sections/volunteer.ts
import { z as z19 } from "zod";
var volunteerSchema = itemSchema.extend({
  organization: z19.string().min(1),
  position: z19.string(),
  location: z19.string(),
  date: z19.string(),
  summary: z19.string(),
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
var sectionSchema = z20.object({
  name: z20.string(),
  columns: z20.number().min(0).max(5).default(1),
  separateLinks: z20.boolean().default(true),
  visible: z20.boolean().default(true),
  layoutSystem: z20.enum(["grid", "flex"]).default("grid"),
  layoutSetting: z20.object({
    visibleType: z20.enum(["default", "list"]).default("default")
  }).default({ visibleType: "default" })
});
var customSchema = sectionSchema.extend({
  id: idSchema,
  items: z20.array(customSectionSchema)
});
var sectionsSchema = z20.object({
  summary: sectionSchema.extend({
    id: z20.literal("summary"),
    content: z20.string().default("")
  }),
  awards: sectionSchema.extend({
    id: z20.literal("awards"),
    items: z20.array(awardSchema)
  }),
  certifications: sectionSchema.extend({
    id: z20.literal("certifications"),
    items: z20.array(certificationSchema)
  }),
  education: sectionSchema.extend({
    id: z20.literal("education"),
    items: z20.array(educationSchema)
  }),
  experience: sectionSchema.extend({
    id: z20.literal("experience"),
    items: z20.array(experienceSchema)
  }),
  volunteer: sectionSchema.extend({
    id: z20.literal("volunteer"),
    items: z20.array(volunteerSchema)
  }),
  interests: sectionSchema.extend({
    id: z20.literal("interests"),
    items: z20.array(interestSchema)
  }),
  languages: sectionSchema.extend({
    id: z20.literal("languages"),
    columns: z20.number().min(1).max(5).default(2),
    items: z20.array(languageSchema)
  }),
  profiles: sectionSchema.extend({
    id: z20.literal("profiles"),
    items: z20.array(profileSchema)
  }),
  projects: sectionSchema.extend({
    id: z20.literal("projects"),
    items: z20.array(projectSchema)
  }),
  publications: sectionSchema.extend({
    id: z20.literal("publications"),
    items: z20.array(publicationSchema)
  }),
  references: sectionSchema.extend({
    id: z20.literal("references"),
    items: z20.array(referenceSchema)
  }),
  skills: sectionSchema.extend({
    id: z20.literal("skills"),
    items: z20.array(skillSchema)
  }),
  custom: z20.record(z20.string(), customSchema).default({})
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
var resumeDataSchema = z21.object({
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
export {
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
};
//# sourceMappingURL=index.mjs.map