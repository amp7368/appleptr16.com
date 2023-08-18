import { FullDateRangeProps, FullDateRangeRaw } from './DateTypes';
import { ToolNotes } from './ToolTypes';

export interface ProjectRawData {
    title: string;
    dates: FullDateRangeRaw;
    urls?: Record<string, ProjectUrl>;
    ratingRaw: {
        impact: number;
        difficulty: number;
        size: number;
    };
    summary: string[];
    tools: Record<string, ToolNotes>;
    comments: string[];
    sections?: ProjectRawSection[];
}
export interface ProjectRawSection {
    title: string;
    description: string;
    dates: FullDateRangeRaw;
    urls?: Record<string, ProjectUrl>;
    summary: string[];
    tools?: Record<string, ToolNotes>;
    comments: string[];
}
export type ProjectUrl = {
    link: string;
    comment?: string;
};

export interface ProjectProps {
    title: string;
    urls?: Record<string, ProjectUrl>;
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
    sections?: ProjectRawSection[];
}
