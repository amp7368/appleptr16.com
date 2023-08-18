import dateFormat from 'dateformat';

import {
    DateApproximation,
    DateRangeProps,
    DateRangeRaw,
    FullDateRangeProps,
    FullDateRangeRaw,
    dateApproximationOrder,
    dateApproximationOrderMap,
} from './DateTypes';

export function fixDates(datesRaw: FullDateRangeRaw): FullDateRangeProps {
    if (!Array.isArray(datesRaw)) {
        const date: DateRangeProps = fixOneDate(datesRaw);
        return {
            ...date,
            dates: [date],
        };
    }
    const dates: DateRangeProps[] = datesRaw.map(fixOneDate);

    const dateApproxIndex = dates
        .map((date) => dateApproximationOrderMap[date.dateApproximation])
        .reduce((a, b) => Math.max(a, b));

    const dateApproximation = dateApproximationOrder[dateApproxIndex];
    const endDate = dates.reduce((a, b) => (a.endDate > b.endDate ? a : b));
    const startDate = dates.reduce((a, b) =>
        a.startDate < b.startDate ? a : b
    );

    return {
        dateApproximation,
        endDate: endDate.endDate,
        startDate: startDate.startDate,
        startFormatted: startDate.startFormatted,
        endFormatted: endDate.endFormatted,
        dates,
    };
}
function fixOneDate(date: DateRangeRaw): DateRangeProps {
    return {
        dateApproximation: date.dateApproximation,
        startFormatted: formatDate(date.startDate, date.dateApproximation),
        endFormatted: formatDate(date.endDate, date.dateApproximation),
        startDate: new Date(date.startDate),
        endDate:
            date.endDate === 'current' ? new Date() : new Date(date.endDate),
    };
}
const formatting: Record<DateApproximation, string> = {
    DAY: 'mmmm yyyy',
    MONTH: 'mmmm yyyy',
    YEAR: 'yyyy',
};
function formatDate(date: string, approximation: DateApproximation) {
    if (date === 'current') return 'Current';
    return dateFormat(date, formatting[approximation]);
}
export function getDuration(
    dates: FullDateRangeProps | DateRangeProps
): number {
    if ('dates' in dates)
        return dates.dates.map(getDuration).reduce((a, b) => a + b);
    return dates.endDate.getTime() - dates.startDate.getTime();
}
