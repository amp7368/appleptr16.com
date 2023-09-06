import { Stack } from '@mui/material';

import { Page } from '../../components/common/Page';
import { ProjectProps } from '../../elf/types/ProjectTypes';
import { Project } from './Project';
import { ProjectsFilter } from './ProjectsFilter';
import { useProjects } from './projectStore';

export function ProjectsPage() {
    const uiId = 'projectsUi';
    const projectsSorted: ProjectProps[] = useProjects(uiId);
    return (
        <Page title="Projects" filter={<ProjectsFilter uiId={uiId} />}>
            <Stack direction="column" spacing={3}>
                {projectsSorted.map((project) => {
                    return <Project key={project.title} {...project} />;
                })}
            </Stack>
        </Page>
    );
}
