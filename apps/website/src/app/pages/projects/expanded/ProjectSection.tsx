import { Box, Divider, Stack, useTheme } from '@mui/material';

import { AppTypography } from '../../../components/base/AppTypography';
import { SectionDatesDisplay } from '../../../components/common/dates/SectionDatesDisplay';
import { ToolsDisplayList } from '../../../components/common/ToolsDisplayList';
import { ProjectSectionProps } from '../../../elf/types/ProjectSectionTypes';
import { ProjectUrlSection } from '../base/ProjectUrlSection';
import { Bulletpoint } from '../common/BulletPoint';
import { SectionHeader } from '../common/SectionHeader';

export function ProjectSection(props: ProjectSectionProps) {
    const borderColor = useTheme().palette.primary.main;
    return (
        <Box
            sx={{
                borderColor,
                borderWidth: 1,
                borderStyle: 'solid',
                borderTop: 0,
            }}
            marginBottom={8}
        >
            <Divider
                sx={{
                    ':after': { borderColor },
                    ':before': { borderColor },
                    marginTop: ({ typography }) =>
                        `calc(-${typography.h3.fontSize} * 7 / 12)`,
                }}
                textAlign="center"
            >
                <AppTypography
                    variant="h3"
                    color="text.primary"
                    textAlign="center"
                >
                    {props.title}
                </AppTypography>
            </Divider>
            <Stack spacing={1} alignItems="center">
                <AppTypography
                    variant="h6"
                    fontWeight={400}
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
            <Stack padding={2} justifyContent="space-between">
                <Stack
                    display="flex"
                    direction="row"
                    maxWidth="65rem"
                    spacing={4}
                >
                    <Stack maxWidth={`${100 / 3}%`} flexGrow={0}>
                        <SectionHeader>Summary</SectionHeader>
                        {props.summary.map((text, i) => (
                            <Bulletpoint key={i}>{text}</Bulletpoint>
                        ))}
                    </Stack>
                    <Stack maxWidth={`${100 / 3}%`} flexGrow={0}>
                        <SectionHeader>Comments</SectionHeader>
                        {props.comments.map((text, i) => (
                            <Bulletpoint key={i}>{text}</Bulletpoint>
                        ))}
                    </Stack>
                    <Stack width={`${100 / 3}%`} flexGrow={1}>
                        <ProjectUrlSection urls={props.urls} />
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}
