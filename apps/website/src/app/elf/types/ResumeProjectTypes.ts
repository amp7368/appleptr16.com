import { FullDateRangeProps, FullDateRangeRaw } from './DateTypes';

export interface ResumeProjectRaw {
    title: string;
    url?: string;
    dates: FullDateRangeRaw;
    description: string;
    summary: string[];
}
export type ResumeProjectProps = Omit<ResumeProjectRaw, 'dates'> & {
    dates: FullDateRangeProps;
};
