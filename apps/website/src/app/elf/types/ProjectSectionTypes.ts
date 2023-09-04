import { FullDateRangeProps, FullDateRangeRaw } from './DateTypes';
import { ProjectUrl } from './ProjectTypes';
import { ToolNotes } from './ToolTypes';

interface ProjectSectionParent {
    title: string;
    description: string;
    urls?: Record<string, ProjectUrl>;
    summary: string[];
    tools?: Record<string, ToolNotes>;
    comments: string[];
}
export type ProjectRawSectionData = ProjectSectionParent & {
    dates: FullDateRangeRaw;
};
export type ProjectSectionProps = ProjectSectionParent & {
    duration: number;
    dates: FullDateRangeProps;
};
