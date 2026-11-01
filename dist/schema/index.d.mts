import { z } from 'zod';
import { F as FilterKeys } from '../types-D37QSOpK.mjs';

declare const customFieldSchema: z.ZodObject<{
    id: z.ZodString;
    icon: z.ZodString;
    name: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    id: string;
    icon: string;
    name: string;
}, {
    value: string;
    id: string;
    icon: string;
    name: string;
}>;
type CustomField = z.infer<typeof customFieldSchema>;

declare const basicsSchema: z.ZodObject<{
    name: z.ZodString;
    headline: z.ZodString;
    email: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    phone: z.ZodString;
    location: z.ZodString;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
    }, {
        label: string;
        href: string;
    }>;
    customFields: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        icon: z.ZodString;
        name: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id: string;
        icon: string;
        name: string;
    }, {
        value: string;
        id: string;
        icon: string;
        name: string;
    }>, "many">;
    picture: z.ZodObject<{
        url: z.ZodString;
        size: z.ZodDefault<z.ZodNumber>;
        aspectRatio: z.ZodDefault<z.ZodNumber>;
        borderRadius: z.ZodDefault<z.ZodNumber>;
        effects: z.ZodObject<{
            hidden: z.ZodDefault<z.ZodBoolean>;
            border: z.ZodDefault<z.ZodBoolean>;
            grayscale: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            hidden: boolean;
            border: boolean;
            grayscale: boolean;
        }, {
            hidden?: boolean | undefined;
            border?: boolean | undefined;
            grayscale?: boolean | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        size: number;
        aspectRatio: number;
        borderRadius: number;
        effects: {
            hidden: boolean;
            border: boolean;
            grayscale: boolean;
        };
    }, {
        url: string;
        effects: {
            hidden?: boolean | undefined;
            border?: boolean | undefined;
            grayscale?: boolean | undefined;
        };
        size?: number | undefined;
        aspectRatio?: number | undefined;
        borderRadius?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    headline: string;
    phone: string;
    location: string;
    url: {
        label: string;
        href: string;
    };
    customFields: {
        value: string;
        id: string;
        icon: string;
        name: string;
    }[];
    picture: {
        url: string;
        size: number;
        aspectRatio: number;
        borderRadius: number;
        effects: {
            hidden: boolean;
            border: boolean;
            grayscale: boolean;
        };
    };
}, {
    email: string;
    name: string;
    headline: string;
    phone: string;
    location: string;
    url: {
        label: string;
        href: string;
    };
    customFields: {
        value: string;
        id: string;
        icon: string;
        name: string;
    }[];
    picture: {
        url: string;
        effects: {
            hidden?: boolean | undefined;
            border?: boolean | undefined;
            grayscale?: boolean | undefined;
        };
        size?: number | undefined;
        aspectRatio?: number | undefined;
        borderRadius?: number | undefined;
    };
}>;
type Basics = z.infer<typeof basicsSchema>;
declare const defaultBasics: Basics;

declare const defaultLayout: string[][][];
declare const metadataSchema: z.ZodObject<{
    template: z.ZodDefault<z.ZodString>;
    layout: z.ZodDefault<z.ZodArray<z.ZodArray<z.ZodArray<z.ZodString, "many">, "many">, "many">>;
    css: z.ZodDefault<z.ZodObject<{
        value: z.ZodDefault<z.ZodString>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        visible: boolean;
    }, {
        value?: string | undefined;
        visible?: boolean | undefined;
    }>>;
    page: z.ZodDefault<z.ZodObject<{
        /** Top/bottom margin in mm (also the side margins unless marginLeft/Right are set). */
        margin: z.ZodDefault<z.ZodNumber>;
        /** Side margins in mm. */
        marginLeft: z.ZodDefault<z.ZodNumber>;
        marginRight: z.ZodDefault<z.ZodNumber>;
        format: z.ZodDefault<z.ZodEnum<["a4", "letter", "legal"]>>;
        options: z.ZodDefault<z.ZodObject<{
            breakLine: z.ZodDefault<z.ZodBoolean>;
            pageNumbers: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            breakLine: boolean;
            pageNumbers: boolean;
        }, {
            breakLine?: boolean | undefined;
            pageNumbers?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        options: {
            breakLine: boolean;
            pageNumbers: boolean;
        };
        margin: number;
        marginLeft: number;
        marginRight: number;
        format: "a4" | "letter" | "legal";
    }, {
        options?: {
            breakLine?: boolean | undefined;
            pageNumbers?: boolean | undefined;
        } | undefined;
        margin?: number | undefined;
        marginLeft?: number | undefined;
        marginRight?: number | undefined;
        format?: "a4" | "letter" | "legal" | undefined;
    }>>;
    theme: z.ZodDefault<z.ZodObject<{
        background: z.ZodDefault<z.ZodString>;
        text: z.ZodDefault<z.ZodString>;
        /** Accent colour (Design → Presentation). */
        primary: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        background: string;
        text: string;
        primary: string;
    }, {
        background?: string | undefined;
        text?: string | undefined;
        primary?: string | undefined;
    }>>;
    typography: z.ZodDefault<z.ZodObject<{
        font: z.ZodDefault<z.ZodObject<{
            /** CSS font-family name the artboard can load (Google Fonts or bundled). */
            family: z.ZodDefault<z.ZodString>;
            subset: z.ZodDefault<z.ZodString>;
            variants: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            /** Base size in px. */
            size: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            size: number;
            family: string;
            subset: string;
            variants: string[];
        }, {
            size?: number | undefined;
            family?: string | undefined;
            subset?: string | undefined;
            variants?: string[] | undefined;
        }>>;
        /** Line-height multiplier for paragraphs. */
        lineHeight: z.ZodDefault<z.ZodNumber>;
        /** Line-height multiplier for list items. */
        listLineHeight: z.ZodDefault<z.ZodNumber>;
        hideIcons: z.ZodDefault<z.ZodBoolean>;
        underlineLinks: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        font: {
            size: number;
            family: string;
            subset: string;
            variants: string[];
        };
        lineHeight: number;
        listLineHeight: number;
        hideIcons: boolean;
        underlineLinks: boolean;
    }, {
        font?: {
            size?: number | undefined;
            family?: string | undefined;
            subset?: string | undefined;
            variants?: string[] | undefined;
        } | undefined;
        lineHeight?: number | undefined;
        listLineHeight?: number | undefined;
        hideIcons?: boolean | undefined;
        underlineLinks?: boolean | undefined;
    }>>;
    /** Design → Presentation */
    presentation: z.ZodDefault<z.ZodObject<{
        dateFormat: z.ZodDefault<z.ZodEnum<["mm/yyyy", "mmm yyyy", "month yyyy", "yyyy"]>>;
        headerAlignment: z.ZodDefault<z.ZodEnum<["left", "center", "right"]>>;
        dateAlignment: z.ZodDefault<z.ZodEnum<["left", "right"]>>;
        locationAlignment: z.ZodDefault<z.ZodEnum<["left", "right"]>>;
        skillsLayout: z.ZodDefault<z.ZodEnum<["comma-separated", "comma-separated-list", "columns"]>>;
        skillsColumns: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        dateFormat: "mm/yyyy" | "mmm yyyy" | "month yyyy" | "yyyy";
        headerAlignment: "left" | "center" | "right";
        dateAlignment: "left" | "right";
        locationAlignment: "left" | "right";
        skillsLayout: "comma-separated" | "comma-separated-list" | "columns";
        skillsColumns: number;
    }, {
        dateFormat?: "mm/yyyy" | "mmm yyyy" | "month yyyy" | "yyyy" | undefined;
        headerAlignment?: "left" | "center" | "right" | undefined;
        dateAlignment?: "left" | "right" | undefined;
        locationAlignment?: "left" | "right" | undefined;
        skillsLayout?: "comma-separated" | "comma-separated-list" | "columns" | undefined;
        skillsColumns?: number | undefined;
    }>>;
    /** Design → Settings: what each entry leads with */
    display: z.ZodDefault<z.ZodObject<{
        experience: z.ZodDefault<z.ZodObject<{
            primary: z.ZodDefault<z.ZodEnum<["company", "position"]>>;
            location: z.ZodDefault<z.ZodEnum<["company", "position", "none"]>>;
            dates: z.ZodDefault<z.ZodEnum<["company", "position", "both"]>>;
        }, "strip", z.ZodTypeAny, {
            location: "company" | "position" | "none";
            primary: "company" | "position";
            dates: "company" | "position" | "both";
        }, {
            location?: "company" | "position" | "none" | undefined;
            primary?: "company" | "position" | undefined;
            dates?: "company" | "position" | "both" | undefined;
        }>>;
        education: z.ZodDefault<z.ZodObject<{
            primary: z.ZodDefault<z.ZodEnum<["institution", "degree"]>>;
        }, "strip", z.ZodTypeAny, {
            primary: "institution" | "degree";
        }, {
            primary?: "institution" | "degree" | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        experience: {
            location: "company" | "position" | "none";
            primary: "company" | "position";
            dates: "company" | "position" | "both";
        };
        education: {
            primary: "institution" | "degree";
        };
    }, {
        experience?: {
            location?: "company" | "position" | "none" | undefined;
            primary?: "company" | "position" | undefined;
            dates?: "company" | "position" | "both" | undefined;
        } | undefined;
        education?: {
            primary?: "institution" | "degree" | undefined;
        } | undefined;
    }>>;
    /** Design → Advanced */
    advanced: z.ZodDefault<z.ZodObject<{
        bullets: z.ZodDefault<z.ZodEnum<["circle", "dash", "chevron", "arrow", "comma", "line"]>>;
        /** CSS font-weight per role. */
        fontWeight: z.ZodDefault<z.ZodObject<{
            body: z.ZodDefault<z.ZodNumber>;
            name: z.ZodDefault<z.ZodNumber>;
            primaryHeading: z.ZodDefault<z.ZodNumber>;
            secondaryHeading: z.ZodDefault<z.ZodNumber>;
            sectionTitle: z.ZodDefault<z.ZodNumber>;
            minor: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            name: number;
            body: number;
            primaryHeading: number;
            secondaryHeading: number;
            sectionTitle: number;
            minor: number;
        }, {
            name?: number | undefined;
            body?: number | undefined;
            primaryHeading?: number | undefined;
            secondaryHeading?: number | undefined;
            sectionTitle?: number | undefined;
            minor?: number | undefined;
        }>>;
        /** Font-size multiplier per role, relative to typography.font.size. */
        fontScale: z.ZodDefault<z.ZodObject<{
            body: z.ZodDefault<z.ZodNumber>;
            name: z.ZodDefault<z.ZodNumber>;
            primaryHeading: z.ZodDefault<z.ZodNumber>;
            secondaryHeading: z.ZodDefault<z.ZodNumber>;
            sectionTitle: z.ZodDefault<z.ZodNumber>;
            minor: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            name: number;
            body: number;
            primaryHeading: number;
            secondaryHeading: number;
            sectionTitle: number;
            minor: number;
        }, {
            name?: number | undefined;
            body?: number | undefined;
            primaryHeading?: number | undefined;
            secondaryHeading?: number | undefined;
            sectionTitle?: number | undefined;
            minor?: number | undefined;
        }>>;
        textTransform: z.ZodDefault<z.ZodObject<{
            body: z.ZodDefault<z.ZodEnum<["none", "uppercase", "capitalize"]>>;
            name: z.ZodDefault<z.ZodEnum<["none", "uppercase", "capitalize"]>>;
            primaryHeading: z.ZodDefault<z.ZodEnum<["none", "uppercase", "capitalize"]>>;
            secondaryHeading: z.ZodDefault<z.ZodEnum<["none", "uppercase", "capitalize"]>>;
            sectionTitle: z.ZodDefault<z.ZodEnum<["none", "uppercase", "capitalize"]>>;
            minor: z.ZodDefault<z.ZodEnum<["none", "uppercase", "capitalize"]>>;
        }, "strip", z.ZodTypeAny, {
            name: "none" | "uppercase" | "capitalize";
            body: "none" | "uppercase" | "capitalize";
            primaryHeading: "none" | "uppercase" | "capitalize";
            secondaryHeading: "none" | "uppercase" | "capitalize";
            sectionTitle: "none" | "uppercase" | "capitalize";
            minor: "none" | "uppercase" | "capitalize";
        }, {
            name?: "none" | "uppercase" | "capitalize" | undefined;
            body?: "none" | "uppercase" | "capitalize" | undefined;
            primaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
            secondaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
            sectionTitle?: "none" | "uppercase" | "capitalize" | undefined;
            minor?: "none" | "uppercase" | "capitalize" | undefined;
        }>>;
        /** Spacing in px. */
        spacing: z.ZodDefault<z.ZodObject<{
            betweenSections: z.ZodDefault<z.ZodNumber>;
            titleToContent: z.ZodDefault<z.ZodNumber>;
            headingToSubheading: z.ZodDefault<z.ZodNumber>;
            betweenBlocks: z.ZodDefault<z.ZodNumber>;
            betweenListItems: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            betweenSections: number;
            titleToContent: number;
            headingToSubheading: number;
            betweenBlocks: number;
            betweenListItems: number;
        }, {
            betweenSections?: number | undefined;
            titleToContent?: number | undefined;
            headingToSubheading?: number | undefined;
            betweenBlocks?: number | undefined;
            betweenListItems?: number | undefined;
        }>>;
        /** Border widths in px (0 = none). */
        borders: z.ZodDefault<z.ZodObject<{
            aboveHeader: z.ZodDefault<z.ZodNumber>;
            belowHeader: z.ZodDefault<z.ZodNumber>;
            sectionTitles: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            aboveHeader: number;
            belowHeader: number;
            sectionTitles: number;
        }, {
            aboveHeader?: number | undefined;
            belowHeader?: number | undefined;
            sectionTitles?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        bullets: "circle" | "dash" | "chevron" | "arrow" | "comma" | "line";
        fontWeight: {
            name: number;
            body: number;
            primaryHeading: number;
            secondaryHeading: number;
            sectionTitle: number;
            minor: number;
        };
        fontScale: {
            name: number;
            body: number;
            primaryHeading: number;
            secondaryHeading: number;
            sectionTitle: number;
            minor: number;
        };
        textTransform: {
            name: "none" | "uppercase" | "capitalize";
            body: "none" | "uppercase" | "capitalize";
            primaryHeading: "none" | "uppercase" | "capitalize";
            secondaryHeading: "none" | "uppercase" | "capitalize";
            sectionTitle: "none" | "uppercase" | "capitalize";
            minor: "none" | "uppercase" | "capitalize";
        };
        spacing: {
            betweenSections: number;
            titleToContent: number;
            headingToSubheading: number;
            betweenBlocks: number;
            betweenListItems: number;
        };
        borders: {
            aboveHeader: number;
            belowHeader: number;
            sectionTitles: number;
        };
    }, {
        bullets?: "circle" | "dash" | "chevron" | "arrow" | "comma" | "line" | undefined;
        fontWeight?: {
            name?: number | undefined;
            body?: number | undefined;
            primaryHeading?: number | undefined;
            secondaryHeading?: number | undefined;
            sectionTitle?: number | undefined;
            minor?: number | undefined;
        } | undefined;
        fontScale?: {
            name?: number | undefined;
            body?: number | undefined;
            primaryHeading?: number | undefined;
            secondaryHeading?: number | undefined;
            sectionTitle?: number | undefined;
            minor?: number | undefined;
        } | undefined;
        textTransform?: {
            name?: "none" | "uppercase" | "capitalize" | undefined;
            body?: "none" | "uppercase" | "capitalize" | undefined;
            primaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
            secondaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
            sectionTitle?: "none" | "uppercase" | "capitalize" | undefined;
            minor?: "none" | "uppercase" | "capitalize" | undefined;
        } | undefined;
        spacing?: {
            betweenSections?: number | undefined;
            titleToContent?: number | undefined;
            headingToSubheading?: number | undefined;
            betweenBlocks?: number | undefined;
            betweenListItems?: number | undefined;
        } | undefined;
        borders?: {
            aboveHeader?: number | undefined;
            belowHeader?: number | undefined;
            sectionTitles?: number | undefined;
        } | undefined;
    }>>;
    notes: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    template: string;
    layout: string[][][];
    css: {
        value: string;
        visible: boolean;
    };
    page: {
        options: {
            breakLine: boolean;
            pageNumbers: boolean;
        };
        margin: number;
        marginLeft: number;
        marginRight: number;
        format: "a4" | "letter" | "legal";
    };
    theme: {
        background: string;
        text: string;
        primary: string;
    };
    typography: {
        font: {
            size: number;
            family: string;
            subset: string;
            variants: string[];
        };
        lineHeight: number;
        listLineHeight: number;
        hideIcons: boolean;
        underlineLinks: boolean;
    };
    presentation: {
        dateFormat: "mm/yyyy" | "mmm yyyy" | "month yyyy" | "yyyy";
        headerAlignment: "left" | "center" | "right";
        dateAlignment: "left" | "right";
        locationAlignment: "left" | "right";
        skillsLayout: "comma-separated" | "comma-separated-list" | "columns";
        skillsColumns: number;
    };
    display: {
        experience: {
            location: "company" | "position" | "none";
            primary: "company" | "position";
            dates: "company" | "position" | "both";
        };
        education: {
            primary: "institution" | "degree";
        };
    };
    advanced: {
        bullets: "circle" | "dash" | "chevron" | "arrow" | "comma" | "line";
        fontWeight: {
            name: number;
            body: number;
            primaryHeading: number;
            secondaryHeading: number;
            sectionTitle: number;
            minor: number;
        };
        fontScale: {
            name: number;
            body: number;
            primaryHeading: number;
            secondaryHeading: number;
            sectionTitle: number;
            minor: number;
        };
        textTransform: {
            name: "none" | "uppercase" | "capitalize";
            body: "none" | "uppercase" | "capitalize";
            primaryHeading: "none" | "uppercase" | "capitalize";
            secondaryHeading: "none" | "uppercase" | "capitalize";
            sectionTitle: "none" | "uppercase" | "capitalize";
            minor: "none" | "uppercase" | "capitalize";
        };
        spacing: {
            betweenSections: number;
            titleToContent: number;
            headingToSubheading: number;
            betweenBlocks: number;
            betweenListItems: number;
        };
        borders: {
            aboveHeader: number;
            belowHeader: number;
            sectionTitles: number;
        };
    };
    notes: string;
}, {
    template?: string | undefined;
    layout?: string[][][] | undefined;
    css?: {
        value?: string | undefined;
        visible?: boolean | undefined;
    } | undefined;
    page?: {
        options?: {
            breakLine?: boolean | undefined;
            pageNumbers?: boolean | undefined;
        } | undefined;
        margin?: number | undefined;
        marginLeft?: number | undefined;
        marginRight?: number | undefined;
        format?: "a4" | "letter" | "legal" | undefined;
    } | undefined;
    theme?: {
        background?: string | undefined;
        text?: string | undefined;
        primary?: string | undefined;
    } | undefined;
    typography?: {
        font?: {
            size?: number | undefined;
            family?: string | undefined;
            subset?: string | undefined;
            variants?: string[] | undefined;
        } | undefined;
        lineHeight?: number | undefined;
        listLineHeight?: number | undefined;
        hideIcons?: boolean | undefined;
        underlineLinks?: boolean | undefined;
    } | undefined;
    presentation?: {
        dateFormat?: "mm/yyyy" | "mmm yyyy" | "month yyyy" | "yyyy" | undefined;
        headerAlignment?: "left" | "center" | "right" | undefined;
        dateAlignment?: "left" | "right" | undefined;
        locationAlignment?: "left" | "right" | undefined;
        skillsLayout?: "comma-separated" | "comma-separated-list" | "columns" | undefined;
        skillsColumns?: number | undefined;
    } | undefined;
    display?: {
        experience?: {
            location?: "company" | "position" | "none" | undefined;
            primary?: "company" | "position" | undefined;
            dates?: "company" | "position" | "both" | undefined;
        } | undefined;
        education?: {
            primary?: "institution" | "degree" | undefined;
        } | undefined;
    } | undefined;
    advanced?: {
        bullets?: "circle" | "dash" | "chevron" | "arrow" | "comma" | "line" | undefined;
        fontWeight?: {
            name?: number | undefined;
            body?: number | undefined;
            primaryHeading?: number | undefined;
            secondaryHeading?: number | undefined;
            sectionTitle?: number | undefined;
            minor?: number | undefined;
        } | undefined;
        fontScale?: {
            name?: number | undefined;
            body?: number | undefined;
            primaryHeading?: number | undefined;
            secondaryHeading?: number | undefined;
            sectionTitle?: number | undefined;
            minor?: number | undefined;
        } | undefined;
        textTransform?: {
            name?: "none" | "uppercase" | "capitalize" | undefined;
            body?: "none" | "uppercase" | "capitalize" | undefined;
            primaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
            secondaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
            sectionTitle?: "none" | "uppercase" | "capitalize" | undefined;
            minor?: "none" | "uppercase" | "capitalize" | undefined;
        } | undefined;
        spacing?: {
            betweenSections?: number | undefined;
            titleToContent?: number | undefined;
            headingToSubheading?: number | undefined;
            betweenBlocks?: number | undefined;
            betweenListItems?: number | undefined;
        } | undefined;
        borders?: {
            aboveHeader?: number | undefined;
            belowHeader?: number | undefined;
            sectionTitles?: number | undefined;
        } | undefined;
    } | undefined;
    notes?: string | undefined;
}>;
type Metadata = z.infer<typeof metadataSchema>;
declare const defaultMetadata: Metadata;

declare const sampleResume: ResumeData;

declare const awardSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
} & {
    title: z.ZodString;
    awarder: z.ZodString;
    date: z.ZodString;
    summary: z.ZodString;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
    }, {
        label: string;
        href: string;
    }>;
}, "strip", z.ZodTypeAny, {
    date: string;
    id: string;
    visible: boolean;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    title: string;
    awarder: string;
}, {
    date: string;
    visible: boolean;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    title: string;
    awarder: string;
    id?: string | undefined;
}>;
type Award = z.infer<typeof awardSchema>;
declare const defaultAward: Award;

declare const certificationSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
} & {
    name: z.ZodString;
    issuer: z.ZodString;
    date: z.ZodString;
    summary: z.ZodString;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
    }, {
        label: string;
        href: string;
    }>;
}, "strip", z.ZodTypeAny, {
    date: string;
    id: string;
    visible: boolean;
    name: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    issuer: string;
}, {
    date: string;
    visible: boolean;
    name: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    issuer: string;
    id?: string | undefined;
}>;
type Certification = z.infer<typeof certificationSchema>;
declare const defaultCertification: Certification;

declare const customSectionSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
} & {
    name: z.ZodString;
    description: z.ZodString;
    date: z.ZodString;
    location: z.ZodString;
    summary: z.ZodString;
    keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
    }, {
        label: string;
        href: string;
    }>;
}, "strip", z.ZodTypeAny, {
    date: string;
    id: string;
    visible: boolean;
    name: string;
    location: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    description: string;
    keywords: string[];
}, {
    date: string;
    visible: boolean;
    name: string;
    location: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    description: string;
    id?: string | undefined;
    keywords?: string[] | undefined;
}>;
type CustomSection = z.infer<typeof customSectionSchema>;
declare const defaultCustomSection: CustomSection;

declare const educationSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
} & {
    institution: z.ZodString;
    studyType: z.ZodString;
    area: z.ZodString;
    score: z.ZodString;
    /** Added in v1.2.0; older items get "" */
    location: z.ZodDefault<z.ZodString>;
    date: z.ZodString;
    summary: z.ZodString;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
    }, {
        label: string;
        href: string;
    }>;
}, "strip", z.ZodTypeAny, {
    date: string;
    id: string;
    visible: boolean;
    location: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    institution: string;
    studyType: string;
    area: string;
    score: string;
}, {
    date: string;
    visible: boolean;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    institution: string;
    studyType: string;
    area: string;
    score: string;
    id?: string | undefined;
    location?: string | undefined;
}>;
type Education = z.infer<typeof educationSchema>;
declare const defaultEducation: Education;

declare const experienceSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
} & {
    company: z.ZodString;
    position: z.ZodString;
    location: z.ZodString;
    date: z.ZodString;
    summary: z.ZodString;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
    }, {
        label: string;
        href: string;
    }>;
}, "strip", z.ZodTypeAny, {
    date: string;
    id: string;
    visible: boolean;
    location: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    company: string;
    position: string;
}, {
    date: string;
    visible: boolean;
    location: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    company: string;
    position: string;
    id?: string | undefined;
}>;
type Experience = z.infer<typeof experienceSchema>;
declare const defaultExperience: Experience;

declare const interestSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
} & {
    name: z.ZodString;
    keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    visible: boolean;
    name: string;
    keywords: string[];
}, {
    visible: boolean;
    name: string;
    id?: string | undefined;
    keywords?: string[] | undefined;
}>;
type Interest = z.infer<typeof interestSchema>;
declare const defaultInterest: Interest;

declare const languageSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
} & {
    name: z.ZodString;
    description: z.ZodString;
    level: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    visible: boolean;
    name: string;
    description: string;
    level: number;
}, {
    visible: boolean;
    name: string;
    description: string;
    id?: string | undefined;
    level?: number | undefined;
}>;
type Language = z.infer<typeof languageSchema>;
declare const defaultLanguage: Language;

declare const profileSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
} & {
    network: z.ZodString;
    username: z.ZodString;
    icon: z.ZodString;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
    }, {
        label: string;
        href: string;
    }>;
}, "strip", z.ZodTypeAny, {
    id: string;
    visible: boolean;
    icon: string;
    url: {
        label: string;
        href: string;
    };
    network: string;
    username: string;
}, {
    visible: boolean;
    icon: string;
    url: {
        label: string;
        href: string;
    };
    network: string;
    username: string;
    id?: string | undefined;
}>;
type Profile = z.infer<typeof profileSchema>;
declare const defaultProfile: Profile;

declare const projectSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
} & {
    name: z.ZodString;
    description: z.ZodString;
    date: z.ZodString;
    summary: z.ZodString;
    keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
    }, {
        label: string;
        href: string;
    }>;
}, "strip", z.ZodTypeAny, {
    date: string;
    id: string;
    visible: boolean;
    name: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    description: string;
    keywords: string[];
}, {
    date: string;
    visible: boolean;
    name: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    description: string;
    id?: string | undefined;
    keywords?: string[] | undefined;
}>;
type Project = z.infer<typeof projectSchema>;
declare const defaultProject: Project;

declare const publicationSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
} & {
    name: z.ZodString;
    publisher: z.ZodString;
    date: z.ZodString;
    summary: z.ZodString;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
    }, {
        label: string;
        href: string;
    }>;
}, "strip", z.ZodTypeAny, {
    date: string;
    id: string;
    visible: boolean;
    name: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    publisher: string;
}, {
    date: string;
    visible: boolean;
    name: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    publisher: string;
    id?: string | undefined;
}>;
type Publication = z.infer<typeof publicationSchema>;
declare const defaultPublication: Publication;

declare const referenceSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
} & {
    name: z.ZodString;
    description: z.ZodString;
    summary: z.ZodString;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
    }, {
        label: string;
        href: string;
    }>;
}, "strip", z.ZodTypeAny, {
    id: string;
    visible: boolean;
    name: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    description: string;
}, {
    visible: boolean;
    name: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    description: string;
    id?: string | undefined;
}>;
type Reference = z.infer<typeof referenceSchema>;
declare const defaultReference: Reference;

declare const skillSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
} & {
    name: z.ZodString;
    description: z.ZodString;
    level: z.ZodDefault<z.ZodNumber>;
    keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    visible: boolean;
    name: string;
    description: string;
    keywords: string[];
    level: number;
}, {
    visible: boolean;
    name: string;
    description: string;
    id?: string | undefined;
    keywords?: string[] | undefined;
    level?: number | undefined;
}>;
type Skill = z.infer<typeof skillSchema>;
declare const defaultSkill: Skill;

declare const volunteerSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
} & {
    organization: z.ZodString;
    position: z.ZodString;
    location: z.ZodString;
    date: z.ZodString;
    summary: z.ZodString;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
    }, {
        label: string;
        href: string;
    }>;
}, "strip", z.ZodTypeAny, {
    date: string;
    id: string;
    visible: boolean;
    location: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    position: string;
    organization: string;
}, {
    date: string;
    visible: boolean;
    location: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    position: string;
    organization: string;
    id?: string | undefined;
}>;
type Volunteer = z.infer<typeof volunteerSchema>;
declare const defaultVolunteer: Volunteer;

declare const sectionSchema: z.ZodObject<{
    name: z.ZodString;
    columns: z.ZodDefault<z.ZodNumber>;
    separateLinks: z.ZodDefault<z.ZodBoolean>;
    visible: z.ZodDefault<z.ZodBoolean>;
    layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
    layoutSetting: z.ZodDefault<z.ZodObject<{
        visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
    }, "strip", z.ZodTypeAny, {
        visibleType: "default" | "list";
    }, {
        visibleType?: "default" | "list" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    visible: boolean;
    name: string;
    columns: number;
    separateLinks: boolean;
    layoutSystem: "grid" | "flex";
    layoutSetting: {
        visibleType: "default" | "list";
    };
}, {
    name: string;
    visible?: boolean | undefined;
    columns?: number | undefined;
    separateLinks?: boolean | undefined;
    layoutSystem?: "grid" | "flex" | undefined;
    layoutSetting?: {
        visibleType?: "default" | "list" | undefined;
    } | undefined;
}>;
declare const customSchema: z.ZodObject<{
    name: z.ZodString;
    columns: z.ZodDefault<z.ZodNumber>;
    separateLinks: z.ZodDefault<z.ZodBoolean>;
    visible: z.ZodDefault<z.ZodBoolean>;
    layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
    layoutSetting: z.ZodDefault<z.ZodObject<{
        visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
    }, "strip", z.ZodTypeAny, {
        visibleType: "default" | "list";
    }, {
        visibleType?: "default" | "list" | undefined;
    }>>;
} & {
    id: z.ZodDefault<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodDefault<z.ZodString>;
        visible: z.ZodBoolean;
    } & {
        name: z.ZodString;
        description: z.ZodString;
        date: z.ZodString;
        location: z.ZodString;
        summary: z.ZodString;
        keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        url: z.ZodObject<{
            label: z.ZodString;
            href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            href: string;
        }, {
            label: string;
            href: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        date: string;
        id: string;
        visible: boolean;
        name: string;
        location: string;
        url: {
            label: string;
            href: string;
        };
        summary: string;
        description: string;
        keywords: string[];
    }, {
        date: string;
        visible: boolean;
        name: string;
        location: string;
        url: {
            label: string;
            href: string;
        };
        summary: string;
        description: string;
        id?: string | undefined;
        keywords?: string[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    visible: boolean;
    name: string;
    columns: number;
    separateLinks: boolean;
    layoutSystem: "grid" | "flex";
    layoutSetting: {
        visibleType: "default" | "list";
    };
    items: {
        date: string;
        id: string;
        visible: boolean;
        name: string;
        location: string;
        url: {
            label: string;
            href: string;
        };
        summary: string;
        description: string;
        keywords: string[];
    }[];
}, {
    name: string;
    items: {
        date: string;
        visible: boolean;
        name: string;
        location: string;
        url: {
            label: string;
            href: string;
        };
        summary: string;
        description: string;
        id?: string | undefined;
        keywords?: string[] | undefined;
    }[];
    id?: string | undefined;
    visible?: boolean | undefined;
    columns?: number | undefined;
    separateLinks?: boolean | undefined;
    layoutSystem?: "grid" | "flex" | undefined;
    layoutSetting?: {
        visibleType?: "default" | "list" | undefined;
    } | undefined;
}>;
declare const sectionsSchema: z.ZodObject<{
    summary: z.ZodObject<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodLiteral<"summary">;
        content: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: "summary";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        content: string;
    }, {
        id: "summary";
        name: string;
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
        content?: string | undefined;
    }>;
    awards: z.ZodObject<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodLiteral<"awards">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        } & {
            title: z.ZodString;
            awarder: z.ZodString;
            date: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            date: string;
            id: string;
            visible: boolean;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            title: string;
            awarder: string;
        }, {
            date: string;
            visible: boolean;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            title: string;
            awarder: string;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: "awards";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            title: string;
            awarder: string;
        }[];
    }, {
        id: "awards";
        name: string;
        items: {
            date: string;
            visible: boolean;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            title: string;
            awarder: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }>;
    certifications: z.ZodObject<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodLiteral<"certifications">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        } & {
            name: z.ZodString;
            issuer: z.ZodString;
            date: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            date: string;
            id: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            issuer: string;
        }, {
            date: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            issuer: string;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: "certifications";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            issuer: string;
        }[];
    }, {
        id: "certifications";
        name: string;
        items: {
            date: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            issuer: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }>;
    education: z.ZodObject<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodLiteral<"education">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        } & {
            institution: z.ZodString;
            studyType: z.ZodString;
            area: z.ZodString;
            score: z.ZodString;
            location: z.ZodDefault<z.ZodString>;
            date: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            date: string;
            id: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            institution: string;
            studyType: string;
            area: string;
            score: string;
        }, {
            date: string;
            visible: boolean;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            institution: string;
            studyType: string;
            area: string;
            score: string;
            id?: string | undefined;
            location?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: "education";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            institution: string;
            studyType: string;
            area: string;
            score: string;
        }[];
    }, {
        id: "education";
        name: string;
        items: {
            date: string;
            visible: boolean;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            institution: string;
            studyType: string;
            area: string;
            score: string;
            id?: string | undefined;
            location?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }>;
    experience: z.ZodObject<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodLiteral<"experience">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        } & {
            company: z.ZodString;
            position: z.ZodString;
            location: z.ZodString;
            date: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            date: string;
            id: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            company: string;
            position: string;
        }, {
            date: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            company: string;
            position: string;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: "experience";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            company: string;
            position: string;
        }[];
    }, {
        id: "experience";
        name: string;
        items: {
            date: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            company: string;
            position: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }>;
    volunteer: z.ZodObject<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodLiteral<"volunteer">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        } & {
            organization: z.ZodString;
            position: z.ZodString;
            location: z.ZodString;
            date: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            date: string;
            id: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            position: string;
            organization: string;
        }, {
            date: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            position: string;
            organization: string;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: "volunteer";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            position: string;
            organization: string;
        }[];
    }, {
        id: "volunteer";
        name: string;
        items: {
            date: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            position: string;
            organization: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }>;
    interests: z.ZodObject<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodLiteral<"interests">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        } & {
            name: z.ZodString;
            keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            visible: boolean;
            name: string;
            keywords: string[];
        }, {
            visible: boolean;
            name: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: "interests";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            id: string;
            visible: boolean;
            name: string;
            keywords: string[];
        }[];
    }, {
        id: "interests";
        name: string;
        items: {
            visible: boolean;
            name: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }>;
    languages: z.ZodObject<{
        name: z.ZodString;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodLiteral<"languages">;
        columns: z.ZodDefault<z.ZodNumber>;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        } & {
            name: z.ZodString;
            description: z.ZodString;
            level: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            visible: boolean;
            name: string;
            description: string;
            level: number;
        }, {
            visible: boolean;
            name: string;
            description: string;
            id?: string | undefined;
            level?: number | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: "languages";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            id: string;
            visible: boolean;
            name: string;
            description: string;
            level: number;
        }[];
    }, {
        id: "languages";
        name: string;
        items: {
            visible: boolean;
            name: string;
            description: string;
            id?: string | undefined;
            level?: number | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }>;
    profiles: z.ZodObject<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodLiteral<"profiles">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        } & {
            network: z.ZodString;
            username: z.ZodString;
            icon: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            visible: boolean;
            icon: string;
            url: {
                label: string;
                href: string;
            };
            network: string;
            username: string;
        }, {
            visible: boolean;
            icon: string;
            url: {
                label: string;
                href: string;
            };
            network: string;
            username: string;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: "profiles";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            id: string;
            visible: boolean;
            icon: string;
            url: {
                label: string;
                href: string;
            };
            network: string;
            username: string;
        }[];
    }, {
        id: "profiles";
        name: string;
        items: {
            visible: boolean;
            icon: string;
            url: {
                label: string;
                href: string;
            };
            network: string;
            username: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }>;
    projects: z.ZodObject<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodLiteral<"projects">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        } & {
            name: z.ZodString;
            description: z.ZodString;
            date: z.ZodString;
            summary: z.ZodString;
            keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            date: string;
            id: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            keywords: string[];
        }, {
            date: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: "projects";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            keywords: string[];
        }[];
    }, {
        id: "projects";
        name: string;
        items: {
            date: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }>;
    publications: z.ZodObject<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodLiteral<"publications">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        } & {
            name: z.ZodString;
            publisher: z.ZodString;
            date: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            date: string;
            id: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            publisher: string;
        }, {
            date: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            publisher: string;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: "publications";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            publisher: string;
        }[];
    }, {
        id: "publications";
        name: string;
        items: {
            date: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            publisher: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }>;
    references: z.ZodObject<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodLiteral<"references">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        } & {
            name: z.ZodString;
            description: z.ZodString;
            summary: z.ZodString;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
        }, {
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: "references";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            id: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
        }[];
    }, {
        id: "references";
        name: string;
        items: {
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }>;
    skills: z.ZodObject<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodLiteral<"skills">;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        } & {
            name: z.ZodString;
            description: z.ZodString;
            level: z.ZodDefault<z.ZodNumber>;
            keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            visible: boolean;
            name: string;
            description: string;
            keywords: string[];
            level: number;
        }, {
            visible: boolean;
            name: string;
            description: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
            level?: number | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: "skills";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            id: string;
            visible: boolean;
            name: string;
            description: string;
            keywords: string[];
            level: number;
        }[];
    }, {
        id: "skills";
        name: string;
        items: {
            visible: boolean;
            name: string;
            description: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
            level?: number | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }>;
    custom: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodObject<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
        layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
        layoutSetting: z.ZodDefault<z.ZodObject<{
            visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
        }, "strip", z.ZodTypeAny, {
            visibleType: "default" | "list";
        }, {
            visibleType?: "default" | "list" | undefined;
        }>>;
    } & {
        id: z.ZodDefault<z.ZodString>;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        } & {
            name: z.ZodString;
            description: z.ZodString;
            date: z.ZodString;
            location: z.ZodString;
            summary: z.ZodString;
            keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            url: z.ZodObject<{
                label: z.ZodString;
                href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                href: string;
            }, {
                label: string;
                href: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            date: string;
            id: string;
            visible: boolean;
            name: string;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            keywords: string[];
        }, {
            date: string;
            visible: boolean;
            name: string;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            name: string;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            keywords: string[];
        }[];
    }, {
        name: string;
        items: {
            date: string;
            visible: boolean;
            name: string;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }[];
        id?: string | undefined;
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    custom: Record<string, {
        id: string;
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            name: string;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            keywords: string[];
        }[];
    }>;
    profiles: {
        id: "profiles";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            id: string;
            visible: boolean;
            icon: string;
            url: {
                label: string;
                href: string;
            };
            network: string;
            username: string;
        }[];
    };
    summary: {
        id: "summary";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        content: string;
    };
    experience: {
        id: "experience";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            company: string;
            position: string;
        }[];
    };
    education: {
        id: "education";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            institution: string;
            studyType: string;
            area: string;
            score: string;
        }[];
    };
    projects: {
        id: "projects";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            keywords: string[];
        }[];
    };
    volunteer: {
        id: "volunteer";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            position: string;
            organization: string;
        }[];
    };
    references: {
        id: "references";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            id: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
        }[];
    };
    skills: {
        id: "skills";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            id: string;
            visible: boolean;
            name: string;
            description: string;
            keywords: string[];
            level: number;
        }[];
    };
    interests: {
        id: "interests";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            id: string;
            visible: boolean;
            name: string;
            keywords: string[];
        }[];
    };
    certifications: {
        id: "certifications";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            issuer: string;
        }[];
    };
    awards: {
        id: "awards";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            title: string;
            awarder: string;
        }[];
    };
    publications: {
        id: "publications";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            date: string;
            id: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            publisher: string;
        }[];
    };
    languages: {
        id: "languages";
        visible: boolean;
        name: string;
        columns: number;
        separateLinks: boolean;
        layoutSystem: "grid" | "flex";
        layoutSetting: {
            visibleType: "default" | "list";
        };
        items: {
            id: string;
            visible: boolean;
            name: string;
            description: string;
            level: number;
        }[];
    };
}, {
    profiles: {
        id: "profiles";
        name: string;
        items: {
            visible: boolean;
            icon: string;
            url: {
                label: string;
                href: string;
            };
            network: string;
            username: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    };
    summary: {
        id: "summary";
        name: string;
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
        content?: string | undefined;
    };
    experience: {
        id: "experience";
        name: string;
        items: {
            date: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            company: string;
            position: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    };
    education: {
        id: "education";
        name: string;
        items: {
            date: string;
            visible: boolean;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            institution: string;
            studyType: string;
            area: string;
            score: string;
            id?: string | undefined;
            location?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    };
    projects: {
        id: "projects";
        name: string;
        items: {
            date: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    };
    volunteer: {
        id: "volunteer";
        name: string;
        items: {
            date: string;
            visible: boolean;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            position: string;
            organization: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    };
    references: {
        id: "references";
        name: string;
        items: {
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    };
    skills: {
        id: "skills";
        name: string;
        items: {
            visible: boolean;
            name: string;
            description: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
            level?: number | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    };
    interests: {
        id: "interests";
        name: string;
        items: {
            visible: boolean;
            name: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    };
    certifications: {
        id: "certifications";
        name: string;
        items: {
            date: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            issuer: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    };
    awards: {
        id: "awards";
        name: string;
        items: {
            date: string;
            visible: boolean;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            title: string;
            awarder: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    };
    publications: {
        id: "publications";
        name: string;
        items: {
            date: string;
            visible: boolean;
            name: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            publisher: string;
            id?: string | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    };
    languages: {
        id: "languages";
        name: string;
        items: {
            visible: boolean;
            name: string;
            description: string;
            id?: string | undefined;
            level?: number | undefined;
        }[];
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    };
    custom?: Record<string, {
        name: string;
        items: {
            date: string;
            visible: boolean;
            name: string;
            location: string;
            url: {
                label: string;
                href: string;
            };
            summary: string;
            description: string;
            id?: string | undefined;
            keywords?: string[] | undefined;
        }[];
        id?: string | undefined;
        visible?: boolean | undefined;
        columns?: number | undefined;
        separateLinks?: boolean | undefined;
        layoutSystem?: "grid" | "flex" | undefined;
        layoutSetting?: {
            visibleType?: "default" | "list" | undefined;
        } | undefined;
    }> | undefined;
}>;
type Section = z.infer<typeof sectionSchema>;
type Sections = z.infer<typeof sectionsSchema>;
type SectionKey = "basics" | keyof Sections | `custom.${string}`;
type SectionWithItem<T = unknown> = Sections[FilterKeys<Sections, {
    items: T[];
}>];
type SectionItem = SectionWithItem["items"][number];
type CustomSectionGroup = z.infer<typeof customSchema>;
declare const defaultSection: Section;
declare const defaultSections: Sections;

declare const idSchema: z.ZodDefault<z.ZodString>;

declare const itemSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    visible: boolean;
}, {
    visible: boolean;
    id?: string | undefined;
}>;
type Item = z.infer<typeof itemSchema>;
declare const defaultItem: Item;

declare const urlSchema: z.ZodObject<{
    label: z.ZodString;
    href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    label: string;
    href: string;
}, {
    label: string;
    href: string;
}>;
type URL = z.infer<typeof urlSchema>;
declare const defaultUrl: URL;

declare const resumeDataSchema: z.ZodObject<{
    basics: z.ZodObject<{
        name: z.ZodString;
        headline: z.ZodString;
        email: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
        phone: z.ZodString;
        location: z.ZodString;
        url: z.ZodObject<{
            label: z.ZodString;
            href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            href: string;
        }, {
            label: string;
            href: string;
        }>;
        customFields: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            icon: z.ZodString;
            name: z.ZodString;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            id: string;
            icon: string;
            name: string;
        }, {
            value: string;
            id: string;
            icon: string;
            name: string;
        }>, "many">;
        picture: z.ZodObject<{
            url: z.ZodString;
            size: z.ZodDefault<z.ZodNumber>;
            aspectRatio: z.ZodDefault<z.ZodNumber>;
            borderRadius: z.ZodDefault<z.ZodNumber>;
            effects: z.ZodObject<{
                hidden: z.ZodDefault<z.ZodBoolean>;
                border: z.ZodDefault<z.ZodBoolean>;
                grayscale: z.ZodDefault<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                hidden: boolean;
                border: boolean;
                grayscale: boolean;
            }, {
                hidden?: boolean | undefined;
                border?: boolean | undefined;
                grayscale?: boolean | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            size: number;
            aspectRatio: number;
            borderRadius: number;
            effects: {
                hidden: boolean;
                border: boolean;
                grayscale: boolean;
            };
        }, {
            url: string;
            effects: {
                hidden?: boolean | undefined;
                border?: boolean | undefined;
                grayscale?: boolean | undefined;
            };
            size?: number | undefined;
            aspectRatio?: number | undefined;
            borderRadius?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        email: string;
        name: string;
        headline: string;
        phone: string;
        location: string;
        url: {
            label: string;
            href: string;
        };
        customFields: {
            value: string;
            id: string;
            icon: string;
            name: string;
        }[];
        picture: {
            url: string;
            size: number;
            aspectRatio: number;
            borderRadius: number;
            effects: {
                hidden: boolean;
                border: boolean;
                grayscale: boolean;
            };
        };
    }, {
        email: string;
        name: string;
        headline: string;
        phone: string;
        location: string;
        url: {
            label: string;
            href: string;
        };
        customFields: {
            value: string;
            id: string;
            icon: string;
            name: string;
        }[];
        picture: {
            url: string;
            effects: {
                hidden?: boolean | undefined;
                border?: boolean | undefined;
                grayscale?: boolean | undefined;
            };
            size?: number | undefined;
            aspectRatio?: number | undefined;
            borderRadius?: number | undefined;
        };
    }>;
    sections: z.ZodObject<{
        summary: z.ZodObject<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodLiteral<"summary">;
            content: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: "summary";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            content: string;
        }, {
            id: "summary";
            name: string;
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
            content?: string | undefined;
        }>;
        awards: z.ZodObject<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodLiteral<"awards">;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                visible: z.ZodBoolean;
            } & {
                title: z.ZodString;
                awarder: z.ZodString;
                date: z.ZodString;
                summary: z.ZodString;
                url: z.ZodObject<{
                    label: z.ZodString;
                    href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    href: string;
                }, {
                    label: string;
                    href: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                id: string;
                visible: boolean;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                title: string;
                awarder: string;
            }, {
                date: string;
                visible: boolean;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                title: string;
                awarder: string;
                id?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: "awards";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                title: string;
                awarder: string;
            }[];
        }, {
            id: "awards";
            name: string;
            items: {
                date: string;
                visible: boolean;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                title: string;
                awarder: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }>;
        certifications: z.ZodObject<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodLiteral<"certifications">;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                visible: z.ZodBoolean;
            } & {
                name: z.ZodString;
                issuer: z.ZodString;
                date: z.ZodString;
                summary: z.ZodString;
                url: z.ZodObject<{
                    label: z.ZodString;
                    href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    href: string;
                }, {
                    label: string;
                    href: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                issuer: string;
            }, {
                date: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                issuer: string;
                id?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: "certifications";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                issuer: string;
            }[];
        }, {
            id: "certifications";
            name: string;
            items: {
                date: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                issuer: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }>;
        education: z.ZodObject<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodLiteral<"education">;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                visible: z.ZodBoolean;
            } & {
                institution: z.ZodString;
                studyType: z.ZodString;
                area: z.ZodString;
                score: z.ZodString;
                location: z.ZodDefault<z.ZodString>;
                date: z.ZodString;
                summary: z.ZodString;
                url: z.ZodObject<{
                    label: z.ZodString;
                    href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    href: string;
                }, {
                    label: string;
                    href: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                id: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                institution: string;
                studyType: string;
                area: string;
                score: string;
            }, {
                date: string;
                visible: boolean;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                institution: string;
                studyType: string;
                area: string;
                score: string;
                id?: string | undefined;
                location?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: "education";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                institution: string;
                studyType: string;
                area: string;
                score: string;
            }[];
        }, {
            id: "education";
            name: string;
            items: {
                date: string;
                visible: boolean;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                institution: string;
                studyType: string;
                area: string;
                score: string;
                id?: string | undefined;
                location?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }>;
        experience: z.ZodObject<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodLiteral<"experience">;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                visible: z.ZodBoolean;
            } & {
                company: z.ZodString;
                position: z.ZodString;
                location: z.ZodString;
                date: z.ZodString;
                summary: z.ZodString;
                url: z.ZodObject<{
                    label: z.ZodString;
                    href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    href: string;
                }, {
                    label: string;
                    href: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                id: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                company: string;
                position: string;
            }, {
                date: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                company: string;
                position: string;
                id?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: "experience";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                company: string;
                position: string;
            }[];
        }, {
            id: "experience";
            name: string;
            items: {
                date: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                company: string;
                position: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }>;
        volunteer: z.ZodObject<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodLiteral<"volunteer">;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                visible: z.ZodBoolean;
            } & {
                organization: z.ZodString;
                position: z.ZodString;
                location: z.ZodString;
                date: z.ZodString;
                summary: z.ZodString;
                url: z.ZodObject<{
                    label: z.ZodString;
                    href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    href: string;
                }, {
                    label: string;
                    href: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                id: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                position: string;
                organization: string;
            }, {
                date: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                position: string;
                organization: string;
                id?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: "volunteer";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                position: string;
                organization: string;
            }[];
        }, {
            id: "volunteer";
            name: string;
            items: {
                date: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                position: string;
                organization: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }>;
        interests: z.ZodObject<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodLiteral<"interests">;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                visible: z.ZodBoolean;
            } & {
                name: z.ZodString;
                keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                visible: boolean;
                name: string;
                keywords: string[];
            }, {
                visible: boolean;
                name: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: "interests";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                name: string;
                keywords: string[];
            }[];
        }, {
            id: "interests";
            name: string;
            items: {
                visible: boolean;
                name: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }>;
        languages: z.ZodObject<{
            name: z.ZodString;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodLiteral<"languages">;
            columns: z.ZodDefault<z.ZodNumber>;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                visible: z.ZodBoolean;
            } & {
                name: z.ZodString;
                description: z.ZodString;
                level: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                visible: boolean;
                name: string;
                description: string;
                level: number;
            }, {
                visible: boolean;
                name: string;
                description: string;
                id?: string | undefined;
                level?: number | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: "languages";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                name: string;
                description: string;
                level: number;
            }[];
        }, {
            id: "languages";
            name: string;
            items: {
                visible: boolean;
                name: string;
                description: string;
                id?: string | undefined;
                level?: number | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }>;
        profiles: z.ZodObject<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodLiteral<"profiles">;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                visible: z.ZodBoolean;
            } & {
                network: z.ZodString;
                username: z.ZodString;
                icon: z.ZodString;
                url: z.ZodObject<{
                    label: z.ZodString;
                    href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    href: string;
                }, {
                    label: string;
                    href: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                visible: boolean;
                icon: string;
                url: {
                    label: string;
                    href: string;
                };
                network: string;
                username: string;
            }, {
                visible: boolean;
                icon: string;
                url: {
                    label: string;
                    href: string;
                };
                network: string;
                username: string;
                id?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: "profiles";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                icon: string;
                url: {
                    label: string;
                    href: string;
                };
                network: string;
                username: string;
            }[];
        }, {
            id: "profiles";
            name: string;
            items: {
                visible: boolean;
                icon: string;
                url: {
                    label: string;
                    href: string;
                };
                network: string;
                username: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }>;
        projects: z.ZodObject<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodLiteral<"projects">;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                visible: z.ZodBoolean;
            } & {
                name: z.ZodString;
                description: z.ZodString;
                date: z.ZodString;
                summary: z.ZodString;
                keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                url: z.ZodObject<{
                    label: z.ZodString;
                    href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    href: string;
                }, {
                    label: string;
                    href: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                keywords: string[];
            }, {
                date: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: "projects";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                keywords: string[];
            }[];
        }, {
            id: "projects";
            name: string;
            items: {
                date: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }>;
        publications: z.ZodObject<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodLiteral<"publications">;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                visible: z.ZodBoolean;
            } & {
                name: z.ZodString;
                publisher: z.ZodString;
                date: z.ZodString;
                summary: z.ZodString;
                url: z.ZodObject<{
                    label: z.ZodString;
                    href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    href: string;
                }, {
                    label: string;
                    href: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                publisher: string;
            }, {
                date: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                publisher: string;
                id?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: "publications";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                publisher: string;
            }[];
        }, {
            id: "publications";
            name: string;
            items: {
                date: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                publisher: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }>;
        references: z.ZodObject<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodLiteral<"references">;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                visible: z.ZodBoolean;
            } & {
                name: z.ZodString;
                description: z.ZodString;
                summary: z.ZodString;
                url: z.ZodObject<{
                    label: z.ZodString;
                    href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    href: string;
                }, {
                    label: string;
                    href: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
            }, {
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                id?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: "references";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
            }[];
        }, {
            id: "references";
            name: string;
            items: {
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }>;
        skills: z.ZodObject<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodLiteral<"skills">;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                visible: z.ZodBoolean;
            } & {
                name: z.ZodString;
                description: z.ZodString;
                level: z.ZodDefault<z.ZodNumber>;
                keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                visible: boolean;
                name: string;
                description: string;
                keywords: string[];
                level: number;
            }, {
                visible: boolean;
                name: string;
                description: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
                level?: number | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: "skills";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                name: string;
                description: string;
                keywords: string[];
                level: number;
            }[];
        }, {
            id: "skills";
            name: string;
            items: {
                visible: boolean;
                name: string;
                description: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
                level?: number | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }>;
        custom: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodObject<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
            layoutSystem: z.ZodDefault<z.ZodEnum<["grid", "flex"]>>;
            layoutSetting: z.ZodDefault<z.ZodObject<{
                visibleType: z.ZodDefault<z.ZodEnum<["default", "list"]>>;
            }, "strip", z.ZodTypeAny, {
                visibleType: "default" | "list";
            }, {
                visibleType?: "default" | "list" | undefined;
            }>>;
        } & {
            id: z.ZodDefault<z.ZodString>;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                visible: z.ZodBoolean;
            } & {
                name: z.ZodString;
                description: z.ZodString;
                date: z.ZodString;
                location: z.ZodString;
                summary: z.ZodString;
                keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                url: z.ZodObject<{
                    label: z.ZodString;
                    href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    href: string;
                }, {
                    label: string;
                    href: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                keywords: string[];
            }, {
                date: string;
                visible: boolean;
                name: string;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: string;
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                keywords: string[];
            }[];
        }, {
            name: string;
            items: {
                date: string;
                visible: boolean;
                name: string;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
            }[];
            id?: string | undefined;
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        custom: Record<string, {
            id: string;
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                keywords: string[];
            }[];
        }>;
        profiles: {
            id: "profiles";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                icon: string;
                url: {
                    label: string;
                    href: string;
                };
                network: string;
                username: string;
            }[];
        };
        summary: {
            id: "summary";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            content: string;
        };
        experience: {
            id: "experience";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                company: string;
                position: string;
            }[];
        };
        education: {
            id: "education";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                institution: string;
                studyType: string;
                area: string;
                score: string;
            }[];
        };
        projects: {
            id: "projects";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                keywords: string[];
            }[];
        };
        volunteer: {
            id: "volunteer";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                position: string;
                organization: string;
            }[];
        };
        references: {
            id: "references";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
            }[];
        };
        skills: {
            id: "skills";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                name: string;
                description: string;
                keywords: string[];
                level: number;
            }[];
        };
        interests: {
            id: "interests";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                name: string;
                keywords: string[];
            }[];
        };
        certifications: {
            id: "certifications";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                issuer: string;
            }[];
        };
        awards: {
            id: "awards";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                title: string;
                awarder: string;
            }[];
        };
        publications: {
            id: "publications";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                publisher: string;
            }[];
        };
        languages: {
            id: "languages";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                name: string;
                description: string;
                level: number;
            }[];
        };
    }, {
        profiles: {
            id: "profiles";
            name: string;
            items: {
                visible: boolean;
                icon: string;
                url: {
                    label: string;
                    href: string;
                };
                network: string;
                username: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        summary: {
            id: "summary";
            name: string;
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
            content?: string | undefined;
        };
        experience: {
            id: "experience";
            name: string;
            items: {
                date: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                company: string;
                position: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        education: {
            id: "education";
            name: string;
            items: {
                date: string;
                visible: boolean;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                institution: string;
                studyType: string;
                area: string;
                score: string;
                id?: string | undefined;
                location?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        projects: {
            id: "projects";
            name: string;
            items: {
                date: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        volunteer: {
            id: "volunteer";
            name: string;
            items: {
                date: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                position: string;
                organization: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        references: {
            id: "references";
            name: string;
            items: {
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        skills: {
            id: "skills";
            name: string;
            items: {
                visible: boolean;
                name: string;
                description: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
                level?: number | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        interests: {
            id: "interests";
            name: string;
            items: {
                visible: boolean;
                name: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        certifications: {
            id: "certifications";
            name: string;
            items: {
                date: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                issuer: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        awards: {
            id: "awards";
            name: string;
            items: {
                date: string;
                visible: boolean;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                title: string;
                awarder: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        publications: {
            id: "publications";
            name: string;
            items: {
                date: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                publisher: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        languages: {
            id: "languages";
            name: string;
            items: {
                visible: boolean;
                name: string;
                description: string;
                id?: string | undefined;
                level?: number | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        custom?: Record<string, {
            name: string;
            items: {
                date: string;
                visible: boolean;
                name: string;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
            }[];
            id?: string | undefined;
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }> | undefined;
    }>;
    metadata: z.ZodObject<{
        template: z.ZodDefault<z.ZodString>;
        layout: z.ZodDefault<z.ZodArray<z.ZodArray<z.ZodArray<z.ZodString, "many">, "many">, "many">>;
        css: z.ZodDefault<z.ZodObject<{
            value: z.ZodDefault<z.ZodString>;
            visible: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            visible: boolean;
        }, {
            value?: string | undefined;
            visible?: boolean | undefined;
        }>>;
        page: z.ZodDefault<z.ZodObject<{
            margin: z.ZodDefault<z.ZodNumber>;
            marginLeft: z.ZodDefault<z.ZodNumber>;
            marginRight: z.ZodDefault<z.ZodNumber>;
            format: z.ZodDefault<z.ZodEnum<["a4", "letter", "legal"]>>;
            options: z.ZodDefault<z.ZodObject<{
                breakLine: z.ZodDefault<z.ZodBoolean>;
                pageNumbers: z.ZodDefault<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                breakLine: boolean;
                pageNumbers: boolean;
            }, {
                breakLine?: boolean | undefined;
                pageNumbers?: boolean | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            options: {
                breakLine: boolean;
                pageNumbers: boolean;
            };
            margin: number;
            marginLeft: number;
            marginRight: number;
            format: "a4" | "letter" | "legal";
        }, {
            options?: {
                breakLine?: boolean | undefined;
                pageNumbers?: boolean | undefined;
            } | undefined;
            margin?: number | undefined;
            marginLeft?: number | undefined;
            marginRight?: number | undefined;
            format?: "a4" | "letter" | "legal" | undefined;
        }>>;
        theme: z.ZodDefault<z.ZodObject<{
            background: z.ZodDefault<z.ZodString>;
            text: z.ZodDefault<z.ZodString>;
            primary: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            background: string;
            text: string;
            primary: string;
        }, {
            background?: string | undefined;
            text?: string | undefined;
            primary?: string | undefined;
        }>>;
        typography: z.ZodDefault<z.ZodObject<{
            font: z.ZodDefault<z.ZodObject<{
                family: z.ZodDefault<z.ZodString>;
                subset: z.ZodDefault<z.ZodString>;
                variants: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                size: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                size: number;
                family: string;
                subset: string;
                variants: string[];
            }, {
                size?: number | undefined;
                family?: string | undefined;
                subset?: string | undefined;
                variants?: string[] | undefined;
            }>>;
            lineHeight: z.ZodDefault<z.ZodNumber>;
            listLineHeight: z.ZodDefault<z.ZodNumber>;
            hideIcons: z.ZodDefault<z.ZodBoolean>;
            underlineLinks: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            font: {
                size: number;
                family: string;
                subset: string;
                variants: string[];
            };
            lineHeight: number;
            listLineHeight: number;
            hideIcons: boolean;
            underlineLinks: boolean;
        }, {
            font?: {
                size?: number | undefined;
                family?: string | undefined;
                subset?: string | undefined;
                variants?: string[] | undefined;
            } | undefined;
            lineHeight?: number | undefined;
            listLineHeight?: number | undefined;
            hideIcons?: boolean | undefined;
            underlineLinks?: boolean | undefined;
        }>>;
        presentation: z.ZodDefault<z.ZodObject<{
            dateFormat: z.ZodDefault<z.ZodEnum<["mm/yyyy", "mmm yyyy", "month yyyy", "yyyy"]>>;
            headerAlignment: z.ZodDefault<z.ZodEnum<["left", "center", "right"]>>;
            dateAlignment: z.ZodDefault<z.ZodEnum<["left", "right"]>>;
            locationAlignment: z.ZodDefault<z.ZodEnum<["left", "right"]>>;
            skillsLayout: z.ZodDefault<z.ZodEnum<["comma-separated", "comma-separated-list", "columns"]>>;
            skillsColumns: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            dateFormat: "mm/yyyy" | "mmm yyyy" | "month yyyy" | "yyyy";
            headerAlignment: "left" | "center" | "right";
            dateAlignment: "left" | "right";
            locationAlignment: "left" | "right";
            skillsLayout: "comma-separated" | "comma-separated-list" | "columns";
            skillsColumns: number;
        }, {
            dateFormat?: "mm/yyyy" | "mmm yyyy" | "month yyyy" | "yyyy" | undefined;
            headerAlignment?: "left" | "center" | "right" | undefined;
            dateAlignment?: "left" | "right" | undefined;
            locationAlignment?: "left" | "right" | undefined;
            skillsLayout?: "comma-separated" | "comma-separated-list" | "columns" | undefined;
            skillsColumns?: number | undefined;
        }>>;
        display: z.ZodDefault<z.ZodObject<{
            experience: z.ZodDefault<z.ZodObject<{
                primary: z.ZodDefault<z.ZodEnum<["company", "position"]>>;
                location: z.ZodDefault<z.ZodEnum<["company", "position", "none"]>>;
                dates: z.ZodDefault<z.ZodEnum<["company", "position", "both"]>>;
            }, "strip", z.ZodTypeAny, {
                location: "company" | "position" | "none";
                primary: "company" | "position";
                dates: "company" | "position" | "both";
            }, {
                location?: "company" | "position" | "none" | undefined;
                primary?: "company" | "position" | undefined;
                dates?: "company" | "position" | "both" | undefined;
            }>>;
            education: z.ZodDefault<z.ZodObject<{
                primary: z.ZodDefault<z.ZodEnum<["institution", "degree"]>>;
            }, "strip", z.ZodTypeAny, {
                primary: "institution" | "degree";
            }, {
                primary?: "institution" | "degree" | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            experience: {
                location: "company" | "position" | "none";
                primary: "company" | "position";
                dates: "company" | "position" | "both";
            };
            education: {
                primary: "institution" | "degree";
            };
        }, {
            experience?: {
                location?: "company" | "position" | "none" | undefined;
                primary?: "company" | "position" | undefined;
                dates?: "company" | "position" | "both" | undefined;
            } | undefined;
            education?: {
                primary?: "institution" | "degree" | undefined;
            } | undefined;
        }>>;
        advanced: z.ZodDefault<z.ZodObject<{
            bullets: z.ZodDefault<z.ZodEnum<["circle", "dash", "chevron", "arrow", "comma", "line"]>>;
            fontWeight: z.ZodDefault<z.ZodObject<{
                body: z.ZodDefault<z.ZodNumber>;
                name: z.ZodDefault<z.ZodNumber>;
                primaryHeading: z.ZodDefault<z.ZodNumber>;
                secondaryHeading: z.ZodDefault<z.ZodNumber>;
                sectionTitle: z.ZodDefault<z.ZodNumber>;
                minor: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                name: number;
                body: number;
                primaryHeading: number;
                secondaryHeading: number;
                sectionTitle: number;
                minor: number;
            }, {
                name?: number | undefined;
                body?: number | undefined;
                primaryHeading?: number | undefined;
                secondaryHeading?: number | undefined;
                sectionTitle?: number | undefined;
                minor?: number | undefined;
            }>>;
            fontScale: z.ZodDefault<z.ZodObject<{
                body: z.ZodDefault<z.ZodNumber>;
                name: z.ZodDefault<z.ZodNumber>;
                primaryHeading: z.ZodDefault<z.ZodNumber>;
                secondaryHeading: z.ZodDefault<z.ZodNumber>;
                sectionTitle: z.ZodDefault<z.ZodNumber>;
                minor: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                name: number;
                body: number;
                primaryHeading: number;
                secondaryHeading: number;
                sectionTitle: number;
                minor: number;
            }, {
                name?: number | undefined;
                body?: number | undefined;
                primaryHeading?: number | undefined;
                secondaryHeading?: number | undefined;
                sectionTitle?: number | undefined;
                minor?: number | undefined;
            }>>;
            textTransform: z.ZodDefault<z.ZodObject<{
                body: z.ZodDefault<z.ZodEnum<["none", "uppercase", "capitalize"]>>;
                name: z.ZodDefault<z.ZodEnum<["none", "uppercase", "capitalize"]>>;
                primaryHeading: z.ZodDefault<z.ZodEnum<["none", "uppercase", "capitalize"]>>;
                secondaryHeading: z.ZodDefault<z.ZodEnum<["none", "uppercase", "capitalize"]>>;
                sectionTitle: z.ZodDefault<z.ZodEnum<["none", "uppercase", "capitalize"]>>;
                minor: z.ZodDefault<z.ZodEnum<["none", "uppercase", "capitalize"]>>;
            }, "strip", z.ZodTypeAny, {
                name: "none" | "uppercase" | "capitalize";
                body: "none" | "uppercase" | "capitalize";
                primaryHeading: "none" | "uppercase" | "capitalize";
                secondaryHeading: "none" | "uppercase" | "capitalize";
                sectionTitle: "none" | "uppercase" | "capitalize";
                minor: "none" | "uppercase" | "capitalize";
            }, {
                name?: "none" | "uppercase" | "capitalize" | undefined;
                body?: "none" | "uppercase" | "capitalize" | undefined;
                primaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
                secondaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
                sectionTitle?: "none" | "uppercase" | "capitalize" | undefined;
                minor?: "none" | "uppercase" | "capitalize" | undefined;
            }>>;
            spacing: z.ZodDefault<z.ZodObject<{
                betweenSections: z.ZodDefault<z.ZodNumber>;
                titleToContent: z.ZodDefault<z.ZodNumber>;
                headingToSubheading: z.ZodDefault<z.ZodNumber>;
                betweenBlocks: z.ZodDefault<z.ZodNumber>;
                betweenListItems: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                betweenSections: number;
                titleToContent: number;
                headingToSubheading: number;
                betweenBlocks: number;
                betweenListItems: number;
            }, {
                betweenSections?: number | undefined;
                titleToContent?: number | undefined;
                headingToSubheading?: number | undefined;
                betweenBlocks?: number | undefined;
                betweenListItems?: number | undefined;
            }>>;
            borders: z.ZodDefault<z.ZodObject<{
                aboveHeader: z.ZodDefault<z.ZodNumber>;
                belowHeader: z.ZodDefault<z.ZodNumber>;
                sectionTitles: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                aboveHeader: number;
                belowHeader: number;
                sectionTitles: number;
            }, {
                aboveHeader?: number | undefined;
                belowHeader?: number | undefined;
                sectionTitles?: number | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            bullets: "circle" | "dash" | "chevron" | "arrow" | "comma" | "line";
            fontWeight: {
                name: number;
                body: number;
                primaryHeading: number;
                secondaryHeading: number;
                sectionTitle: number;
                minor: number;
            };
            fontScale: {
                name: number;
                body: number;
                primaryHeading: number;
                secondaryHeading: number;
                sectionTitle: number;
                minor: number;
            };
            textTransform: {
                name: "none" | "uppercase" | "capitalize";
                body: "none" | "uppercase" | "capitalize";
                primaryHeading: "none" | "uppercase" | "capitalize";
                secondaryHeading: "none" | "uppercase" | "capitalize";
                sectionTitle: "none" | "uppercase" | "capitalize";
                minor: "none" | "uppercase" | "capitalize";
            };
            spacing: {
                betweenSections: number;
                titleToContent: number;
                headingToSubheading: number;
                betweenBlocks: number;
                betweenListItems: number;
            };
            borders: {
                aboveHeader: number;
                belowHeader: number;
                sectionTitles: number;
            };
        }, {
            bullets?: "circle" | "dash" | "chevron" | "arrow" | "comma" | "line" | undefined;
            fontWeight?: {
                name?: number | undefined;
                body?: number | undefined;
                primaryHeading?: number | undefined;
                secondaryHeading?: number | undefined;
                sectionTitle?: number | undefined;
                minor?: number | undefined;
            } | undefined;
            fontScale?: {
                name?: number | undefined;
                body?: number | undefined;
                primaryHeading?: number | undefined;
                secondaryHeading?: number | undefined;
                sectionTitle?: number | undefined;
                minor?: number | undefined;
            } | undefined;
            textTransform?: {
                name?: "none" | "uppercase" | "capitalize" | undefined;
                body?: "none" | "uppercase" | "capitalize" | undefined;
                primaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
                secondaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
                sectionTitle?: "none" | "uppercase" | "capitalize" | undefined;
                minor?: "none" | "uppercase" | "capitalize" | undefined;
            } | undefined;
            spacing?: {
                betweenSections?: number | undefined;
                titleToContent?: number | undefined;
                headingToSubheading?: number | undefined;
                betweenBlocks?: number | undefined;
                betweenListItems?: number | undefined;
            } | undefined;
            borders?: {
                aboveHeader?: number | undefined;
                belowHeader?: number | undefined;
                sectionTitles?: number | undefined;
            } | undefined;
        }>>;
        notes: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        template: string;
        layout: string[][][];
        css: {
            value: string;
            visible: boolean;
        };
        page: {
            options: {
                breakLine: boolean;
                pageNumbers: boolean;
            };
            margin: number;
            marginLeft: number;
            marginRight: number;
            format: "a4" | "letter" | "legal";
        };
        theme: {
            background: string;
            text: string;
            primary: string;
        };
        typography: {
            font: {
                size: number;
                family: string;
                subset: string;
                variants: string[];
            };
            lineHeight: number;
            listLineHeight: number;
            hideIcons: boolean;
            underlineLinks: boolean;
        };
        presentation: {
            dateFormat: "mm/yyyy" | "mmm yyyy" | "month yyyy" | "yyyy";
            headerAlignment: "left" | "center" | "right";
            dateAlignment: "left" | "right";
            locationAlignment: "left" | "right";
            skillsLayout: "comma-separated" | "comma-separated-list" | "columns";
            skillsColumns: number;
        };
        display: {
            experience: {
                location: "company" | "position" | "none";
                primary: "company" | "position";
                dates: "company" | "position" | "both";
            };
            education: {
                primary: "institution" | "degree";
            };
        };
        advanced: {
            bullets: "circle" | "dash" | "chevron" | "arrow" | "comma" | "line";
            fontWeight: {
                name: number;
                body: number;
                primaryHeading: number;
                secondaryHeading: number;
                sectionTitle: number;
                minor: number;
            };
            fontScale: {
                name: number;
                body: number;
                primaryHeading: number;
                secondaryHeading: number;
                sectionTitle: number;
                minor: number;
            };
            textTransform: {
                name: "none" | "uppercase" | "capitalize";
                body: "none" | "uppercase" | "capitalize";
                primaryHeading: "none" | "uppercase" | "capitalize";
                secondaryHeading: "none" | "uppercase" | "capitalize";
                sectionTitle: "none" | "uppercase" | "capitalize";
                minor: "none" | "uppercase" | "capitalize";
            };
            spacing: {
                betweenSections: number;
                titleToContent: number;
                headingToSubheading: number;
                betweenBlocks: number;
                betweenListItems: number;
            };
            borders: {
                aboveHeader: number;
                belowHeader: number;
                sectionTitles: number;
            };
        };
        notes: string;
    }, {
        template?: string | undefined;
        layout?: string[][][] | undefined;
        css?: {
            value?: string | undefined;
            visible?: boolean | undefined;
        } | undefined;
        page?: {
            options?: {
                breakLine?: boolean | undefined;
                pageNumbers?: boolean | undefined;
            } | undefined;
            margin?: number | undefined;
            marginLeft?: number | undefined;
            marginRight?: number | undefined;
            format?: "a4" | "letter" | "legal" | undefined;
        } | undefined;
        theme?: {
            background?: string | undefined;
            text?: string | undefined;
            primary?: string | undefined;
        } | undefined;
        typography?: {
            font?: {
                size?: number | undefined;
                family?: string | undefined;
                subset?: string | undefined;
                variants?: string[] | undefined;
            } | undefined;
            lineHeight?: number | undefined;
            listLineHeight?: number | undefined;
            hideIcons?: boolean | undefined;
            underlineLinks?: boolean | undefined;
        } | undefined;
        presentation?: {
            dateFormat?: "mm/yyyy" | "mmm yyyy" | "month yyyy" | "yyyy" | undefined;
            headerAlignment?: "left" | "center" | "right" | undefined;
            dateAlignment?: "left" | "right" | undefined;
            locationAlignment?: "left" | "right" | undefined;
            skillsLayout?: "comma-separated" | "comma-separated-list" | "columns" | undefined;
            skillsColumns?: number | undefined;
        } | undefined;
        display?: {
            experience?: {
                location?: "company" | "position" | "none" | undefined;
                primary?: "company" | "position" | undefined;
                dates?: "company" | "position" | "both" | undefined;
            } | undefined;
            education?: {
                primary?: "institution" | "degree" | undefined;
            } | undefined;
        } | undefined;
        advanced?: {
            bullets?: "circle" | "dash" | "chevron" | "arrow" | "comma" | "line" | undefined;
            fontWeight?: {
                name?: number | undefined;
                body?: number | undefined;
                primaryHeading?: number | undefined;
                secondaryHeading?: number | undefined;
                sectionTitle?: number | undefined;
                minor?: number | undefined;
            } | undefined;
            fontScale?: {
                name?: number | undefined;
                body?: number | undefined;
                primaryHeading?: number | undefined;
                secondaryHeading?: number | undefined;
                sectionTitle?: number | undefined;
                minor?: number | undefined;
            } | undefined;
            textTransform?: {
                name?: "none" | "uppercase" | "capitalize" | undefined;
                body?: "none" | "uppercase" | "capitalize" | undefined;
                primaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
                secondaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
                sectionTitle?: "none" | "uppercase" | "capitalize" | undefined;
                minor?: "none" | "uppercase" | "capitalize" | undefined;
            } | undefined;
            spacing?: {
                betweenSections?: number | undefined;
                titleToContent?: number | undefined;
                headingToSubheading?: number | undefined;
                betweenBlocks?: number | undefined;
                betweenListItems?: number | undefined;
            } | undefined;
            borders?: {
                aboveHeader?: number | undefined;
                belowHeader?: number | undefined;
                sectionTitles?: number | undefined;
            } | undefined;
        } | undefined;
        notes?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    basics: {
        email: string;
        name: string;
        headline: string;
        phone: string;
        location: string;
        url: {
            label: string;
            href: string;
        };
        customFields: {
            value: string;
            id: string;
            icon: string;
            name: string;
        }[];
        picture: {
            url: string;
            size: number;
            aspectRatio: number;
            borderRadius: number;
            effects: {
                hidden: boolean;
                border: boolean;
                grayscale: boolean;
            };
        };
    };
    sections: {
        custom: Record<string, {
            id: string;
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                keywords: string[];
            }[];
        }>;
        profiles: {
            id: "profiles";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                icon: string;
                url: {
                    label: string;
                    href: string;
                };
                network: string;
                username: string;
            }[];
        };
        summary: {
            id: "summary";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            content: string;
        };
        experience: {
            id: "experience";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                company: string;
                position: string;
            }[];
        };
        education: {
            id: "education";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                institution: string;
                studyType: string;
                area: string;
                score: string;
            }[];
        };
        projects: {
            id: "projects";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                keywords: string[];
            }[];
        };
        volunteer: {
            id: "volunteer";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                position: string;
                organization: string;
            }[];
        };
        references: {
            id: "references";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
            }[];
        };
        skills: {
            id: "skills";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                name: string;
                description: string;
                keywords: string[];
                level: number;
            }[];
        };
        interests: {
            id: "interests";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                name: string;
                keywords: string[];
            }[];
        };
        certifications: {
            id: "certifications";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                issuer: string;
            }[];
        };
        awards: {
            id: "awards";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                title: string;
                awarder: string;
            }[];
        };
        publications: {
            id: "publications";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                date: string;
                id: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                publisher: string;
            }[];
        };
        languages: {
            id: "languages";
            visible: boolean;
            name: string;
            columns: number;
            separateLinks: boolean;
            layoutSystem: "grid" | "flex";
            layoutSetting: {
                visibleType: "default" | "list";
            };
            items: {
                id: string;
                visible: boolean;
                name: string;
                description: string;
                level: number;
            }[];
        };
    };
    metadata: {
        template: string;
        layout: string[][][];
        css: {
            value: string;
            visible: boolean;
        };
        page: {
            options: {
                breakLine: boolean;
                pageNumbers: boolean;
            };
            margin: number;
            marginLeft: number;
            marginRight: number;
            format: "a4" | "letter" | "legal";
        };
        theme: {
            background: string;
            text: string;
            primary: string;
        };
        typography: {
            font: {
                size: number;
                family: string;
                subset: string;
                variants: string[];
            };
            lineHeight: number;
            listLineHeight: number;
            hideIcons: boolean;
            underlineLinks: boolean;
        };
        presentation: {
            dateFormat: "mm/yyyy" | "mmm yyyy" | "month yyyy" | "yyyy";
            headerAlignment: "left" | "center" | "right";
            dateAlignment: "left" | "right";
            locationAlignment: "left" | "right";
            skillsLayout: "comma-separated" | "comma-separated-list" | "columns";
            skillsColumns: number;
        };
        display: {
            experience: {
                location: "company" | "position" | "none";
                primary: "company" | "position";
                dates: "company" | "position" | "both";
            };
            education: {
                primary: "institution" | "degree";
            };
        };
        advanced: {
            bullets: "circle" | "dash" | "chevron" | "arrow" | "comma" | "line";
            fontWeight: {
                name: number;
                body: number;
                primaryHeading: number;
                secondaryHeading: number;
                sectionTitle: number;
                minor: number;
            };
            fontScale: {
                name: number;
                body: number;
                primaryHeading: number;
                secondaryHeading: number;
                sectionTitle: number;
                minor: number;
            };
            textTransform: {
                name: "none" | "uppercase" | "capitalize";
                body: "none" | "uppercase" | "capitalize";
                primaryHeading: "none" | "uppercase" | "capitalize";
                secondaryHeading: "none" | "uppercase" | "capitalize";
                sectionTitle: "none" | "uppercase" | "capitalize";
                minor: "none" | "uppercase" | "capitalize";
            };
            spacing: {
                betweenSections: number;
                titleToContent: number;
                headingToSubheading: number;
                betweenBlocks: number;
                betweenListItems: number;
            };
            borders: {
                aboveHeader: number;
                belowHeader: number;
                sectionTitles: number;
            };
        };
        notes: string;
    };
}, {
    basics: {
        email: string;
        name: string;
        headline: string;
        phone: string;
        location: string;
        url: {
            label: string;
            href: string;
        };
        customFields: {
            value: string;
            id: string;
            icon: string;
            name: string;
        }[];
        picture: {
            url: string;
            effects: {
                hidden?: boolean | undefined;
                border?: boolean | undefined;
                grayscale?: boolean | undefined;
            };
            size?: number | undefined;
            aspectRatio?: number | undefined;
            borderRadius?: number | undefined;
        };
    };
    sections: {
        profiles: {
            id: "profiles";
            name: string;
            items: {
                visible: boolean;
                icon: string;
                url: {
                    label: string;
                    href: string;
                };
                network: string;
                username: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        summary: {
            id: "summary";
            name: string;
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
            content?: string | undefined;
        };
        experience: {
            id: "experience";
            name: string;
            items: {
                date: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                company: string;
                position: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        education: {
            id: "education";
            name: string;
            items: {
                date: string;
                visible: boolean;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                institution: string;
                studyType: string;
                area: string;
                score: string;
                id?: string | undefined;
                location?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        projects: {
            id: "projects";
            name: string;
            items: {
                date: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        volunteer: {
            id: "volunteer";
            name: string;
            items: {
                date: string;
                visible: boolean;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                position: string;
                organization: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        references: {
            id: "references";
            name: string;
            items: {
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        skills: {
            id: "skills";
            name: string;
            items: {
                visible: boolean;
                name: string;
                description: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
                level?: number | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        interests: {
            id: "interests";
            name: string;
            items: {
                visible: boolean;
                name: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        certifications: {
            id: "certifications";
            name: string;
            items: {
                date: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                issuer: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        awards: {
            id: "awards";
            name: string;
            items: {
                date: string;
                visible: boolean;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                title: string;
                awarder: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        publications: {
            id: "publications";
            name: string;
            items: {
                date: string;
                visible: boolean;
                name: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                publisher: string;
                id?: string | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        languages: {
            id: "languages";
            name: string;
            items: {
                visible: boolean;
                name: string;
                description: string;
                id?: string | undefined;
                level?: number | undefined;
            }[];
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        };
        custom?: Record<string, {
            name: string;
            items: {
                date: string;
                visible: boolean;
                name: string;
                location: string;
                url: {
                    label: string;
                    href: string;
                };
                summary: string;
                description: string;
                id?: string | undefined;
                keywords?: string[] | undefined;
            }[];
            id?: string | undefined;
            visible?: boolean | undefined;
            columns?: number | undefined;
            separateLinks?: boolean | undefined;
            layoutSystem?: "grid" | "flex" | undefined;
            layoutSetting?: {
                visibleType?: "default" | "list" | undefined;
            } | undefined;
        }> | undefined;
    };
    metadata: {
        template?: string | undefined;
        layout?: string[][][] | undefined;
        css?: {
            value?: string | undefined;
            visible?: boolean | undefined;
        } | undefined;
        page?: {
            options?: {
                breakLine?: boolean | undefined;
                pageNumbers?: boolean | undefined;
            } | undefined;
            margin?: number | undefined;
            marginLeft?: number | undefined;
            marginRight?: number | undefined;
            format?: "a4" | "letter" | "legal" | undefined;
        } | undefined;
        theme?: {
            background?: string | undefined;
            text?: string | undefined;
            primary?: string | undefined;
        } | undefined;
        typography?: {
            font?: {
                size?: number | undefined;
                family?: string | undefined;
                subset?: string | undefined;
                variants?: string[] | undefined;
            } | undefined;
            lineHeight?: number | undefined;
            listLineHeight?: number | undefined;
            hideIcons?: boolean | undefined;
            underlineLinks?: boolean | undefined;
        } | undefined;
        presentation?: {
            dateFormat?: "mm/yyyy" | "mmm yyyy" | "month yyyy" | "yyyy" | undefined;
            headerAlignment?: "left" | "center" | "right" | undefined;
            dateAlignment?: "left" | "right" | undefined;
            locationAlignment?: "left" | "right" | undefined;
            skillsLayout?: "comma-separated" | "comma-separated-list" | "columns" | undefined;
            skillsColumns?: number | undefined;
        } | undefined;
        display?: {
            experience?: {
                location?: "company" | "position" | "none" | undefined;
                primary?: "company" | "position" | undefined;
                dates?: "company" | "position" | "both" | undefined;
            } | undefined;
            education?: {
                primary?: "institution" | "degree" | undefined;
            } | undefined;
        } | undefined;
        advanced?: {
            bullets?: "circle" | "dash" | "chevron" | "arrow" | "comma" | "line" | undefined;
            fontWeight?: {
                name?: number | undefined;
                body?: number | undefined;
                primaryHeading?: number | undefined;
                secondaryHeading?: number | undefined;
                sectionTitle?: number | undefined;
                minor?: number | undefined;
            } | undefined;
            fontScale?: {
                name?: number | undefined;
                body?: number | undefined;
                primaryHeading?: number | undefined;
                secondaryHeading?: number | undefined;
                sectionTitle?: number | undefined;
                minor?: number | undefined;
            } | undefined;
            textTransform?: {
                name?: "none" | "uppercase" | "capitalize" | undefined;
                body?: "none" | "uppercase" | "capitalize" | undefined;
                primaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
                secondaryHeading?: "none" | "uppercase" | "capitalize" | undefined;
                sectionTitle?: "none" | "uppercase" | "capitalize" | undefined;
                minor?: "none" | "uppercase" | "capitalize" | undefined;
            } | undefined;
            spacing?: {
                betweenSections?: number | undefined;
                titleToContent?: number | undefined;
                headingToSubheading?: number | undefined;
                betweenBlocks?: number | undefined;
                betweenListItems?: number | undefined;
            } | undefined;
            borders?: {
                aboveHeader?: number | undefined;
                belowHeader?: number | undefined;
                sectionTitles?: number | undefined;
            } | undefined;
        } | undefined;
        notes?: string | undefined;
    };
}>;
type ResumeData = z.infer<typeof resumeDataSchema>;
declare const defaultResumeData: ResumeData;
declare const minimalResumeData: ResumeData;
declare const emptyResumeData: ResumeData;

export { type Award, type Basics, type Certification, type CustomField, type CustomSection, type CustomSectionGroup, type Education, type Experience, type Interest, type Item, type Language, type Metadata, type Profile, type Project, type Publication, type Reference, type ResumeData, type Section, type SectionItem, type SectionKey, type SectionWithItem, type Sections, type Skill, type URL, type Volunteer, awardSchema, basicsSchema, certificationSchema, customFieldSchema, customSchema, customSectionSchema, defaultAward, defaultBasics, defaultCertification, defaultCustomSection, defaultEducation, defaultExperience, defaultInterest, defaultItem, defaultLanguage, defaultLayout, defaultMetadata, defaultProfile, defaultProject, defaultPublication, defaultReference, defaultResumeData, defaultSection, defaultSections, defaultSkill, defaultUrl, defaultVolunteer, educationSchema, emptyResumeData, experienceSchema, idSchema, interestSchema, itemSchema, languageSchema, metadataSchema, minimalResumeData, profileSchema, projectSchema, publicationSchema, referenceSchema, resumeDataSchema, sampleResume, sectionSchema, sectionsSchema, skillSchema, urlSchema, volunteerSchema };
