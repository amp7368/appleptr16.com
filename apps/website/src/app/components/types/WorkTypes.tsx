import { DateRangePropsWithBreaks, DateRangeRawWithBreaks } from './DateTypes';
import { ToolNotes } from './ToolTypes';

export interface WorkRawData {
    company: string;
    role: string;
    urls?: Record<string, WorkUrl>;
    dates: DateRangeRawWithBreaks;
    summary: string[];
    tools: Record<string, ToolNotes>;
    comments: string[];
}

export type WorkUrl = {
    link: string;
    comment?: string;
};

export interface WorkProps {
    company: string;
    role: string;
    urls?: Record<string, WorkUrl>;
    dates: DateRangePropsWithBreaks;
    duration: number;
    summary: string[];
    tools: Record<string, ToolNotes>;
    comments: string[];
}
