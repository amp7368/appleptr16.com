import { ReactNode } from 'react';

import { useToggle } from '@app/ui';
import { AddCircle } from '@mui/icons-material';
import { Divider, Stack } from '@mui/material';

import { AppPaper } from '../../components/base/AppPaper';
import { DatesDisplay } from '../../components/common/dates/DatesDisplay';
import { SummaryDisplay } from '../../components/common/ProjectSummary';
import { ToolsDisplayList } from '../../components/common/ToolsDisplayList';
import { ProjectProps } from '../../elf/types/ProjectTypes';
import { ProjectRating } from './base/ProjectRating';
import { ProjectTitle } from './base/ProjectTitle';
import { ProjectExpanded } from './expanded/ProjectExpanded';

function ProjectContainer(props: { children: ReactNode }) {
    return (
        <AppPaper>
            <Stack
                padding={3}
                spacing={2}
                color="primary.contrastText"
                direction="row"
                justifyContent="space-between"
                divider={
                    <Divider flexItem orientation="vertical" variant="middle" />
                }
            >
                {props.children}
            </Stack>
        </AppPaper>
    );
}

type ProjectComponentProps = ProjectProps;

export function Project(project: ProjectComponentProps) {
    return <ProjectComponent {...project} />;
}
function ProjectComponent(project: ProjectComponentProps) {
    const [isExpanded, toggleExpanded] = useToggle(false);
    if (isExpanded)
        return <ProjectExpanded {...project} toggleExpanded={toggleExpanded} />;
    const disableExpand = project.sections.length === 0;
    return (
        <ProjectContainer>
            <Stack
                justifyContent="space-between"
                alignItems="start"
                direction="column"
                spacing={1}
            >
                <ProjectTitle
                    isExpanded={isExpanded}
                    toggleExpanded={disableExpand ? undefined : toggleExpanded}
                    disableExpand={disableExpand}
                    title={project.title}
                    subtitle={project.state}
                />
                <ToolsDisplayList toolIds={project.tools} />
            </Stack>
            <SummaryDisplay
                summary={project.summary}
                comments={project.comments}
                urls={project.urls}
            />
            <Stack direction="column">
                <ProjectRating
                    title="Impact"
                    icon={<AddCircle />}
                    value={project.ratingRelative.impact}
                />
                <ProjectRating
                    title="Difficulty"
                    icon={<AddCircle />}
                    value={project.ratingRelative.difficulty}
                />
                <ProjectRating
                    title="Size"
                    icon={<AddCircle />}
                    value={project.ratingRelative.size}
                />
                <ProjectRating
                    title="Duration"
                    icon={<AddCircle />}
                    value={project.ratingRelative.duration}
                />
                <br />
                <DatesDisplay {...project.dates} duration={project.duration} />
            </Stack>
        </ProjectContainer>
    );
}
