import projects from '../database/projects';
import { ProjectRawData } from '../types/ProjectTypes';

const projectsIndex = projects.map((proj) => proj.title);

export function getRawProjects(): ProjectRawData[] {
    return projects;
}
export function getRawProjectsIndex(): string[] {
    return projectsIndex;
}
