import { Stack } from '@mui/material';
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
                Looking to continue applying creative thinking to build
                interesting solutions to problems.
                <br />
                Seeking a co-op for the Spring or Fall of 2024 and a full-time
                position starting the Summer of 2025.
            </AppTypography>
        </Stack>
    );
}
