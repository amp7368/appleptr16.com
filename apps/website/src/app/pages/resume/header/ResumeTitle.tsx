import { Box, Stack } from '@mui/material';
import { AppTypography } from '../../../components/base/AppTypography';
import { LogoImg } from '../../../components/common/Logo';

export function ResumeTitle() {
    return (
        <Stack
            spacing={1.25}
            direction="row"
            color="text.primary"
            alignItems="center"
        >
            <LogoImg size="2.5cm" />
            <Stack>
                <AppTypography variant="h1" fontWeight={500}>
                    Aaron Peterham
                </AppTypography>
                <Box component="a" href="https://appleptr16.com">
                    <AppTypography color="text.primary" variant="subtitle1">
                        appleptr16.com
                    </AppTypography>
                </Box>
            </Stack>
        </Stack>
    );
}
