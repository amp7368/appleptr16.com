import { Stack } from '@mui/material';

import { MILLIS_PER_MONTH } from '../../../elf/read/fixDates';
import { AppTypography } from '../../base/AppTypography';
import { DatePartDurationList } from './DatePartDurationList';
import { DatesDisplayProps } from './DatesDisplay';

export function SectionDatesDisplay(props: DatesDisplayProps) {
    const totalMonths = props.duration / MILLIS_PER_MONTH;
    return (
        <Stack color="secondary.main">
            <DatePartDurationList isExpanded={true} dates={props.dates} />
            <AppTypography fontWeight={500}>
                ~ {totalMonths.toFixed(2)} months
            </AppTypography>
        </Stack>
    );
}
