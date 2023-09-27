import { Divider, Stack } from '@mui/material';

import { AppTypography } from '../../../components/base/AppTypography';
import { SectionDatesDisplay } from '../../../components/common/dates/SectionDatesDisplay';
import { ToolsDisplayList } from '../../../components/common/ToolsDisplayList';
import { ProjectSectionProps } from '../../../elf/types/ProjectSectionTypes';

export function ProjectSectionStats(props: ProjectSectionProps) {
    return (
        <Stack maxWidth="65rem" spacing={1} alignItems="center">
            <AppTypography
                variant="h6"
                fontWeight={400}
                padding={2}
                color="primary.contrastText"
            >
                {props.description}
            </AppTypography>
            <Stack
                direction="row"
                width="100%"
                paddingLeft={2}
                paddingRight={2}
                justifyContent="space-between"
            >
                <Stack spacing={3} alignItems="center" direction="row">
                    <ToolsDisplayList row toolIds={props.tools ?? {}} />
                    <Divider orientation="vertical" flexItem />
                    <AppTypography variant="h6" color="text.primary">
                        Tools
                    </AppTypography>
                </Stack>
                <Stack spacing={3} alignItems="center" direction="row">
                    <AppTypography variant="h6" color="text.primary">
                        Dates
                    </AppTypography>
                    <Divider orientation="vertical" flexItem />

                    <SectionDatesDisplay
                        duration={props.duration}
                        {...props.dates}
                    />
                </Stack>
            </Stack>
        </Stack>
    );
}
