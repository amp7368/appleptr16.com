import { FullDateRangeProps, FullDateRangeRaw } from './DateTypes';
import { ProjectRawSectionData, ProjectSectionProps } from './ProjectSectionTypes';
import { ToolNotes } from './ToolTypes';

export interface ProjectRawData {
    title: string;
    dates: FullDateRangeRaw;
    urls?: Record<string, ProjectUrl>;
    state:string;
    ratingRaw: {
        impact: number;
        difficulty: number;
        size: number;
    };
    summary: string[];
    tools: Record<string, ToolNotes>;
    comments: string[];
    sections?: ProjectRawSectionData[];
}

export type ProjectUrl = {
    link: string;
    comment?: string;
};

export interface ProjectProps {
    title: string;
    urls?: Record<string, ProjectUrl>;
    state:string;
    dates: FullDateRangeProps;
    duration: number;
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
    tools: Record<string, ToolNotes>;
    summary: string[];
    comments: string[];
    sections: ProjectSectionProps[];
}
