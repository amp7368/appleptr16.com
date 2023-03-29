import { useMemo } from 'react';

import { useUIOrderBy, useUIOrderDirection } from '../../elf/ui/UI.repository';
import { fixData, relativeRating } from './projectFixData';
import projectsRaw from '../../elf/database/projects.json';
import { ProjectProps, ProjectRawData } from '../../elf/types/ProjectTypes';

const rawData: ProjectRawData[] = Object.values<ProjectRawData>(
    projectsRaw as any
);
function sortFromExtract<P, T>(extractFn: (p: P) => T) {
    return (a: P, b: P) => {
        const aN: T = extractFn(a);
        const bN: T = extractFn(b);
        if (aN < bN) return -1;
        else if (aN === bN) return 0;
        return 1;
    };
}
function dateCompare(a: ProjectProps, b: ProjectProps): number {
    const aDate = a.dates.endDate;
    const bDate = b.dates.endDate;
    if (aDate < bDate) return -1;
    else if (aDate > bDate) return 1;
    return 0;
}
export function useProjects(uiId: string) {
    const projectsNoRel: ProjectProps[] = useMemo(
        () => rawData.map((p) => fixData(p)),
        rawData.map((p) => p.title)
    );
    const projects: ProjectProps[] = useMemo(
        () => relativeRating(projectsNoRel),
        [projectsNoRel]
    );

    const orderBy = useUIOrderBy(uiId) ?? 'impact';
    let sortFn: (a: ProjectProps, b: ProjectProps) => number;
    if ('date' === orderBy) {
        sortFn = dateCompare;
    } else if ('name' === orderBy) {
        sortFn = (a, b) => a.title.localeCompare(b.title);
    } else {
        sortFn = sortFromExtract((p) => p.ratingRelative[orderBy]);
    }
    const projectsSorted: ProjectProps[] = [...projects].sort(sortFn);
    const orderDirection = useUIOrderDirection(uiId);
    if (orderDirection) projectsSorted.reverse();
    return projectsSorted;
}
