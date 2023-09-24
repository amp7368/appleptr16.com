import { Stack } from '@mui/material';

import { AppTypography } from '../../base/AppTypography';

export interface DatePartDurationProps {
    start: string;
    end: string;
}
export function DatePartDuration(props: DatePartDurationProps) {
    return (
        <Stack direction="row" spacing={1}>
            <AppTypography noWrap>{props.start}</AppTypography>
            <AppTypography color="secondary" noWrap>
                to
            </AppTypography>
            <AppTypography noWrap>{props.end}</AppTypography>
        </Stack>
    );
}
