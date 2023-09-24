import { FullDateRangeProps, FullDateRangeRaw } from './DateTypes';
import { ToolNotes } from './ToolTypes';

export interface ResumeWorkRaw {
    company: string;
    role: string;
    url?: string;
    dates: FullDateRangeRaw;
    summary: string[];
    tools: Record<string, ToolNotes>;
}

export type ResumeWorkProps = Omit<ResumeWorkRaw, 'dates'> & {
    dates: FullDateRangeProps;
};
