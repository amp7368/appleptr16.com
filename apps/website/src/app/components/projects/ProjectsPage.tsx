import { DateRangeSharp } from '@mui/icons-material';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { Button, Select, Stack } from '@mui/material';
import { useState } from 'react';
import {
    OrderBy,
    useUIOrderBy,
    useUIOrderDirection,
} from '../../elf/ui/UI.repository';
import { Page } from '../common/Page';
import { Project } from './Project';
import projectsRaw from './projects.json';
import { ProjectsFilter } from './ProjectsFilter';
import { useProjects } from './projectStore';
import { ProjectProps } from './ProjectTypes';

export function ProjectsPage() {
    const uiId = 'projectsUi';
    const projectsSorted = useProjects(uiId);
    return (
        <Page title="Projects" filter={<ProjectsFilter uiId={uiId} />}>
            <Stack direction="column" spacing={3}>
                {projectsSorted.map((project) => (
                    <Project key={project.title} {...project} />
                ))}
            </Stack>
        </Page>
    );
}
