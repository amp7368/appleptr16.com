import { Box, Button, Stack } from '@mui/material';
import { AppTypography } from '../../components/base/AppTypography';
import { urls } from '../../util/routes';

export function OverviewHintToNavigate() {
    return (
        <Stack
            direction="row"
            border={1}
            borderRadius="5px"
            borderColor="divider"
            padding={1}
            spacing={2}
            alignItems="center"
        >
            <Stack direction="row" alignItems="end" spacing={1}>
                <AppTypography variant="h6">
                    Done here?
                    <br />
                    Head over to{' '}
                </AppTypography>
                <Box component="a" color="primary.main" href={urls.projects}>
                    <AppTypography variant="h6">/projects</AppTypography>
                </Box>
            </Stack>
        </Stack>
    );
}
