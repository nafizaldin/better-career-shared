import { L as LayoutLocator, J as Json, S as SortablePayload } from '../types-D37QSOpK.js';
export { D as DeepPartial, F as FilterKeys } from '../types-D37QSOpK.js';
import { ClassValue } from 'clsx';

declare const findItemInLayout: (item: string, layout: string[][][]) => LayoutLocator | null;
declare const removeItemInLayout: (item: string, layout: string[][][]) => LayoutLocator | null;
declare const moveItemInLayout: (current: LayoutLocator, target: LayoutLocator, layout: string[][][]) => string[][][];

declare const hexToRgb: (hex: string, alpha?: number) => string;

declare const parseCSV: (string: string) => Promise<Json[]>;
/**
 * Parser for cases when we receive an array like structure f.e. in the LinkedIn Profile.csv import
 * @param csvEntry array-like entry such as [TAG:https://some.link,TAG:https://someother.link]
 * @returns
 */
declare const parseArrayLikeCSVEntry: (csvEntry: string) => string[];

declare const sortByDate: <T>(a: T, b: T, key: keyof T, desc?: boolean) => 1 | 0 | -1;
declare const deepSearchAndParseDates: (obj: any, dateKeys: string[]) => any;

declare enum ErrorMessage {
    InvalidCredentials = "InvalidCredentials",
    UserAlreadyExists = "UserAlreadyExists",
    SecretsNotFound = "SecretsNotFound",
    OAuthUser = "OAuthUser",
    InvalidResetToken = "InvalidResetToken",
    InvalidVerificationToken = "InvalidVerificationToken",
    EmailAlreadyVerified = "EmailAlreadyVerified",
    TwoFactorNotEnabled = "TwoFactorNotEnabled",
    TwoFactorAlreadyEnabled = "TwoFactorAlreadyEnabled",
    InvalidTwoFactorCode = "InvalidTwoFactorCode",
    InvalidTwoFactorBackupCode = "InvalidTwoFactorBackupCode",
    InvalidBrowserConnection = "InvalidBrowserConnection",
    ResumeSlugAlreadyExists = "ResumeSlugAlreadyExists",
    ResumeNotFound = "ResumeNotFound",
    ResumeLocked = "ResumeLocked",
    ResumePrinterError = "ResumePrinterError",
    ResumePreviewError = "ResumePreviewError",
    SomethingWentWrong = "SomethingWentWrong"
}

type Font = {
    family: string;
    category: string;
    subsets: string[];
    variants: string[];
    files: Record<string, string>;
};
declare const fonts: Font[];
declare const getFontUrls: (family: string, variants: string[]) => string[];

type Language = {
    id: string;
    name: string;
    locale: string;
    editorCode: string;
    progress?: number;
};
declare const languages: Language[];

declare const linearTransform: (value: number, inMin: number, inMax: number, outMin: number, outMax: number) => number;

declare const exclude: <T, Key extends keyof T>(object: T, keys: Key[]) => Omit<T, Key>;

declare const pageSizeMap: {
    a4: {
        width: number;
        height: number;
    };
    letter: {
        width: number;
        height: number;
    };
    legal: {
        width: number;
        height: number;
    };
};

declare const delay: (time: number) => Promise<unknown>;

declare const getInitials: (name: string) => string;
declare const isUrl: (string: string | null | undefined) => boolean;
declare const isEmptyString: (string: string) => boolean;
declare const extractUrl: (string: string) => string | null;
declare const kebabCase: (string?: string | null) => string;
declare const generateRandomName: () => string;
declare const processUsername: (string?: string | null) => string;
declare const parseLayoutLocator: (payload: SortablePayload | null) => LayoutLocator;

declare const breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
};
declare const cn: (...inputs: ClassValue[]) => string;

declare const templatesList: readonly ["azurill", "bronzor", "chikorita", "ditto", "gengar", "glalie", "kakuna", "leafish", "nosepass", "onyx", "pikachu", "rhyhorn"];
type Template = (typeof templatesList)[number];

type DateFormat = "mm/yyyy" | "mmm yyyy" | "month yyyy" | "yyyy";
type ResumeMonth = {
    year: number;
    month?: number;
};
type ResumeDateRange = {
    start?: ResumeMonth;
    /** "present" for ongoing ranges */
    end?: ResumeMonth | "present";
};
/** Parse a stored date or range; null if it isn't a recognisable date (free text). */
declare const parseResumeDate: (input: string | undefined | null) => ResumeDateRange | null;
declare const formatResumeMonth: (date: ResumeMonth, format: DateFormat) => string;
/** Display a stored date in the resume's format; free text is returned unchanged. */
declare const formatResumeDate: (input: string | undefined | null, format?: DateFormat, presentLabel?: string) => string;
/** Build the canonical stored string from form values ("YYYY-MM[-DD]" / Date / empty). */
declare const toResumeDate: (start: string | Date | undefined | null, end?: string | Date | "present" | null) => string;

export { type DateFormat, ErrorMessage, type Font, Json, type Language, LayoutLocator, type ResumeDateRange, type ResumeMonth, SortablePayload, type Template, breakpoints, cn, deepSearchAndParseDates, delay, exclude, extractUrl, findItemInLayout, fonts, formatResumeDate, formatResumeMonth, generateRandomName, getFontUrls, getInitials, hexToRgb, isEmptyString, isUrl, kebabCase, languages, linearTransform, moveItemInLayout, pageSizeMap, parseArrayLikeCSVEntry, parseCSV, parseLayoutLocator, parseResumeDate, processUsername, removeItemInLayout, sortByDate, templatesList, toResumeDate };
