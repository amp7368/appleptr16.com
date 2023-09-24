import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Stack, useTheme } from '@mui/material';

import { AppTypography } from '../../../components/base/AppTypography';

export function Bulletpoint(props: { children: string }) {
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
            <AppTypography variant="body1"> {props.children}</AppTypography>
        </Stack>
    );
}
