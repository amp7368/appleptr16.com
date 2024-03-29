import { Stack } from '@mui/material';

import { urls } from '../../util/routes';
import { AppLink } from '../base/AppLink';
import { AppPaper } from '../base/AppPaper';
import { AppTypography } from '../base/AppTypography';

export function IncompletePage() {
    return (
        <AppPaper>
            <Stack direction="column" padding={2} alignItems="center">
                <AppLink to={urls.projects}>
                    <AppTypography variant="h3">Go to Projects</AppTypography>
                </AppLink>
                <AppTypography variant="h4">
                    This page is not complete
                </AppTypography>
            </Stack>
        </AppPaper>
    );
}
