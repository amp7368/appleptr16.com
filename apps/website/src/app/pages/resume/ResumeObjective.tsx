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
                Creative and driven Computer Science student seeking a full-time
                position starting Spring 2025. Passionate about writing artistic
                code with a safety-first mindset.
            </AppTypography>
        </Stack>
    );
}
