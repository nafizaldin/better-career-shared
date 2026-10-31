// src/dto/auth/forgot-password.ts
import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";
var forgotPasswordSchema = z.object({ email: z.string().email() });
var ForgotPasswordDto = class extends createZodDto(forgotPasswordSchema) {
};

// src/dto/auth/login.ts
import { createZodDto as createZodDto4 } from "nestjs-zod/dto";
import { z as z25 } from "nestjs-zod/z";

// src/dto/user/update-user.ts
import { createZodDto as createZodDto3 } from "nestjs-zod/dto";

// src/schema/index.ts
import { z as z22 } from "zod";

// src/schema/basics/index.ts
import { z as z6 } from "zod";

// src/schema/shared/id.ts
import { createId } from "@paralleldrive/cuid2";
import { z as z2 } from "zod";
var idSchema = z2.string().min(1).default(createId()).describe("Unique identifier for the item");

// src/schema/shared/item.ts
import { z as z3 } from "zod";
var itemSchema = z3.object({
  id: idSchema,
  visible: z3.boolean()
});
var defaultItem = {
  id: "",
  visible: true
};

// src/schema/shared/url.ts
import { z as z4 } from "zod";
var urlSchema = z4.object({
  label: z4.string(),
  href: z4.literal("").or(z4.string().url())
});
var defaultUrl = {
  label: "",
  href: ""
};

// src/schema/basics/custom.ts
import { z as z5 } from "zod";
var customFieldSchema = z5.object({
  id: z5.string().min(1),
  icon: z5.string(),
  name: z5.string(),
  value: z5.string()
});

// src/schema/basics/index.ts
var basicsSchema = z6.object({
  name: z6.string(),
  headline: z6.string(),
  email: z6.literal("").or(z6.string().email()),
  phone: z6.string(),
  location: z6.string(),
  url: urlSchema,
  customFields: z6.array(customFieldSchema),
  picture: z6.object({
    url: z6.string(),
    size: z6.number().default(64),
    aspectRatio: z6.number().default(1),
    borderRadius: z6.number().default(0),
    effects: z6.object({
      hidden: z6.boolean().default(false),
      border: z6.boolean().default(false),
      grayscale: z6.boolean().default(false)
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
import { z as z7 } from "zod";
var defaultLayout = [
  [
    ["profiles", "summary", "experience", "education", "projects", "volunteer", "references"],
    ["skills", "interests", "certifications", "awards", "publications", "languages"]
  ]
];
var metadataSchema = z7.object({
  template: z7.string().default("onyx"),
  layout: z7.array(z7.array(z7.array(z7.string()))).default(defaultLayout),
  // pages -> columns -> sections
  css: z7.object({
    value: z7.string().default(".section {\n	outline: 1px solid #000;\n	outline-offset: 4px;\n}"),
    visible: z7.boolean().default(false)
  }),
  page: z7.object({
    margin: z7.number().default(18),
    format: z7.enum(["a4", "letter"]).default("a4"),
    options: z7.object({
      breakLine: z7.boolean().default(true),
      pageNumbers: z7.boolean().default(true)
    })
  }),
  theme: z7.object({
    background: z7.string().default("#ffffff"),
    text: z7.string().default("#000000"),
    primary: z7.string().default("#dc2626")
  }),
  typography: z7.object({
    font: z7.object({
      family: z7.string().default("IBM Plex Serif"),
      subset: z7.string().default("latin"),
      variants: z7.array(z7.string()).default(["regular"]),
      size: z7.number().default(14)
    }),
    lineHeight: z7.number().default(1.5),
    hideIcons: z7.boolean().default(false),
    underlineLinks: z7.boolean().default(true)
  }),
  notes: z7.string().default("")
});
var defaultMetadata = {
  template: "onyx",
  layout: defaultLayout,
  css: {
    value: ".section {\n	outline: 1px solid #000;\n	outline-offset: 4px;\n}",
    visible: false
  },
  page: {
    margin: 18,
    format: "a4",
    options: {
      breakLine: true,
      pageNumbers: true
    }
  },
  theme: {
    background: "#ffffff",
    text: "#000000",
    primary: "#dc2626"
  },
  typography: {
    font: {
      family: "IBM Plex Serif",
      subset: "latin",
      variants: ["regular", "italic", "600"],
      size: 14
    },
    lineHeight: 1.5,
    hideIcons: false,
    underlineLinks: true
  },
  notes: ""
};

// src/schema/sections/index.ts
import { z as z21 } from "zod";

// src/schema/sections/award.ts
import { z as z8 } from "zod";
var awardSchema = itemSchema.extend({
  title: z8.string().min(1),
  awarder: z8.string(),
  date: z8.string(),
  summary: z8.string(),
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
import { z as z9 } from "zod";
var certificationSchema = itemSchema.extend({
  name: z9.string().min(1),
  issuer: z9.string(),
  date: z9.string(),
  summary: z9.string(),
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
import { z as z10 } from "zod";
var customSectionSchema = itemSchema.extend({
  name: z10.string(),
  description: z10.string(),
  date: z10.string(),
  location: z10.string(),
  summary: z10.string(),
  keywords: z10.array(z10.string()).default([]),
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
import { z as z11 } from "zod";
var educationSchema = itemSchema.extend({
  institution: z11.string().min(1),
  studyType: z11.string(),
  area: z11.string(),
  score: z11.string(),
  date: z11.string(),
  summary: z11.string(),
  url: urlSchema
});
var defaultEducation = {
  ...defaultItem,
  id: "",
  institution: "",
  studyType: "",
  area: "",
  score: "",
  date: "",
  summary: "",
  url: defaultUrl
};

// src/schema/sections/experience.ts
import { z as z12 } from "zod";
var experienceSchema = itemSchema.extend({
  company: z12.string().min(1),
  position: z12.string(),
  location: z12.string(),
  date: z12.string(),
  summary: z12.string(),
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
import { z as z13 } from "zod";
var interestSchema = itemSchema.extend({
  name: z13.string().min(1),
  keywords: z13.array(z13.string()).default([])
});
var defaultInterest = {
  ...defaultItem,
  name: "",
  keywords: []
};

// src/schema/sections/language.ts
import { z as z14 } from "zod";
var languageSchema = itemSchema.extend({
  name: z14.string().min(1),
  description: z14.string(),
  level: z14.number().min(0).max(5).default(1)
});
var defaultLanguage = {
  ...defaultItem,
  name: "",
  description: "",
  level: 1
};

// src/schema/sections/profile.ts
import { z as z15 } from "zod";
var profileSchema = itemSchema.extend({
  network: z15.string().min(1),
  username: z15.string().min(1),
  icon: z15.string().describe(
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
import { z as z16 } from "zod";
var projectSchema = itemSchema.extend({
  name: z16.string().min(1),
  description: z16.string(),
  date: z16.string(),
  summary: z16.string(),
  keywords: z16.array(z16.string()).default([]),
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
import { z as z17 } from "zod";
var publicationSchema = itemSchema.extend({
  name: z17.string().min(1),
  publisher: z17.string(),
  date: z17.string(),
  summary: z17.string(),
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
import { z as z18 } from "zod";
var referenceSchema = itemSchema.extend({
  name: z18.string().min(1),
  description: z18.string(),
  summary: z18.string(),
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
import { z as z19 } from "zod";
var skillSchema = itemSchema.extend({
  name: z19.string(),
  description: z19.string(),
  level: z19.number().min(0).max(5).default(1),
  keywords: z19.array(z19.string()).default([])
});
var defaultSkill = {
  ...defaultItem,
  name: "",
  description: "",
  level: 1,
  keywords: []
};

// src/schema/sections/volunteer.ts
import { z as z20 } from "zod";
var volunteerSchema = itemSchema.extend({
  organization: z20.string().min(1),
  position: z20.string(),
  location: z20.string(),
  date: z20.string(),
  summary: z20.string(),
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
var sectionSchema = z21.object({
  name: z21.string(),
  columns: z21.number().min(0).max(5).default(1),
  separateLinks: z21.boolean().default(true),
  visible: z21.boolean().default(true),
  layoutSystem: z21.enum(["grid", "flex"]).default("grid"),
  layoutSetting: z21.object({
    visibleType: z21.enum(["default", "list"]).default("default")
  }).default({ visibleType: "default" })
});
var customSchema = sectionSchema.extend({
  id: idSchema,
  items: z21.array(customSectionSchema)
});
var sectionsSchema = z21.object({
  summary: sectionSchema.extend({
    id: z21.literal("summary"),
    content: z21.string().default("")
  }),
  awards: sectionSchema.extend({
    id: z21.literal("awards"),
    items: z21.array(awardSchema)
  }),
  certifications: sectionSchema.extend({
    id: z21.literal("certifications"),
    items: z21.array(certificationSchema)
  }),
  education: sectionSchema.extend({
    id: z21.literal("education"),
    items: z21.array(educationSchema)
  }),
  experience: sectionSchema.extend({
    id: z21.literal("experience"),
    items: z21.array(experienceSchema)
  }),
  volunteer: sectionSchema.extend({
    id: z21.literal("volunteer"),
    items: z21.array(volunteerSchema)
  }),
  interests: sectionSchema.extend({
    id: z21.literal("interests"),
    items: z21.array(interestSchema)
  }),
  languages: sectionSchema.extend({
    id: z21.literal("languages"),
    columns: z21.number().min(1).max(5).default(2),
    items: z21.array(languageSchema)
  }),
  profiles: sectionSchema.extend({
    id: z21.literal("profiles"),
    items: z21.array(profileSchema)
  }),
  projects: sectionSchema.extend({
    id: z21.literal("projects"),
    items: z21.array(projectSchema)
  }),
  publications: sectionSchema.extend({
    id: z21.literal("publications"),
    items: z21.array(publicationSchema)
  }),
  references: sectionSchema.extend({
    id: z21.literal("references"),
    items: z21.array(referenceSchema)
  }),
  skills: sectionSchema.extend({
    id: z21.literal("skills"),
    items: z21.array(skillSchema)
  }),
  custom: z21.record(z21.string(), customSchema).default({})
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

// src/schema/index.ts
var resumeDataSchema = z22.object({
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

// src/dto/user/user.ts
import { createZodDto as createZodDto2 } from "nestjs-zod/dto";
import { z as z24 } from "nestjs-zod/z";

// src/dto/secrets/secrets.ts
import { z as z23 } from "nestjs-zod/z";
var secretsSchema = z23.object({
  id: idSchema,
  password: z23.string().nullable(),
  lastSignedIn: z23.date().nullable(),
  verificationToken: z23.string().nullable(),
  twoFactorSecret: z23.string().nullable(),
  twoFactorBackupCodes: z23.array(z23.string()).default([]),
  refreshToken: z23.string().nullable(),
  resetToken: z23.string().nullable(),
  userId: idSchema
});

// src/dto/user/user.ts
var usernameSchema = z24.string().min(3).max(255).regex(/^[\d._a-z-]+$/, {
  message: "Usernames can only contain lowercase letters, numbers, periods, hyphens, and underscores."
});
var userSchema = z24.object({
  id: idSchema,
  name: z24.string().min(1).max(255),
  picture: z24.literal("").or(z24.null()).or(z24.string().url()),
  username: usernameSchema,
  email: z24.string().email(),
  locale: z24.string().default("en-US"),
  emailVerified: z24.boolean().default(false),
  twoFactorEnabled: z24.boolean().default(false),
  provider: z24.enum(["email", "github", "google"]).default("email"),
  // New fields
  shortName: z24.string().optional(),
  status: z24.enum(["ACTIVE", "INACTIVE"]).default("INACTIVE"),
  verificationToken: z24.string().optional(),
  verificationExpires: z24.date().or(z24.dateString()).optional(),
  tempData: z24.any().optional(),
  thumb: z24.string().optional(),
  role: z24.enum(["USER", "ADMIN", "ACCOUNT_DEPARTMENT", "PUBLISHER_DEPARTMENT"]).default("USER"),
  number: z24.string().optional(),
  createdAt: z24.date().or(z24.dateString()),
  updatedAt: z24.date().or(z24.dateString())
});
var UserDto = class extends createZodDto2(userSchema) {
};
var userWithSecretsSchema = userSchema.merge(z24.object({ secrets: secretsSchema }));
var UserWithSecrets = class extends createZodDto2(userWithSecretsSchema) {
};

// src/dto/user/update-user.ts
var updateUserSchema = userSchema.partial().pick({
  name: true,
  locale: true,
  username: true,
  email: true,
  picture: true,
  number: true
});
var UpdateUserDto = class extends createZodDto3(updateUserSchema) {
};

// src/dto/auth/login.ts
var loginSchema = z25.object({
  identifier: z25.string(),
  password: z25.password().min(6)
}).refine(
  (value) => {
    return value.identifier.includes("@") ? z25.string().email().parse(value.identifier) : usernameSchema.parse(value.identifier);
  },
  { message: "InvalidCredentials" }
);
var LoginDto = class extends createZodDto4(loginSchema) {
};

// src/dto/auth/message.ts
import { createZodDto as createZodDto5 } from "nestjs-zod/dto";
import { z as z26 } from "nestjs-zod/z";
var messageSchema = z26.object({ message: z26.string() });
var MessageDto = class extends createZodDto5(messageSchema) {
};

// src/dto/auth/providers.ts
import { createZodDto as createZodDto6 } from "nestjs-zod/dto";
import { z as z27 } from "nestjs-zod/z";
var authProvidersSchema = z27.array(z27.enum(["email", "github", "google"]));
var AuthProvidersDto = class extends createZodDto6(authProvidersSchema) {
};

// src/dto/auth/register.ts
import { createZodDto as createZodDto7 } from "nestjs-zod/dto";
import { z as z28 } from "nestjs-zod/z";
var registerSchema = userSchema.pick({ name: true, email: true, username: true, locale: true }).extend({ password: z28.password().min(6) });
var RegisterDto = class extends createZodDto7(registerSchema) {
};

// src/dto/auth/reset-password.ts
import { createZodDto as createZodDto8 } from "nestjs-zod/dto";
import { z as z29 } from "nestjs-zod/z";
var resetPasswordSchema = z29.object({
  token: z29.string(),
  password: z29.password().min(6)
});
var ResetPasswordDto = class extends createZodDto8(resetPasswordSchema) {
};

// src/dto/auth/response.ts
import { createZodDto as createZodDto9 } from "nestjs-zod/dto";
import { z as z30 } from "nestjs-zod/z";
var authResponseSchema = z30.object({
  status: z30.enum(["authenticated", "2fa_required"]),
  user: userSchema
});
var AuthResponseDto = class extends createZodDto9(authResponseSchema) {
};

// src/dto/auth/signup.ts
import { createZodDto as createZodDto10 } from "nestjs-zod/dto";
import { z as z31 } from "nestjs-zod/z";
var signupSchema = z31.object({
  username: z31.string().min(3).max(255),
  email: z31.string().email(),
  password: z31.string().min(6),
  shortName: z31.string().optional(),
  thumb: z31.string().optional(),
  number: z31.string().optional(),
  go_crazy121211: z31.boolean().optional(),
  role: z31.enum(["super-admin", "admin", "user"]).optional().default("user")
});
var SignupDto = class extends createZodDto10(signupSchema) {
};

// src/dto/auth/two-factor.ts
import { createZodDto as createZodDto11 } from "nestjs-zod/dto";
import { z as z32 } from "nestjs-zod/z";
var twoFactorSchema = z32.object({
  code: z32.string().length(6, { message: "Code must be a 6 digit number" }).regex(/^\d+$/, { message: "Code must be a 6 digit number" })
});
var TwoFactorDto = class extends createZodDto11(twoFactorSchema) {
};
var backupCodesSchema = z32.object({
  backupCodes: z32.array(z32.string().length(10))
});
var BackupCodesDto = class extends createZodDto11(backupCodesSchema) {
};
var twoFactorBackupSchema = z32.object({
  code: z32.string().length(10)
});
var TwoFactorBackupDto = class extends createZodDto11(twoFactorBackupSchema) {
};

// src/dto/auth/update-password.ts
import { createZodDto as createZodDto12 } from "nestjs-zod/dto";
import { z as z33 } from "nestjs-zod/z";
var updatePasswordSchema = z33.object({
  password: z33.string().min(6)
});
var UpdatePasswordDto = class extends createZodDto12(updatePasswordSchema) {
};

// src/dto/auth/verify-otp.ts
import { createZodDto as createZodDto13 } from "nestjs-zod/dto";
import { z as z34 } from "nestjs-zod/z";
var verifyOtpSchema = z34.object({
  email: z34.string().email(),
  otp: z34.string().length(4)
});
var VerifyOtpDto = class extends createZodDto13(verifyOtpSchema) {
};

// src/dto/auth/reset-password-new.ts
import { createZodDto as createZodDto14 } from "nestjs-zod/dto";
import { z as z35 } from "nestjs-zod/z";
var resetPasswordSchema2 = z35.object({
  email: z35.string().email(),
  newPassword: z35.string().min(6),
  confirmPassword: z35.string().min(6)
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var ResetPasswordDto2 = class extends createZodDto14(resetPasswordSchema2) {
};

// src/dto/blog/create.ts
import { createZodDto as createZodDto15 } from "nestjs-zod/dto";
import { z as z36 } from "nestjs-zod/z";
var createBlogSchema = z36.object({
  title: z36.string().min(3).max(255),
  content: z36.string().min(10),
  summary: z36.string().min(10).max(500).optional().nullable(),
  featuredImage: z36.string().optional().nullable(),
  // data URL (base64) or URL; max 5MB enforced server-side
  tags: z36.array(z36.string()).optional().default([]),
  categories: z36.array(z36.string()).optional().default([]),
  status: z36.enum(["draft", "published"]).optional().default("draft"),
  publishedAt: z36.coerce.date().optional().nullable(),
  authorName: z36.string().optional().nullable(),
  authorBio: z36.string().optional().nullable(),
  authorImage: z36.string().url().optional().nullable(),
  metaTitle: z36.string().max(60).optional().nullable(),
  metaDescription: z36.string().max(160).optional().nullable()
});
var CreateBlogDto = class extends createZodDto15(createBlogSchema) {
};

// src/dto/blog/update.ts
import { createZodDto as createZodDto16 } from "nestjs-zod/dto";
import { z as z37 } from "nestjs-zod/z";
var updateBlogSchema = z37.object({
  title: z37.string().min(3).max(255).optional(),
  content: z37.string().min(10).optional(),
  summary: z37.string().min(10).max(500).optional().nullable(),
  featuredImage: z37.string().optional().nullable(),
  // data URL (base64) or URL; max 5MB enforced server-side
  tags: z37.array(z37.string()).optional(),
  categories: z37.array(z37.string()).optional(),
  status: z37.enum(["draft", "published"]).optional(),
  publishedAt: z37.coerce.date().optional().nullable(),
  authorName: z37.string().optional().nullable(),
  authorBio: z37.string().optional().nullable(),
  authorImage: z37.string().url().optional().nullable(),
  metaTitle: z37.string().max(60).optional().nullable(),
  metaDescription: z37.string().max(160).optional().nullable()
});
var UpdateBlogDto = class extends createZodDto16(updateBlogSchema) {
};

// src/dto/contributors/index.ts
import { createZodDto as createZodDto17 } from "nestjs-zod/dto";
import { z as z38 } from "nestjs-zod/z";
var contributorSchema = z38.object({
  id: z38.number(),
  name: z38.string(),
  url: z38.string(),
  avatar: z38.string()
});
var ContributorDto = class extends createZodDto17(contributorSchema) {
};

// src/dto/contact/index.ts
import { createZodDto as createZodDto18 } from "nestjs-zod/dto";
import { z as z39 } from "nestjs-zod/z";
var contactFormSchema = z39.object({
  firstName: z39.string().min(1).max(255),
  lastName: z39.string().min(1).max(255),
  phone: z39.string().min(1).max(20),
  email: z39.string().email(),
  message: z39.string().min(1).max(1e3),
  privacyAgreed: z39.boolean().default(false)
});
var ContactFormDto = class extends createZodDto18(contactFormSchema) {
};

// src/dto/cover-letter/create.ts
import { createZodDto as createZodDto19 } from "nestjs-zod/dto";
import { z as z40 } from "nestjs-zod/z";
var createCoverLetterSchema = z40.object({
  jobMatchingId: z40.string().min(1),
  resumeId: z40.string().min(1),
  content: z40.string().min(1),
  tone: z40.string().nullable().optional()
});
var CreateCoverLetterDto = class extends createZodDto19(createCoverLetterSchema) {
};

// src/dto/cover-letter/update.ts
import { createZodDto as createZodDto20 } from "nestjs-zod/dto";
import { z as z41 } from "nestjs-zod/z";
var updateCoverLetterSchema = z41.object({
  content: z41.string().min(1).optional(),
  tone: z41.string().nullable().optional()
});
var UpdateCoverLetterDto = class extends createZodDto20(updateCoverLetterSchema) {
};

// src/dto/cover-letter/generate.ts
import { createZodDto as createZodDto21 } from "nestjs-zod/dto";
import { z as z42 } from "nestjs-zod/z";
var generateCoverLetterSchema = z42.object({
  jobMatchingId: z42.string().min(1),
  resumeId: z42.string().min(1)
});
var GenerateCoverLetterDto = class extends createZodDto21(generateCoverLetterSchema) {
};

// src/dto/feature/index.ts
import { createZodDto as createZodDto22 } from "nestjs-zod/dto";
import { z as z43 } from "nestjs-zod/z";
var featureSchema = z43.object({
  isSignupsDisabled: z43.boolean().default(false),
  isEmailAuthDisabled: z43.boolean().default(false)
});
var FeatureDto = class extends createZodDto22(featureSchema) {
};

// src/dto/job-matching/create.ts
import { createZodDto as createZodDto23 } from "nestjs-zod/dto";
import { z as z44 } from "nestjs-zod/z";
var createJobMatchingSchema = z44.object({
  title: z44.string().min(1),
  company: z44.string().min(1),
  jobDescription: z44.string().min(1),
  resumeId: z44.string().min(1),
  jobType: z44.string().nullable().optional(),
  averageSalary: z44.string().nullable().optional(),
  matchScore: z44.number().min(0).max(100).nullable().optional(),
  keywords: z44.array(z44.string()).optional()
});
var CreateJobMatchingDto = class extends createZodDto23(createJobMatchingSchema) {
};

// src/dto/job-matching/update.ts
import { createZodDto as createZodDto24 } from "nestjs-zod/dto";
import { z as z45 } from "nestjs-zod/z";
var updateJobMatchingSchema = z45.object({
  title: z45.string().min(1).optional(),
  company: z45.string().min(1).optional(),
  jobDescription: z45.string().min(1).optional(),
  jobType: z45.string().nullable().optional(),
  averageSalary: z45.string().nullable().optional(),
  matchScore: z45.number().min(0).max(100).nullable().optional(),
  note: z45.string().nullable().optional(),
  keywords: z45.array(z45.string()).optional()
});
var UpdateJobMatchingDto = class extends createZodDto24(updateJobMatchingSchema) {
};

// src/dto/job-matching/note.ts
import { createZodDto as createZodDto25 } from "nestjs-zod/dto";
import { z as z46 } from "nestjs-zod/z";
var updateNoteSchema = z46.object({
  note: z46.string().optional()
});
var UpdateNoteDto = class extends createZodDto25(updateNoteSchema) {
};

// src/dto/job-matching/job-matching.ts
import { createZodDto as createZodDto26 } from "nestjs-zod/dto";
import { z as z47 } from "nestjs-zod/z";
var jobMatchingSchema = z47.object({
  id: z47.string(),
  title: z47.string(),
  company: z47.string(),
  jobDescription: z47.string(),
  jobType: z47.string().nullable(),
  averageSalary: z47.string().nullable(),
  matchScore: z47.number().nullable(),
  trackerIndex: z47.number(),
  note: z47.string().nullable(),
  active: z47.boolean(),
  createdAt: z47.date(),
  updatedAt: z47.date(),
  resumeId: z47.string(),
  userId: z47.string(),
  keywords: z47.array(z47.string())
});
var JobMatchingDto = class extends createZodDto26(jobMatchingSchema) {
};

// src/dto/newsletter/index.ts
import { createZodDto as createZodDto27 } from "nestjs-zod/dto";
import { z as z48 } from "nestjs-zod/z";
var subscribeNewsletterSchema = z48.object({
  email: z48.string().email()
});
var SubscribeNewsletterDto = class extends createZodDto27(subscribeNewsletterSchema) {
};

// src/utils/namespaces/csv.ts
import Papa from "papaparse";

// src/utils/namespaces/date.ts
import dayjs from "dayjs";

// src/utils/namespaces/string.ts
import { adjectives, animals, uniqueNamesGenerator } from "unique-names-generator";
var kebabCase = (string) => {
  if (!string) return "";
  return string.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/gu)?.join("-").toLowerCase() ?? "";
};

// src/utils/namespaces/style.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// src/dto/resume/create.ts
import { createZodDto as createZodDto28 } from "nestjs-zod/dto";
import { z as z49 } from "nestjs-zod/z";
var createResumeSchema = z49.object({
  title: z49.string().min(1),
  slug: z49.string().min(1).transform(kebabCase).optional(),
  templateId: z49.string().min(1, { message: "templateId is required and must be a non-empty string" }),
  // ✅ NEW: Required template selection
  visibility: z49.enum(["public", "private"]).default("private"),
  organization: z49.string().nullable().optional()
});
var CreateResumeDto = class extends createZodDto28(createResumeSchema) {
};

// src/dto/resume/delete.ts
import { createZodDto as createZodDto29 } from "nestjs-zod/dto";
import { z as z50 } from "nestjs-zod/z";
var deleteResumeSchema = z50.object({
  id: idSchema
});
var DeleteResumeDto = class extends createZodDto29(deleteResumeSchema) {
};

// src/dto/resume/import.ts
import { createZodDto as createZodDto30 } from "nestjs-zod/dto";
import { z as z51 } from "nestjs-zod/z";
var importResumeSchema = z51.object({
  title: z51.string().optional(),
  slug: z51.string().min(1).transform(kebabCase).optional(),
  visibility: z51.enum(["public", "private"]).default("private").optional(),
  templateId: idSchema.optional(),
  // ✅ Optional templateId for imports
  data: resumeDataSchema
});
var ImportResumeDto = class extends createZodDto30(importResumeSchema) {
};

// src/dto/resume/resume.ts
import { createZodDto as createZodDto32 } from "nestjs-zod/dto";
import { z as z53 } from "nestjs-zod/z";

// src/dto/template/template.ts
import { createZodDto as createZodDto31 } from "nestjs-zod/dto";
import { z as z52 } from "nestjs-zod/z";
var metadataSchema2 = z52.object({
  template: z52.string(),
  layout: z52.array(z52.array(z52.array(z52.string()))),
  theme: z52.object({
    background: z52.string(),
    text: z52.string(),
    primary: z52.string()
  }),
  typography: z52.object({
    font: z52.object({
      family: z52.string(),
      size: z52.number(),
      variants: z52.array(z52.string()),
      subset: z52.string()
    }),
    lineHeight: z52.number(),
    hideIcons: z52.boolean(),
    underlineLinks: z52.boolean()
  }),
  css: z52.object({
    value: z52.string(),
    visible: z52.boolean()
  }),
  page: z52.object({
    margin: z52.number(),
    format: z52.string(),
    options: z52.object({
      breakLine: z52.boolean(),
      pageNumbers: z52.boolean()
    })
  }),
  notes: z52.string()
});
var createTemplateSchema = z52.object({
  name: z52.string().min(1),
  slug: z52.string().min(1),
  description: z52.string().optional(),
  preview: z52.string().url().optional(),
  metadata: metadataSchema2,
  // Admin sets all template metadata
  isActive: z52.boolean().default(true),
  isPremium: z52.boolean().default(false)
});
var updateTemplateSchema = createTemplateSchema.partial();
var templateSchema = z52.object({
  id: idSchema,
  name: z52.string(),
  slug: z52.string(),
  description: z52.string().nullable(),
  preview: z52.string().nullable(),
  metadata: metadataSchema2,
  createdBy: idSchema,
  isActive: z52.boolean(),
  isPremium: z52.boolean(),
  version: z52.number(),
  createdAt: z52.date().or(z52.dateString()),
  updatedAt: z52.date().or(z52.dateString())
});
var CreateTemplateDto = class extends createZodDto31(createTemplateSchema) {
};
var UpdateTemplateDto = class extends createZodDto31(updateTemplateSchema) {
};
var TemplateDto = class extends createZodDto31(templateSchema) {
};

// src/dto/resume/resume.ts
var resumeSchema = z53.object({
  id: idSchema,
  title: z53.string(),
  slug: z53.string(),
  templateId: idSchema,
  // ✅ NEW
  template: templateSchema.optional(),
  // ✅ NEW: Include template in response
  data: resumeDataSchema.default(defaultResumeData),
  visibility: z53.enum(["private", "public"]).default("private"),
  locked: z53.boolean().default(false),
  organization: z53.string().nullable().optional(),
  userId: idSchema,
  user: userSchema.optional(),
  createdAt: z53.date().or(z53.dateString()),
  updatedAt: z53.date().or(z53.dateString())
});
var ResumeDto = class extends createZodDto32(resumeSchema) {
};

// src/dto/resume/update.ts
import { createZodDto as createZodDto33 } from "nestjs-zod/dto";
var updateResumeSchema = resumeSchema.partial().omit({
  templateId: true,
  // ✅ Users cannot change template
  template: true
  // ✅ Template is read-only for users
});
var UpdateResumeDto = class extends createZodDto33(updateResumeSchema) {
};

// src/dto/resume/url.ts
import { createZodDto as createZodDto34 } from "nestjs-zod/dto";
import { z as z54 } from "nestjs-zod/z";
var urlSchema2 = z54.object({ url: z54.string().url() });
var UrlDto = class extends createZodDto34(urlSchema2) {
};

// src/dto/resume-analysis/create.ts
import { createZodDto as createZodDto35 } from "nestjs-zod/dto";
import { z as z55 } from "nestjs-zod/z";
var createResumeAnalysisSchema = z55.object({
  resumeId: z55.string().min(1),
  overallScore: z55.number().min(0).max(100),
  status: z55.enum(["processing", "completed", "failed"]).default("processing"),
  version: z55.number().int().positive().default(1),
  results: z55.record(z55.any()),
  // JSON object with analysis results
  jobMatchingId: z55.string().nullable().optional(),
  coverLetterId: z55.string().nullable().optional()
});
var CreateResumeAnalysisDto = class extends createZodDto35(createResumeAnalysisSchema) {
};

// src/dto/resume-analysis/resume-analysis.ts
import { createZodDto as createZodDto36 } from "nestjs-zod/dto";
import { z as z56 } from "nestjs-zod/z";
var resumeAnalysisSchema = z56.object({
  id: z56.string(),
  overallScore: z56.number(),
  status: z56.enum(["processing", "completed", "failed"]),
  version: z56.number().int().positive(),
  trackerIndex: z56.number().int().positive(),
  active: z56.boolean(),
  results: z56.record(z56.any()),
  // JSON object with analysis results
  createdAt: z56.date(),
  updatedAt: z56.date(),
  resumeId: z56.string(),
  userId: z56.string(),
  jobMatchingId: z56.string().nullable(),
  coverLetterId: z56.string().nullable()
});
var ResumeAnalysisDto = class extends createZodDto36(resumeAnalysisSchema) {
};

// src/dto/resume-guidance/create.ts
import { createZodDto as createZodDto37 } from "nestjs-zod/dto";
import { z as z57 } from "nestjs-zod/z";
var createResumeGuidanceSchema = z57.object({
  resumeAnalysisId: z57.string().min(1),
  resumeId: z57.string().min(1),
  guidanceItems: z57.array(z57.object({
    category: z57.string(),
    suggestion: z57.string(),
    approach: z57.array(z57.string()),
    // Array of step-by-step instructions
    notes: z57.string().optional(),
    priority: z57.enum(["critical", "major", "minor"])
  })),
  notes: z57.string().nullable().optional()
  // User-editable notes
});
var CreateResumeGuidanceDto = class extends createZodDto37(createResumeGuidanceSchema) {
};

// src/dto/resume-guidance/resume-guidance.ts
import { createZodDto as createZodDto38 } from "nestjs-zod/dto";
import { z as z58 } from "nestjs-zod/z";
var resumeGuidanceSchema = z58.object({
  id: z58.string(),
  guidanceItems: z58.array(z58.object({
    category: z58.string(),
    suggestion: z58.string(),
    approach: z58.array(z58.string()),
    notes: z58.string().optional(),
    priority: z58.enum(["critical", "major", "minor"])
  })),
  notes: z58.string().nullable(),
  trackerIndex: z58.number().int().positive(),
  active: z58.boolean(),
  createdAt: z58.date(),
  updatedAt: z58.date(),
  resumeAnalysisId: z58.string(),
  resumeId: z58.string(),
  userId: z58.string()
});
var ResumeGuidanceDto = class extends createZodDto38(resumeGuidanceSchema) {
};

// src/dto/resume-guidance/update-notes.ts
import { createZodDto as createZodDto39 } from "nestjs-zod/dto";
import { z as z59 } from "nestjs-zod/z";
var updateNotesSchema = z59.object({
  notes: z59.string().nullable()
});
var UpdateNotesDto = class extends createZodDto39(updateNotesSchema) {
};

// src/dto/statistics/index.ts
import { createZodDto as createZodDto40 } from "nestjs-zod/dto";
import { z as z60 } from "nestjs-zod/z";
var statisticsSchema = z60.object({
  views: z60.number().int().default(0),
  downloads: z60.number().int().default(0)
});
var StatisticsDto = class extends createZodDto40(statisticsSchema) {
};

// src/dto/tracking-settings/update.ts
import { createZodDto as createZodDto41 } from "nestjs-zod/dto";
import { z as z61 } from "nestjs-zod/z";
var updateTrackingSettingsSchema = z61.object({
  tagManagerId: z61.string().optional().nullable().transform((v) => v === "" ? null : v),
  pixelId: z61.string().optional().nullable().transform((v) => v === "" ? null : v)
});
var UpdateTrackingSettingsDto = class extends createZodDto41(
  updateTrackingSettingsSchema
) {
};
export {
  AuthProvidersDto,
  AuthResponseDto,
  BackupCodesDto,
  ContactFormDto,
  ContributorDto,
  CreateBlogDto,
  CreateCoverLetterDto,
  CreateJobMatchingDto,
  CreateResumeAnalysisDto,
  CreateResumeDto,
  CreateResumeGuidanceDto,
  CreateTemplateDto,
  DeleteResumeDto,
  FeatureDto,
  ForgotPasswordDto,
  GenerateCoverLetterDto,
  ImportResumeDto,
  JobMatchingDto,
  LoginDto,
  MessageDto,
  ResetPasswordDto2 as NewResetPasswordDto,
  RegisterDto,
  ResetPasswordDto,
  ResumeAnalysisDto,
  ResumeDto,
  ResumeGuidanceDto,
  SignupDto,
  StatisticsDto,
  SubscribeNewsletterDto,
  TemplateDto,
  TwoFactorBackupDto,
  TwoFactorDto,
  UpdateBlogDto,
  UpdateCoverLetterDto,
  UpdateJobMatchingDto,
  UpdateNoteDto,
  UpdateNotesDto,
  UpdatePasswordDto,
  UpdateResumeDto,
  UpdateTemplateDto,
  UpdateTrackingSettingsDto,
  UpdateUserDto,
  UrlDto,
  UserDto,
  UserWithSecrets,
  VerifyOtpDto,
  authResponseSchema,
  backupCodesSchema,
  contactFormSchema,
  contributorSchema,
  createBlogSchema,
  createCoverLetterSchema,
  createJobMatchingSchema,
  createResumeAnalysisSchema,
  createResumeGuidanceSchema,
  createResumeSchema,
  createTemplateSchema,
  deleteResumeSchema,
  featureSchema,
  forgotPasswordSchema,
  generateCoverLetterSchema,
  importResumeSchema,
  jobMatchingSchema,
  loginSchema,
  messageSchema,
  registerSchema,
  resetPasswordSchema,
  resumeAnalysisSchema,
  resumeGuidanceSchema,
  resumeSchema,
  secretsSchema,
  signupSchema,
  statisticsSchema,
  subscribeNewsletterSchema,
  templateSchema,
  twoFactorBackupSchema,
  twoFactorSchema,
  updateBlogSchema,
  updateCoverLetterSchema,
  updateJobMatchingSchema,
  updateNoteSchema,
  updateNotesSchema,
  updatePasswordSchema,
  updateResumeSchema,
  updateTemplateSchema,
  updateTrackingSettingsSchema,
  updateUserSchema,
  urlSchema2 as urlSchema,
  userSchema,
  userWithSecretsSchema,
  usernameSchema,
  verifyOtpSchema
};
//# sourceMappingURL=index.mjs.map