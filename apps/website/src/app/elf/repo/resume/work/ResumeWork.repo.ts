import { useObservableMemo } from '@app/ui';
import { createStore } from '@ngneat/elf';
import {
    getAllEntities,
    selectAllEntities,
    withEntities,
} from '@ngneat/elf-entities';
import { persist } from '../../../Elf';
import data from '../../../database/resume/work';
import { fixDates } from '../../../read/fixDates';
import { ResumeWorkProps, ResumeWorkRaw } from '../../../types/ResumeWorkTypes';

function getResumeWorkData(): Record<string, ResumeWorkProps> {
    const works = data as ResumeWorkRaw[];
    const worksProps: ResumeWorkProps[] = works.map((proj) => ({
        ...proj,
        dates: fixDates(proj.dates),
    }));
    return Object.fromEntries(worksProps.map((proj) => [proj.company, proj]));
}
export const resumeWorkStore = createStore(
    { name: 'resume-work' },
    withEntities<ResumeWorkProps, 'company'>({ idKey: 'company' })
);
persist(resumeWorkStore, { getEntities: () => getResumeWorkData() });

export function useResumeWorks(): ResumeWorkProps[] {
    return useObservableMemo(
        () => resumeWorkStore.pipe(selectAllEntities()),
        [resumeWorkStore],
        resumeWorkStore.query(getAllEntities())
    );
}
