import { Box, Stack } from '@mui/material';

import { AppTypography } from '../../../components/base/AppTypography';
import { SectionDatesDisplay } from '../../../components/common/dates/SectionDatesDisplay';
import { SummaryDisplay } from '../../../components/common/ProjectSummary';
import { ProjectSectionProps } from '../../../elf/types/ProjectSectionTypes';
import { ProjectUrlSection } from '../base/ProjectUrlSection';
import { SectionHeader } from '../common/SectionHeader';

export function ProjectSectionContent(props: ProjectSectionProps) {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Stack>
                <Stack direction="row" justifyContent="flex-end">
                    <SectionDatesDisplay
                        duration={props.duration}
                        {...props.dates}
                    />
                </Stack>
                <ProjectUrlSection urls={props.urls} />
            </Stack>
            <SummaryDisplay summary={props.summary} comments={props.comments} />
        </Stack>
    );
}
