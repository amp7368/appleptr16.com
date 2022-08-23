import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Stack, useTheme } from '@mui/material';
import { ReactNode } from 'react';

import { AppTypography } from '../../../base/AppTypography';

export function Bulletpoint({ children }: { children: ReactNode }) {
    const fontSize = useTheme().typography.body2.fontSize;
    return (
        <Stack
            direction="row"
            spacing={1}
            alignItems="flex-start"
            textAlign="justify"
        >
            <AppTypography color="text.secondary" variant="body1">
                <RadioButtonCheckedIcon sx={{ fontSize }} />
            </AppTypography>
            <AppTypography variant="body1"> {children}</AppTypography>
        </Stack>
    );
}
