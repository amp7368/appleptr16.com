import { Stack } from '@mui/material';

import { AppTypography } from '../base/AppTypography';
import { DateRangePropsWithBreaks } from '../types/DateTypes';
import { ProjectProps } from '../types/ProjectTypes';

export type DatesDisplayProps = DateRangePropsWithBreaks & {
    duration: number;
};
export function DatesDisplay(props: DatesDisplayProps) {
    const totalMonths = props.duration / 1000 / 60 / 60 / 24 / 30.437;

    return (
        <Stack direction="column" alignItems="center">
            <Stack direction="row" spacing={1}>
                <AppTypography noWrap>{props.startFormatted}</AppTypography>
                <AppTypography noWrap>to</AppTypography>
                <AppTypography noWrap>{props.endFormatted}</AppTypography>
            </Stack>
            <AppTypography noWrap>
                ~ {totalMonths.toFixed(2)} months
            </AppTypography>
        </Stack>
    );
}
