import { Box, Stack } from '@mui/material';
import { AppTypography } from '../../components/base/AppTypography';
import { ResumeSectionHeader } from './common/ResumeSectionHeader';

export function ResumeEducation() {
    return (
        <Box>
            <ResumeSectionHeader>Education</ResumeSectionHeader>
            <Stack direction="row" justifyContent="space-between">
                <Stack>
                    <AppTypography
                        sx={{ textDecoration: 'underline' }}
                        variant="h3"
                    >
                        Rochester Institute of Technology
                    </AppTypography>
                    <AppTypography>B.S. in Computer Science</AppTypography>
                    <AppTypography fontStyle="italic">
                        Expected Spring 2025
                    </AppTypography>
                </Stack>
                <br />
                <Stack>
                    <AppTypography>
                        <b>GPA:</b> 3.27 on a 4-point scale
                    </AppTypography>
                    <AppTypography>
                        <b>Honors:</b> Dean's List (x3)
                    </AppTypography>
                </Stack>
            </Stack>
        </Box>
    );
}
