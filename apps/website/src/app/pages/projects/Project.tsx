import { AddCircle } from '@mui/icons-material';
import { Divider, Stack } from '@mui/material';
import { ReactNode } from 'react';

import { AppPaper } from '../../components/base/AppPaper';
import { DatesDisplay } from '../../components/common/DatesDisplay';
import { ProjectRating } from './base/ProjectRating';
import { SummaryDisplay } from '../../components/common/ProjectSummary';
import { ProjectTitle } from './base/ProjectTitle';
import { ToolsDisplayList } from '../../components/common/ToolsDisplayList';
import { ProjectUrlSection } from './base/ProjectUrlSection';
import { ProjectProps } from '../../elf/types/ProjectTypes';

export function Project(props: ProjectProps) {
    return (
        <AppPaper>
            <Stack
                padding={3}
                spacing={2}
                color="primary.contrastText"
                direction="row"
                justifyContent="space-between"
                divider={
                    <Divider orientation="vertical" flexItem variant="middle" />
                }
            >
                <Stack
                    justifyContent="space-between"
                    alignItems="center"
                    direction="column"
                >
                    <ProjectTitle title={props.title} />
                    <ToolsDisplayList toolIds={props.tools} />
                </Stack>
                <Stack maxWidth="35rem" direction="column">
                    <SummaryDisplay
                        summary={props.summary}
                        comments={props.comments}
                    />
                    <ProjectUrlSection urls={props.urls} />
                </Stack>
                <Stack maxWidth="15rem" direction="column">
                    <ProjectRating
                        title="Impact"
                        icon={<AddCircle />}
                        value={props.ratingRelative.impact}
                    />
                    <ProjectRating
                        title="Difficulty"
                        icon={<AddCircle />}
                        value={props.ratingRelative.difficulty}
                    />
                    <ProjectRating
                        title="Size"
                        icon={<AddCircle />}
                        value={props.ratingRelative.size}
                    />
                    <ProjectRating
                        title="Duration"
                        icon={<AddCircle />}
                        value={props.ratingRelative.duration}
                    >
                        <DatesDisplay
                            {...props.dates}
                            duration={props.duration}
                        />
                    </ProjectRating>
                </Stack>
            </Stack>
        </AppPaper>
    );
}
