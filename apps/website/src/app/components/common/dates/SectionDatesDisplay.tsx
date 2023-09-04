import { Box, Stack } from '@mui/material';
import { AppTypography } from '../../base/AppTypography';
import { DatePartDurationList } from './DatePartDurationList';
import { DatesDisplayProps } from './DatesDisplay';

const MILLIS_PER_MONTH = 1000 * 60 * 60 * 24 * 30.437;
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
