import projectIndex from '../database/projects/index.json';
import { ProjectRawData } from './../types/ProjectTypes';

export function getRawProjects(): ProjectRawData[] {
    return projectIndex.map(
        (proj: string) => require(projImport(proj)) as ProjectRawData
    );
}
function projImport(proj: string): string {
    const prefix = '../database/projects/';
    if (proj.endsWith('.json')) return `${prefix}${proj}`;
    return `${prefix}${proj}.json`;
}
export function getRawProjectsIndex(): string[] {
    return projectIndex;
}
