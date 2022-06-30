import { Divider, Rating, Stack } from '@mui/material';
import { ReactNode } from 'react';

import { AppPaper } from '../base/AppPaper';
import { AppTypography } from '../base/AppTypography';
import { ProjectSummary } from './base/ProjectSummary';
import { ProjectTitle } from './base/ProjectTitle';
import { ProjectTools } from './base/ProjectTools';
import { ProjectProps } from './ProjectTypes';
import { ProjectUrlSection } from './base/ProjectUrlSection';
import { SectionHeader } from './common/SectionHeader';
import { Add, AddCircle } from '@mui/icons-material';
import { ProjectRating } from './base/ProjectRating';
import { ProjectDates } from './base/ProjectDates';

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
                    <ProjectTools tools={props.tools} />
                </Stack>
                <Stack maxWidth="35rem" direction="column">
                    <ProjectSummary
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
                        <ProjectDates
                            {...props.dates}
                            rating={props.ratingRaw}
                        />
                    </ProjectRating>
                </Stack>
            </Stack>
        </AppPaper>
    );
}
