export type DateApproximation = 'DAY' | 'MONTH' | 'YEAR';
export const dateApproximationOrderMap: Record<DateApproximation, number> = {
    DAY: 0,
    MONTH: 1,
    YEAR: 2,
};
export const dateApproximationOrder: DateApproximation[] = [
    'DAY',
    'MONTH',
    'YEAR',
];

export type DateRangeRaw = {
    dateApproximation: DateApproximation;
    startDate: string | 'current';
    endDate: string | 'current';
};
export type DateRangeProps = {
    dateApproximation: DateApproximation;
    startFormatted: string;
    endFormatted: string;
    startDate: Date;
    endDate: Date;
};

export type FullDateRangeRaw = DateRangeRaw | DateRangeRaw[];
export type FullDateRangeProps = DateRangeProps & {
    dates: DateRangeProps[];
};
