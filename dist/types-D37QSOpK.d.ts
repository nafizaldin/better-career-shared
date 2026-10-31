type Json = Record<string, unknown>;
type LayoutLocator = {
    page: number;
    column: number;
    section: number;
};
type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
type FilterKeys<T, Condition> = {
    [Key in keyof T]: T[Key] extends Condition ? Key : never;
}[keyof T];
type SortablePayload = {
    index: number;
    containerId: string;
    items: string[];
};

export type { DeepPartial as D, FilterKeys as F, Json as J, LayoutLocator as L, SortablePayload as S };
