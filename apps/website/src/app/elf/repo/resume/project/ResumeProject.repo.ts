import { useObservableMemo } from '@app/ui';
import { createStore } from '@ngneat/elf';
import {
    getAllEntities,
    selectAllEntities,
    withEntities,
} from '@ngneat/elf-entities';
import { persist } from '../../../Elf';
import data from '../../../database/resume/ResumeProjects.json';
import { fixDates } from '../../../read/fixDates';
import {
    ResumeProjectProps,
    ResumeProjectRaw,
} from '../../../types/ResumeProjectTypes';

function getResumeProjectData(): Record<string, ResumeProjectProps> {
    const projects = data as ResumeProjectRaw[];
    const projectsProps: ResumeProjectProps[] = projects.map((proj) => ({
        ...proj,
        dates: fixDates(proj.dates),
    }));
    return Object.fromEntries(projectsProps.map((proj) => [proj.title, proj]));
}
export const resumeProjectStore = createStore(
    { name: 'resume-project' },
    withEntities<ResumeProjectProps, 'title'>({ idKey: 'title' })
);
persist(resumeProjectStore, { getEntities: () => getResumeProjectData() });

export function useResumeProjects(): ResumeProjectProps[] {
    return useObservableMemo(
        () => resumeProjectStore.pipe(selectAllEntities()),
        [resumeProjectStore],
        resumeProjectStore.query(getAllEntities())
    );
}
