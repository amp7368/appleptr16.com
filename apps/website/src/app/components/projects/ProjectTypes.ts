export interface ProjectRawData {
    title: string;
    urls?: Record<string, ProjectUrl>;
    dates: DateRangeRaw & { breakDates?: DateRangeRaw[] };
    ratingRaw: {
        impact: number;
        difficulty: number;
        size: number;
    };
    summary: string[];
    tools: Record<string, ProjectToolNotes>;
    comments: string[];
}

export type ProjectUrl = {
    link: string;
    comment?: string;
};
export type DateRangeRaw = {
    dateApproximation: DateApproximation;
    startDate: string | 'current';
    endDate: string | 'current';
};
export type ProjectToolNotes = {
    comments?: string[];
};
export type ProjectTool = {
    comments?: string[];
    tags: ProjectToolTag[];
};
export type ProjectToolTag =
    | 'LANGUAGE'
    | 'LIBRARY'
    | 'ENVIRONMENT'
    | 'UTILITY'
    | 'OTHER';
export type DateApproximation = 'DAY' | 'MONTH' | 'YEAR';

export type DateRangePropsWithBreaks = DateRangeProps & {
    breakDates?: DateRangeProps[];
};
export type DateRangeProps = {
    startFormatted: string;
    endFormatted: string;
    startDate: Date;
    endDate: Date;
};
export interface ProjectProps {
    title: string;
    urls?: Record<string, ProjectUrl>;
    dates: DateRangePropsWithBreaks;
    ratingRaw: {
        duration: number;
        impact: number;
        difficulty: number;
        size: number;
    };
    ratingRelative: {
        duration: number;
        impact: number;
        difficulty: number;
        size: number;
    };
    tools: Record<string, ProjectToolNotes>;
    summary: string[];
    comments: string[];
}
