import projects from '../database/projects';
import { ProjectRawData } from '../types/ProjectTypes';

export function getRawProjects(): ProjectRawData[] {
    return projects;
}
