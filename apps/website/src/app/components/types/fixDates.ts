import dateFormat from 'dateformat';

import {
    DateApproximation,
    DateRangePropsWithBreaks,
    DateRangeRawWithBreaks,
} from './DateTypes';

export function fixDates(
    dates: DateRangeRawWithBreaks
): DateRangePropsWithBreaks {
    return {
        startFormatted: fixDate(dates.startDate, dates.dateApproximation),
        endFormatted: fixDate(dates.endDate, dates.dateApproximation),
        startDate: new Date(dates.startDate),
        endDate:
            dates.endDate === 'current' ? new Date() : new Date(dates.endDate),
        breakDates: (dates.breakDates ?? []).map(fixDates),
    };
}
const formatting: Record<DateApproximation, string> = {
    DAY: 'mmmm dd yyyy',
    MONTH: 'mmmm yyyy',
    YEAR: 'yyyy',
};
function fixDate(date: string, approximation: DateApproximation) {
    if (date === 'current') return 'Current';
    return dateFormat(date, formatting[approximation]);
}
export function getDuration(dates: DateRangePropsWithBreaks): number {
    let breakDuration = 0;
    for (const breakDate of dates.breakDates ?? []) {
        breakDuration += getDuration(breakDate);
    }
    return dates.endDate.getTime() - dates.startDate.getTime() - breakDuration;
}
