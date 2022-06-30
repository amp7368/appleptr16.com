import { Stack } from '@mui/material';
import { useState } from 'react';

import { Page } from '../common/Page';
import { Project } from './Project';
import { ProjectsFilter } from './ProjectsFilter';
import { useProjects } from './projectStore';

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
