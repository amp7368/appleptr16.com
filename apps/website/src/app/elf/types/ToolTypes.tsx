export type ToolNotes = {
    extra?: string[];
};
export type ToolValue = {
    extra?: string[];
    comments?: string[];
    tags: ToolTag[];
};
export type Tool = ToolValue & { id: string };

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
