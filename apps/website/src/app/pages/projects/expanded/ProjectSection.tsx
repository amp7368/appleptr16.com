import { Box, Divider, useTheme } from '@mui/material';

import { AppTypography } from '../../../components/base/AppTypography';
import { ProjectSectionProps } from '../../../elf/types/ProjectSectionTypes';
import { ProjectSectionContent } from './ProjectSectionContent';
import { ProjectSectionStats } from './ProjectSectionStats';

export function ProjectSection(props: ProjectSectionProps) {
    const theme = useTheme();
    const h4FontSize = theme.typography.h4.fontSize;
    const borderColor = theme.palette.primary.main;
    return (
        <Box
            border={1}
            borderColor={borderColor}
            borderTop={0}
            marginBottom={8}
        >
            <Divider
                sx={{
                    ':after': { borderColor },
                    ':before': { borderColor },
                    marginTop: `calc(-${h4FontSize} * 7 / 12)`,
                }}
            >
                <AppTypography variant="h4" color="text.primary">
                    {props.title}
                </AppTypography>
            </Divider>
            <ProjectSectionStats {...props} />
            <ProjectSectionContent {...props} />
        </Box>
    );
}
