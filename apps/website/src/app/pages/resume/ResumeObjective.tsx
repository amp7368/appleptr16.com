import { Box, Stack } from '@mui/material';
import { ResumeSectionHeader } from './common/ResumeSectionHeader';
import { AppTypography } from '../../components/base/AppTypography';

export function ResumeObjective() {
    return (
        <Stack>
            <AppTypography
                sx={{ textDecoration: 'underline' }}
                paddingTop={2}
                variant="h3"
            >
                Objective
            </AppTypography>
            <AppTypography variant="body1">
                Fourth-year student at Rochester Institute of Technology.
                <br />
                Looking to continue applying creativive thinking to build
                interesting solutions to problems.
            </AppTypography>
        </Stack>
    );
}
