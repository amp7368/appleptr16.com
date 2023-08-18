import { AddCircle } from '@mui/icons-material';
import { Box, Container, Divider, Stack } from '@mui/material';

import { AppPaper } from '../../components/base/AppPaper';
import { SummaryDisplay } from '../../components/common/ProjectSummary';
import { ToolsDisplayList } from '../../components/common/ToolsDisplayList';
import { DatesDisplay } from '../../components/common/dates/DatesDisplay';
import { ProjectProps } from '../../elf/types/ProjectTypes';
import { ProjectRating } from './base/ProjectRating';
import { ProjectTitle } from './base/ProjectTitle';
import { ProjectUrlSection } from './base/ProjectUrlSection';

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
                <Stack direction="column">
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
                    />
                    <br />
                    <DatesDisplay {...props.dates} duration={props.duration} />
                </Stack>
            </Stack>
        </AppPaper>
    );
}
