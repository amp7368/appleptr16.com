import { Stack } from '@mui/material';

import { DateRangeProps } from '../../../elf/types/DateTypes';
import { DatePartDuration } from './DatesPartDuration';

export interface DatePartDurationListProps {
    dates: DateRangeProps[];
    isExpanded: boolean;
}
export function DatePartDurationList(props: DatePartDurationListProps) {
    return (
        <Stack>
            {props.dates.map((date) => (
                <DatePartDuration
                    key={date.startFormatted}
                    start={date.startFormatted}
                    end={date.endFormatted}
                />
            ))}
        </Stack>
    );
}
