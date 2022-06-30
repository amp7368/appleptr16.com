import { Optional } from '@appleptr16/utilities';
import dateFormat from 'dateformat';
import { orderByValues } from '../../elf/ui/UI.repository';

import {
    DateApproximation,
    DateRangeProps,
    DateRangePropsWithBreaks,
    DateRangeRaw,
    ProjectProps,
    ProjectRawData,
} from './ProjectTypes';

function getDuration(dates: DateRangePropsWithBreaks): number {
    let breakDuration = 0;
    for (const breakDate of dates.breakDates ?? []) {
        breakDuration += getDuration(breakDate);
    }
    return dates.endDate.getTime() - dates.startDate.getTime() - breakDuration;
}

export function fixData(raw: ProjectRawData): ProjectProps {
    const dates = fixDates(raw.dates);
    return {
        ...raw,
        dates,
        ratingRaw: {
            duration: getDuration(dates),
            ...raw.ratingRaw,
        },
        ratingRelative: {
            duration: 0,
            impact: 0,
            difficulty: 0,
            size: 0,
        },
    };
}
function fixDates(
    dates: DateRangeRaw & { breakDates?: DateRangeRaw[] }
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

export function relativeRating(projects: ProjectProps[]): ProjectProps[] {
    for (const ratingKey of Object.keys(projects[0].ratingRaw)) {
        const ratingKeyCasted = ratingKey as keyof ProjectProps['ratingRaw'];
        let minVal: Optional<number> = undefined;
        let maxVal: Optional<number> = undefined;
        for (const project of projects) {
            const ratingVal: number = project.ratingRaw[ratingKeyCasted];
            if (minVal === undefined || ratingVal < minVal) minVal = ratingVal;
            if (maxVal === undefined || ratingVal > maxVal) maxVal = ratingVal;
        }
        console.log(`min ${minVal} max ${maxVal}`);
        if (minVal === undefined || maxVal === undefined)
            [minVal, maxVal] = [0, 10];
        if (minVal === maxVal) [minVal, maxVal] = [minVal - 5, minVal + 5];
        const spread = (maxVal - minVal) / 5; // 5 start rating
        for (const project of projects) {
            const ratingVal: number = project.ratingRaw[ratingKeyCasted];
            project.ratingRelative[ratingKeyCasted] =
                (ratingVal - minVal) / spread;
        }
    }
    return projects;
}
