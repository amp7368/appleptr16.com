export type ToolNotes = {
    comments?: string[];
};
export type Tool = {
    comments?: string[];
    tags: ToolTag[];
};

export type ToolTag =
    | 'LANGUAGE'
    | 'LIBRARY'
    | 'ENVIRONMENT'
    | 'UTILITY'
    | 'OTHER';
