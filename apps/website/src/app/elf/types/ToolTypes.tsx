export type ToolNotes = {
    extra?: string[];
};
export type ToolLink = {
    title?: string;
    href: string;
};
export type ToolRaw = {
    extra?: string[];
    comments?: string[];
    links?: ToolLink[];
    tags: ToolTag[];
};
export type Tool = Required<ToolRaw> & { id: string };

export const allToolTags: ToolTag[] = [
    'LANGUAGE',
    'LIBRARY',
    'ENVIRONMENT',
    'UTILITY',
    'IDE',
    'SERVICE',
    'FRAMEWORK',
    'OTHER',
];
allToolTags.sort();
export type ToolTag =
    | 'LANGUAGE'
    | 'LIBRARY'
    | 'ENVIRONMENT'
    | 'UTILITY'
    | 'OTHER'
    | 'IDE'
    | 'SERVICE'
    | 'FRAMEWORK';
