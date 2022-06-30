import { AddCircle } from '@mui/icons-material';
import { Divider, Stack } from '@mui/material';

import { AppPaper } from '../../base/AppPaper';
import { DatesDisplay } from '../../common/DatesDisplay';
import { SummaryDisplay } from '../../common/ProjectSummary';
import { ToolsDisplay } from '../../common/ToolsDisplay';
import { WorkProps } from '../../types/WorkTypes';
import { WorkTitle } from './base/WorkTitle';

export function Work(props: WorkProps) {
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
                    <WorkTitle company={props.company} role={props.role} />
                    <ToolsDisplay tools={props.tools} />
                </Stack>
                <Stack maxWidth="35rem" direction="column">
                    <SummaryDisplay
                        summary={props.summary}
                        comments={props.comments}
                    />
                    <DatesDisplay {...props.dates} duration={props.duration} />
                </Stack>
            </Stack>
        </AppPaper>
    );
}
