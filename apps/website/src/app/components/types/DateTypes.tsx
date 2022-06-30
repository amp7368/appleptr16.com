export type DateRangeRaw = {
    dateApproximation: DateApproximation;
    startDate: string | 'current';
    endDate: string | 'current';
};
export type DateApproximation = 'DAY' | 'MONTH' | 'YEAR';

export type DateRangePropsWithBreaks = DateRangeProps & {
    breakDates?: DateRangeProps[];
};
export type DateRangeRawWithBreaks = DateRangeRaw & {
    breakDates?: DateRangeRaw[];
};
export type DateRangeProps = {
    startFormatted: string;
    endFormatted: string;
    startDate: Date;
    endDate: Date;
};
