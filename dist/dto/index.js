"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/dto/index.ts
var dto_exports = {};
__export(dto_exports, {
  AuthProvidersDto: () => AuthProvidersDto,
  AuthResponseDto: () => AuthResponseDto,
  BackupCodesDto: () => BackupCodesDto,
  ContactFormDto: () => ContactFormDto,
  ContributorDto: () => ContributorDto,
  CreateBlogDto: () => CreateBlogDto,
  CreateCoverLetterDto: () => CreateCoverLetterDto,
  CreateJobMatchingDto: () => CreateJobMatchingDto,
  CreateResumeAnalysisDto: () => CreateResumeAnalysisDto,
  CreateResumeDto: () => CreateResumeDto,
  CreateResumeGuidanceDto: () => CreateResumeGuidanceDto,
  CreateTemplateDto: () => CreateTemplateDto,
  DeleteResumeDto: () => DeleteResumeDto,
  FeatureDto: () => FeatureDto,
  ForgotPasswordDto: () => ForgotPasswordDto,
  GenerateCoverLetterDto: () => GenerateCoverLetterDto,
  ImportResumeDto: () => ImportResumeDto,
  JobMatchingDto: () => JobMatchingDto,
  LoginDto: () => LoginDto,
  MessageDto: () => MessageDto,
  NewResetPasswordDto: () => ResetPasswordDto2,
  OAuthExchangeDto: () => OAuthExchangeDto,
  RegisterDto: () => RegisterDto,
  ResetPasswordDto: () => ResetPasswordDto,
  ResumeAnalysisDto: () => ResumeAnalysisDto,
  ResumeDto: () => ResumeDto,
  ResumeGuidanceDto: () => ResumeGuidanceDto,
  SignupDto: () => SignupDto,
  StatisticsDto: () => StatisticsDto,
  SubscribeNewsletterDto: () => SubscribeNewsletterDto,
  TemplateDto: () => TemplateDto,
  TwoFactorBackupDto: () => TwoFactorBackupDto,
  TwoFactorDto: () => TwoFactorDto,
  UpdateBlogDto: () => UpdateBlogDto,
  UpdateCoverLetterDto: () => UpdateCoverLetterDto,
  UpdateJobMatchingDto: () => UpdateJobMatchingDto,
  UpdateNoteDto: () => UpdateNoteDto,
  UpdateNotesDto: () => UpdateNotesDto,
  UpdatePasswordDto: () => UpdatePasswordDto,
  UpdateResumeDto: () => UpdateResumeDto,
  UpdateTemplateDto: () => UpdateTemplateDto,
  UpdateTrackingSettingsDto: () => UpdateTrackingSettingsDto,
  UpdateUserDto: () => UpdateUserDto,
  UrlDto: () => UrlDto,
  UserDto: () => UserDto,
  UserWithSecrets: () => UserWithSecrets,
  VerifyOtpDto: () => VerifyOtpDto,
  authResponseSchema: () => authResponseSchema,
  backupCodesSchema: () => backupCodesSchema,
  contactFormSchema: () => contactFormSchema,
  contributorSchema: () => contributorSchema,
  createBlogSchema: () => createBlogSchema,
  createCoverLetterSchema: () => createCoverLetterSchema,
  createJobMatchingSchema: () => createJobMatchingSchema,
  createResumeAnalysisSchema: () => createResumeAnalysisSchema,
  createResumeGuidanceSchema: () => createResumeGuidanceSchema,
  createResumeSchema: () => createResumeSchema,
  createTemplateSchema: () => createTemplateSchema,
  deleteResumeSchema: () => deleteResumeSchema,
  featureSchema: () => featureSchema,
  forgotPasswordSchema: () => forgotPasswordSchema,
  generateCoverLetterSchema: () => generateCoverLetterSchema,
  importResumeSchema: () => importResumeSchema,
  jobMatchingSchema: () => jobMatchingSchema,
  loginSchema: () => loginSchema,
  messageSchema: () => messageSchema,
  oauthExchangeSchema: () => oauthExchangeSchema,
  registerSchema: () => registerSchema,
  resetPasswordSchema: () => resetPasswordSchema,
  resumeAnalysisSchema: () => resumeAnalysisSchema,
  resumeGuidanceSchema: () => resumeGuidanceSchema,
  resumeSchema: () => resumeSchema,
  secretsSchema: () => secretsSchema,
  signupSchema: () => signupSchema,
  statisticsSchema: () => statisticsSchema,
  subscribeNewsletterSchema: () => subscribeNewsletterSchema,
  templateSchema: () => templateSchema,
  twoFactorBackupSchema: () => twoFactorBackupSchema,
  twoFactorSchema: () => twoFactorSchema,
  updateBlogSchema: () => updateBlogSchema,
  updateCoverLetterSchema: () => updateCoverLetterSchema,
  updateJobMatchingSchema: () => updateJobMatchingSchema,
  updateNoteSchema: () => updateNoteSchema,
  updateNotesSchema: () => updateNotesSchema,
  updatePasswordSchema: () => updatePasswordSchema,
  updateResumeSchema: () => updateResumeSchema,
  updateTemplateSchema: () => updateTemplateSchema,
  updateTrackingSettingsSchema: () => updateTrackingSettingsSchema,
  updateUserSchema: () => updateUserSchema,
  urlSchema: () => urlSchema2,
  userSchema: () => userSchema,
  userWithSecretsSchema: () => userWithSecretsSchema,
  usernameSchema: () => usernameSchema,
  verifyOtpSchema: () => verifyOtpSchema
});
module.exports = __toCommonJS(dto_exports);

// src/dto/auth/forgot-password.ts
var import_dto = require("nestjs-zod/dto");
var import_z = require("nestjs-zod/z");
var forgotPasswordSchema = import_z.z.object({ email: import_z.z.string().email() });
var ForgotPasswordDto = class extends (0, import_dto.createZodDto)(forgotPasswordSchema) {
};

// src/dto/auth/login.ts
var import_dto4 = require("nestjs-zod/dto");
var import_z4 = require("nestjs-zod/z");

// src/dto/user/update-user.ts
var import_dto3 = require("nestjs-zod/dto");

// src/schema/index.ts
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

// src/dto/user/user.ts
var import_dto2 = require("nestjs-zod/dto");
var import_z3 = require("nestjs-zod/z");

// src/dto/secrets/secrets.ts
var import_z2 = require("nestjs-zod/z");
var secretsSchema = import_z2.z.object({
  id: idSchema,
  password: import_z2.z.string().nullable(),
  lastSignedIn: import_z2.z.date().nullable(),
  verificationToken: import_z2.z.string().nullable(),
  twoFactorSecret: import_z2.z.string().nullable(),
  twoFactorBackupCodes: import_z2.z.array(import_z2.z.string()).default([]),
  refreshToken: import_z2.z.string().nullable(),
  resetToken: import_z2.z.string().nullable(),
  userId: idSchema
});

// src/dto/user/user.ts
var usernameSchema = import_z3.z.string().min(3).max(255).regex(/^[\d._a-z-]+$/, {
  message: "Usernames can only contain lowercase letters, numbers, periods, hyphens, and underscores."
});
var userSchema = import_z3.z.object({
  id: idSchema,
  name: import_z3.z.string().min(1).max(255),
  picture: import_z3.z.literal("").or(import_z3.z.null()).or(import_z3.z.string().url()),
  username: usernameSchema,
  email: import_z3.z.string().email(),
  locale: import_z3.z.string().default("en-US"),
  emailVerified: import_z3.z.boolean().default(false),
  twoFactorEnabled: import_z3.z.boolean().default(false),
  provider: import_z3.z.enum(["email", "github", "google", "facebook", "linkedin"]).default("email"),
  // New fields
  shortName: import_z3.z.string().optional(),
  status: import_z3.z.enum(["ACTIVE", "INACTIVE"]).default("INACTIVE"),
  verificationToken: import_z3.z.string().optional(),
  verificationExpires: import_z3.z.date().or(import_z3.z.dateString()).optional(),
  tempData: import_z3.z.any().optional(),
  thumb: import_z3.z.string().optional(),
  role: import_z3.z.enum(["USER", "ADMIN", "ACCOUNT_DEPARTMENT", "PUBLISHER_DEPARTMENT"]).default("USER"),
  number: import_z3.z.string().optional(),
  createdAt: import_z3.z.date().or(import_z3.z.dateString()),
  updatedAt: import_z3.z.date().or(import_z3.z.dateString())
});
var UserDto = class extends (0, import_dto2.createZodDto)(userSchema) {
};
var userWithSecretsSchema = userSchema.merge(import_z3.z.object({ secrets: secretsSchema }));
var UserWithSecrets = class extends (0, import_dto2.createZodDto)(userWithSecretsSchema) {
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
var UpdateUserDto = class extends (0, import_dto3.createZodDto)(updateUserSchema) {
};

// src/dto/auth/login.ts
var loginSchema = import_z4.z.object({
  identifier: import_z4.z.string(),
  password: import_z4.z.password().min(6)
}).refine(
  (value) => {
    return value.identifier.includes("@") ? import_z4.z.string().email().parse(value.identifier) : usernameSchema.parse(value.identifier);
  },
  { message: "InvalidCredentials" }
);
var LoginDto = class extends (0, import_dto4.createZodDto)(loginSchema) {
};

// src/dto/auth/message.ts
var import_dto5 = require("nestjs-zod/dto");
var import_z5 = require("nestjs-zod/z");
var messageSchema = import_z5.z.object({ message: import_z5.z.string() });
var MessageDto = class extends (0, import_dto5.createZodDto)(messageSchema) {
};

// src/dto/auth/providers.ts
var import_dto6 = require("nestjs-zod/dto");
var import_z6 = require("nestjs-zod/z");
var authProvidersSchema = import_z6.z.array(import_z6.z.enum(["email", "github", "google", "facebook", "linkedin"]));
var AuthProvidersDto = class extends (0, import_dto6.createZodDto)(authProvidersSchema) {
};

// src/dto/auth/oauth-exchange.ts
var import_dto7 = require("nestjs-zod/dto");
var import_z7 = require("nestjs-zod/z");
var oauthExchangeSchema = import_z7.z.object({
  code: import_z7.z.string().min(20).max(128)
});
var OAuthExchangeDto = class extends (0, import_dto7.createZodDto)(oauthExchangeSchema) {
};

// src/dto/auth/register.ts
var import_dto8 = require("nestjs-zod/dto");
var import_z8 = require("nestjs-zod/z");
var registerSchema = userSchema.pick({ name: true, email: true, username: true, locale: true }).extend({ password: import_z8.z.password().min(6) });
var RegisterDto = class extends (0, import_dto8.createZodDto)(registerSchema) {
};

// src/dto/auth/reset-password.ts
var import_dto9 = require("nestjs-zod/dto");
var import_z9 = require("nestjs-zod/z");
var resetPasswordSchema = import_z9.z.object({
  token: import_z9.z.string(),
  password: import_z9.z.password().min(6)
});
var ResetPasswordDto = class extends (0, import_dto9.createZodDto)(resetPasswordSchema) {
};

// src/dto/auth/response.ts
var import_dto10 = require("nestjs-zod/dto");
var import_z10 = require("nestjs-zod/z");
var authResponseSchema = import_z10.z.object({
  status: import_z10.z.enum(["authenticated", "2fa_required"]),
  user: userSchema
});
var AuthResponseDto = class extends (0, import_dto10.createZodDto)(authResponseSchema) {
};

// src/dto/auth/signup.ts
var import_dto11 = require("nestjs-zod/dto");
var import_z11 = require("nestjs-zod/z");
var signupSchema = import_z11.z.object({
  username: import_z11.z.string().min(3).max(255),
  email: import_z11.z.string().email(),
  password: import_z11.z.string().min(6),
  shortName: import_z11.z.string().optional(),
  thumb: import_z11.z.string().optional(),
  number: import_z11.z.string().optional(),
  go_crazy121211: import_z11.z.boolean().optional(),
  role: import_z11.z.enum(["super-admin", "admin", "user"]).optional().default("user")
});
var SignupDto = class extends (0, import_dto11.createZodDto)(signupSchema) {
};

// src/dto/auth/two-factor.ts
var import_dto12 = require("nestjs-zod/dto");
var import_z12 = require("nestjs-zod/z");
var twoFactorSchema = import_z12.z.object({
  code: import_z12.z.string().length(6, { message: "Code must be a 6 digit number" }).regex(/^\d+$/, { message: "Code must be a 6 digit number" })
});
var TwoFactorDto = class extends (0, import_dto12.createZodDto)(twoFactorSchema) {
};
var backupCodesSchema = import_z12.z.object({
  backupCodes: import_z12.z.array(import_z12.z.string().length(10))
});
var BackupCodesDto = class extends (0, import_dto12.createZodDto)(backupCodesSchema) {
};
var twoFactorBackupSchema = import_z12.z.object({
  code: import_z12.z.string().length(10)
});
var TwoFactorBackupDto = class extends (0, import_dto12.createZodDto)(twoFactorBackupSchema) {
};

// src/dto/auth/update-password.ts
var import_dto13 = require("nestjs-zod/dto");
var import_z13 = require("nestjs-zod/z");
var updatePasswordSchema = import_z13.z.object({
  password: import_z13.z.string().min(6)
});
var UpdatePasswordDto = class extends (0, import_dto13.createZodDto)(updatePasswordSchema) {
};

// src/dto/auth/verify-otp.ts
var import_dto14 = require("nestjs-zod/dto");
var import_z14 = require("nestjs-zod/z");
var verifyOtpSchema = import_z14.z.object({
  email: import_z14.z.string().email(),
  otp: import_z14.z.string().length(4)
});
var VerifyOtpDto = class extends (0, import_dto14.createZodDto)(verifyOtpSchema) {
};

// src/dto/auth/reset-password-new.ts
var import_dto15 = require("nestjs-zod/dto");
var import_z15 = require("nestjs-zod/z");
var resetPasswordSchema2 = import_z15.z.object({
  email: import_z15.z.string().email(),
  newPassword: import_z15.z.string().min(6),
  confirmPassword: import_z15.z.string().min(6)
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var ResetPasswordDto2 = class extends (0, import_dto15.createZodDto)(resetPasswordSchema2) {
};

// src/dto/blog/create.ts
var import_dto16 = require("nestjs-zod/dto");
var import_z16 = require("nestjs-zod/z");
var createBlogSchema = import_z16.z.object({
  title: import_z16.z.string().min(3).max(255),
  content: import_z16.z.string().min(10),
  summary: import_z16.z.string().min(10).max(500).optional().nullable(),
  featuredImage: import_z16.z.string().optional().nullable(),
  // data URL (base64) or URL; max 5MB enforced server-side
  tags: import_z16.z.array(import_z16.z.string()).optional().default([]),
  categories: import_z16.z.array(import_z16.z.string()).optional().default([]),
  status: import_z16.z.enum(["draft", "published"]).optional().default("draft"),
  publishedAt: import_z16.z.coerce.date().optional().nullable(),
  authorName: import_z16.z.string().optional().nullable(),
  authorBio: import_z16.z.string().optional().nullable(),
  authorImage: import_z16.z.string().url().optional().nullable(),
  metaTitle: import_z16.z.string().max(60).optional().nullable(),
  metaDescription: import_z16.z.string().max(160).optional().nullable()
});
var CreateBlogDto = class extends (0, import_dto16.createZodDto)(createBlogSchema) {
};

// src/dto/blog/update.ts
var import_dto17 = require("nestjs-zod/dto");
var import_z17 = require("nestjs-zod/z");
var updateBlogSchema = import_z17.z.object({
  title: import_z17.z.string().min(3).max(255).optional(),
  content: import_z17.z.string().min(10).optional(),
  summary: import_z17.z.string().min(10).max(500).optional().nullable(),
  featuredImage: import_z17.z.string().optional().nullable(),
  // data URL (base64) or URL; max 5MB enforced server-side
  tags: import_z17.z.array(import_z17.z.string()).optional(),
  categories: import_z17.z.array(import_z17.z.string()).optional(),
  status: import_z17.z.enum(["draft", "published"]).optional(),
  publishedAt: import_z17.z.coerce.date().optional().nullable(),
  authorName: import_z17.z.string().optional().nullable(),
  authorBio: import_z17.z.string().optional().nullable(),
  authorImage: import_z17.z.string().url().optional().nullable(),
  metaTitle: import_z17.z.string().max(60).optional().nullable(),
  metaDescription: import_z17.z.string().max(160).optional().nullable()
});
var UpdateBlogDto = class extends (0, import_dto17.createZodDto)(updateBlogSchema) {
};

// src/dto/contributors/index.ts
var import_dto18 = require("nestjs-zod/dto");
var import_z18 = require("nestjs-zod/z");
var contributorSchema = import_z18.z.object({
  id: import_z18.z.number(),
  name: import_z18.z.string(),
  url: import_z18.z.string(),
  avatar: import_z18.z.string()
});
var ContributorDto = class extends (0, import_dto18.createZodDto)(contributorSchema) {
};

// src/dto/contact/index.ts
var import_dto19 = require("nestjs-zod/dto");
var import_z19 = require("nestjs-zod/z");
var contactFormSchema = import_z19.z.object({
  firstName: import_z19.z.string().min(1).max(255),
  lastName: import_z19.z.string().min(1).max(255),
  phone: import_z19.z.string().min(1).max(20),
  email: import_z19.z.string().email(),
  message: import_z19.z.string().min(1).max(1e3),
  privacyAgreed: import_z19.z.boolean().default(false)
});
var ContactFormDto = class extends (0, import_dto19.createZodDto)(contactFormSchema) {
};

// src/dto/cover-letter/create.ts
var import_dto20 = require("nestjs-zod/dto");
var import_z20 = require("nestjs-zod/z");
var createCoverLetterSchema = import_z20.z.object({
  jobMatchingId: import_z20.z.string().min(1),
  resumeId: import_z20.z.string().min(1),
  content: import_z20.z.string().min(1),
  tone: import_z20.z.string().nullable().optional()
});
var CreateCoverLetterDto = class extends (0, import_dto20.createZodDto)(createCoverLetterSchema) {
};

// src/dto/cover-letter/update.ts
var import_dto21 = require("nestjs-zod/dto");
var import_z21 = require("nestjs-zod/z");
var updateCoverLetterSchema = import_z21.z.object({
  content: import_z21.z.string().min(1).optional(),
  tone: import_z21.z.string().nullable().optional()
});
var UpdateCoverLetterDto = class extends (0, import_dto21.createZodDto)(updateCoverLetterSchema) {
};

// src/dto/cover-letter/generate.ts
var import_dto22 = require("nestjs-zod/dto");
var import_z22 = require("nestjs-zod/z");
var generateCoverLetterSchema = import_z22.z.object({
  jobMatchingId: import_z22.z.string().min(1),
  resumeId: import_z22.z.string().min(1)
});
var GenerateCoverLetterDto = class extends (0, import_dto22.createZodDto)(generateCoverLetterSchema) {
};

// src/dto/feature/index.ts
var import_dto23 = require("nestjs-zod/dto");
var import_z23 = require("nestjs-zod/z");
var featureSchema = import_z23.z.object({
  isSignupsDisabled: import_z23.z.boolean().default(false),
  isEmailAuthDisabled: import_z23.z.boolean().default(false)
});
var FeatureDto = class extends (0, import_dto23.createZodDto)(featureSchema) {
};

// src/dto/job-matching/create.ts
var import_dto24 = require("nestjs-zod/dto");
var import_z24 = require("nestjs-zod/z");
var createJobMatchingSchema = import_z24.z.object({
  title: import_z24.z.string().min(1),
  company: import_z24.z.string().min(1),
  jobDescription: import_z24.z.string().min(1),
  resumeId: import_z24.z.string().min(1),
  jobType: import_z24.z.string().nullable().optional(),
  averageSalary: import_z24.z.string().nullable().optional(),
  matchScore: import_z24.z.number().min(0).max(100).nullable().optional(),
  keywords: import_z24.z.array(import_z24.z.string()).optional()
});
var CreateJobMatchingDto = class extends (0, import_dto24.createZodDto)(createJobMatchingSchema) {
};

// src/dto/job-matching/update.ts
var import_dto25 = require("nestjs-zod/dto");
var import_z25 = require("nestjs-zod/z");
var updateJobMatchingSchema = import_z25.z.object({
  title: import_z25.z.string().min(1).optional(),
  company: import_z25.z.string().min(1).optional(),
  jobDescription: import_z25.z.string().min(1).optional(),
  jobType: import_z25.z.string().nullable().optional(),
  averageSalary: import_z25.z.string().nullable().optional(),
  matchScore: import_z25.z.number().min(0).max(100).nullable().optional(),
  note: import_z25.z.string().nullable().optional(),
  keywords: import_z25.z.array(import_z25.z.string()).optional()
});
var UpdateJobMatchingDto = class extends (0, import_dto25.createZodDto)(updateJobMatchingSchema) {
};

// src/dto/job-matching/note.ts
var import_dto26 = require("nestjs-zod/dto");
var import_z26 = require("nestjs-zod/z");
var updateNoteSchema = import_z26.z.object({
  note: import_z26.z.string().optional()
});
var UpdateNoteDto = class extends (0, import_dto26.createZodDto)(updateNoteSchema) {
};

// src/dto/job-matching/job-matching.ts
var import_dto27 = require("nestjs-zod/dto");
var import_z27 = require("nestjs-zod/z");
var jobMatchingSchema = import_z27.z.object({
  id: import_z27.z.string(),
  title: import_z27.z.string(),
  company: import_z27.z.string(),
  jobDescription: import_z27.z.string(),
  jobType: import_z27.z.string().nullable(),
  averageSalary: import_z27.z.string().nullable(),
  matchScore: import_z27.z.number().nullable(),
  trackerIndex: import_z27.z.number(),
  note: import_z27.z.string().nullable(),
  active: import_z27.z.boolean(),
  createdAt: import_z27.z.date(),
  updatedAt: import_z27.z.date(),
  resumeId: import_z27.z.string(),
  userId: import_z27.z.string(),
  keywords: import_z27.z.array(import_z27.z.string())
});
var JobMatchingDto = class extends (0, import_dto27.createZodDto)(jobMatchingSchema) {
};

// src/dto/newsletter/index.ts
var import_dto28 = require("nestjs-zod/dto");
var import_z28 = require("nestjs-zod/z");
var subscribeNewsletterSchema = import_z28.z.object({
  email: import_z28.z.string().email()
});
var SubscribeNewsletterDto = class extends (0, import_dto28.createZodDto)(subscribeNewsletterSchema) {
};

// src/utils/namespaces/csv.ts
var import_papaparse = __toESM(require("papaparse"));

// src/utils/namespaces/date.ts
var import_dayjs = __toESM(require("dayjs"));

// src/utils/namespaces/string.ts
var import_unique_names_generator = require("unique-names-generator");
var kebabCase = (string) => {
  if (!string) return "";
  return string.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/gu)?.join("-").toLowerCase() ?? "";
};

// src/utils/namespaces/style.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");

// src/dto/resume/create.ts
var import_dto29 = require("nestjs-zod/dto");
var import_z29 = require("nestjs-zod/z");
var createResumeSchema = import_z29.z.object({
  title: import_z29.z.string().min(1),
  slug: import_z29.z.string().min(1).transform(kebabCase).optional(),
  templateId: import_z29.z.string().min(1, { message: "templateId is required and must be a non-empty string" }),
  // ✅ NEW: Required template selection
  visibility: import_z29.z.enum(["public", "private"]).default("private"),
  organization: import_z29.z.string().nullable().optional()
});
var CreateResumeDto = class extends (0, import_dto29.createZodDto)(createResumeSchema) {
};

// src/dto/resume/delete.ts
var import_dto30 = require("nestjs-zod/dto");
var import_z30 = require("nestjs-zod/z");
var deleteResumeSchema = import_z30.z.object({
  id: idSchema
});
var DeleteResumeDto = class extends (0, import_dto30.createZodDto)(deleteResumeSchema) {
};

// src/dto/resume/import.ts
var import_dto31 = require("nestjs-zod/dto");
var import_z31 = require("nestjs-zod/z");
var importResumeSchema = import_z31.z.object({
  title: import_z31.z.string().optional(),
  slug: import_z31.z.string().min(1).transform(kebabCase).optional(),
  visibility: import_z31.z.enum(["public", "private"]).default("private").optional(),
  templateId: idSchema.optional(),
  // ✅ Optional templateId for imports
  data: resumeDataSchema
});
var ImportResumeDto = class extends (0, import_dto31.createZodDto)(importResumeSchema) {
};

// src/dto/resume/resume.ts
var import_dto33 = require("nestjs-zod/dto");
var import_z33 = require("nestjs-zod/z");

// src/dto/template/template.ts
var import_dto32 = require("nestjs-zod/dto");
var import_z32 = require("nestjs-zod/z");
var metadataSchema2 = import_z32.z.object({
  template: import_z32.z.string(),
  layout: import_z32.z.array(import_z32.z.array(import_z32.z.array(import_z32.z.string()))),
  theme: import_z32.z.object({
    background: import_z32.z.string(),
    text: import_z32.z.string(),
    primary: import_z32.z.string()
  }),
  typography: import_z32.z.object({
    font: import_z32.z.object({
      family: import_z32.z.string(),
      size: import_z32.z.number(),
      variants: import_z32.z.array(import_z32.z.string()),
      subset: import_z32.z.string()
    }),
    lineHeight: import_z32.z.number(),
    hideIcons: import_z32.z.boolean(),
    underlineLinks: import_z32.z.boolean()
  }),
  css: import_z32.z.object({
    value: import_z32.z.string(),
    visible: import_z32.z.boolean()
  }),
  page: import_z32.z.object({
    margin: import_z32.z.number(),
    format: import_z32.z.string(),
    options: import_z32.z.object({
      breakLine: import_z32.z.boolean(),
      pageNumbers: import_z32.z.boolean()
    })
  }),
  notes: import_z32.z.string()
});
var createTemplateSchema = import_z32.z.object({
  name: import_z32.z.string().min(1),
  slug: import_z32.z.string().min(1),
  description: import_z32.z.string().optional(),
  preview: import_z32.z.string().url().optional(),
  metadata: metadataSchema2,
  // Admin sets all template metadata
  isActive: import_z32.z.boolean().default(true),
  isPremium: import_z32.z.boolean().default(false)
});
var updateTemplateSchema = createTemplateSchema.partial();
var templateSchema = import_z32.z.object({
  id: idSchema,
  name: import_z32.z.string(),
  slug: import_z32.z.string(),
  description: import_z32.z.string().nullable(),
  preview: import_z32.z.string().nullable(),
  metadata: metadataSchema2,
  createdBy: idSchema,
  isActive: import_z32.z.boolean(),
  isPremium: import_z32.z.boolean(),
  version: import_z32.z.number(),
  createdAt: import_z32.z.date().or(import_z32.z.dateString()),
  updatedAt: import_z32.z.date().or(import_z32.z.dateString())
});
var CreateTemplateDto = class extends (0, import_dto32.createZodDto)(createTemplateSchema) {
};
var UpdateTemplateDto = class extends (0, import_dto32.createZodDto)(updateTemplateSchema) {
};
var TemplateDto = class extends (0, import_dto32.createZodDto)(templateSchema) {
};

// src/dto/resume/resume.ts
var resumeSchema = import_z33.z.object({
  id: idSchema,
  title: import_z33.z.string(),
  slug: import_z33.z.string(),
  templateId: idSchema,
  // ✅ NEW
  template: templateSchema.optional(),
  // ✅ NEW: Include template in response
  data: resumeDataSchema.default(defaultResumeData),
  visibility: import_z33.z.enum(["private", "public"]).default("private"),
  locked: import_z33.z.boolean().default(false),
  organization: import_z33.z.string().nullable().optional(),
  userId: idSchema,
  user: userSchema.optional(),
  createdAt: import_z33.z.date().or(import_z33.z.dateString()),
  updatedAt: import_z33.z.date().or(import_z33.z.dateString())
});
var ResumeDto = class extends (0, import_dto33.createZodDto)(resumeSchema) {
};

// src/dto/resume/update.ts
var import_dto34 = require("nestjs-zod/dto");
var updateResumeSchema = resumeSchema.partial().omit({
  templateId: true,
  // ✅ Users cannot change template
  template: true
  // ✅ Template is read-only for users
});
var UpdateResumeDto = class extends (0, import_dto34.createZodDto)(updateResumeSchema) {
};

// src/dto/resume/url.ts
var import_dto35 = require("nestjs-zod/dto");
var import_z34 = require("nestjs-zod/z");
var urlSchema2 = import_z34.z.object({ url: import_z34.z.string().url() });
var UrlDto = class extends (0, import_dto35.createZodDto)(urlSchema2) {
};

// src/dto/resume-analysis/create.ts
var import_dto36 = require("nestjs-zod/dto");
var import_z35 = require("nestjs-zod/z");
var createResumeAnalysisSchema = import_z35.z.object({
  resumeId: import_z35.z.string().min(1),
  overallScore: import_z35.z.number().min(0).max(100),
  status: import_z35.z.enum(["processing", "completed", "failed"]).default("processing"),
  version: import_z35.z.number().int().positive().default(1),
  results: import_z35.z.record(import_z35.z.any()),
  // JSON object with analysis results
  jobMatchingId: import_z35.z.string().nullable().optional(),
  coverLetterId: import_z35.z.string().nullable().optional()
});
var CreateResumeAnalysisDto = class extends (0, import_dto36.createZodDto)(createResumeAnalysisSchema) {
};

// src/dto/resume-analysis/resume-analysis.ts
var import_dto37 = require("nestjs-zod/dto");
var import_z36 = require("nestjs-zod/z");
var resumeAnalysisSchema = import_z36.z.object({
  id: import_z36.z.string(),
  overallScore: import_z36.z.number(),
  status: import_z36.z.enum(["processing", "completed", "failed"]),
  version: import_z36.z.number().int().positive(),
  trackerIndex: import_z36.z.number().int().positive(),
  active: import_z36.z.boolean(),
  results: import_z36.z.record(import_z36.z.any()),
  // JSON object with analysis results
  createdAt: import_z36.z.date(),
  updatedAt: import_z36.z.date(),
  resumeId: import_z36.z.string(),
  userId: import_z36.z.string(),
  jobMatchingId: import_z36.z.string().nullable(),
  coverLetterId: import_z36.z.string().nullable()
});
var ResumeAnalysisDto = class extends (0, import_dto37.createZodDto)(resumeAnalysisSchema) {
};

// src/dto/resume-guidance/create.ts
var import_dto38 = require("nestjs-zod/dto");
var import_z37 = require("nestjs-zod/z");
var createResumeGuidanceSchema = import_z37.z.object({
  resumeAnalysisId: import_z37.z.string().min(1),
  resumeId: import_z37.z.string().min(1),
  guidanceItems: import_z37.z.array(import_z37.z.object({
    category: import_z37.z.string(),
    suggestion: import_z37.z.string(),
    approach: import_z37.z.array(import_z37.z.string()),
    // Array of step-by-step instructions
    notes: import_z37.z.string().optional(),
    priority: import_z37.z.enum(["critical", "major", "minor"])
  })),
  notes: import_z37.z.string().nullable().optional()
  // User-editable notes
});
var CreateResumeGuidanceDto = class extends (0, import_dto38.createZodDto)(createResumeGuidanceSchema) {
};

// src/dto/resume-guidance/resume-guidance.ts
var import_dto39 = require("nestjs-zod/dto");
var import_z38 = require("nestjs-zod/z");
var resumeGuidanceSchema = import_z38.z.object({
  id: import_z38.z.string(),
  guidanceItems: import_z38.z.array(import_z38.z.object({
    category: import_z38.z.string(),
    suggestion: import_z38.z.string(),
    approach: import_z38.z.array(import_z38.z.string()),
    notes: import_z38.z.string().optional(),
    priority: import_z38.z.enum(["critical", "major", "minor"])
  })),
  notes: import_z38.z.string().nullable(),
  trackerIndex: import_z38.z.number().int().positive(),
  active: import_z38.z.boolean(),
  createdAt: import_z38.z.date(),
  updatedAt: import_z38.z.date(),
  resumeAnalysisId: import_z38.z.string(),
  resumeId: import_z38.z.string(),
  userId: import_z38.z.string()
});
var ResumeGuidanceDto = class extends (0, import_dto39.createZodDto)(resumeGuidanceSchema) {
};

// src/dto/resume-guidance/update-notes.ts
var import_dto40 = require("nestjs-zod/dto");
var import_z39 = require("nestjs-zod/z");
var updateNotesSchema = import_z39.z.object({
  notes: import_z39.z.string().nullable()
});
var UpdateNotesDto = class extends (0, import_dto40.createZodDto)(updateNotesSchema) {
};

// src/dto/statistics/index.ts
var import_dto41 = require("nestjs-zod/dto");
var import_z40 = require("nestjs-zod/z");
var statisticsSchema = import_z40.z.object({
  views: import_z40.z.number().int().default(0),
  downloads: import_z40.z.number().int().default(0)
});
var StatisticsDto = class extends (0, import_dto41.createZodDto)(statisticsSchema) {
};

// src/dto/tracking-settings/update.ts
var import_dto42 = require("nestjs-zod/dto");
var import_z41 = require("nestjs-zod/z");
var updateTrackingSettingsSchema = import_z41.z.object({
  tagManagerId: import_z41.z.string().optional().nullable().transform((v) => v === "" ? null : v),
  pixelId: import_z41.z.string().optional().nullable().transform((v) => v === "" ? null : v)
});
var UpdateTrackingSettingsDto = class extends (0, import_dto42.createZodDto)(
  updateTrackingSettingsSchema
) {
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  NewResetPasswordDto,
  OAuthExchangeDto,
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
  oauthExchangeSchema,
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
  urlSchema,
  userSchema,
  userWithSecretsSchema,
  usernameSchema,
  verifyOtpSchema
});
//# sourceMappingURL=index.js.map