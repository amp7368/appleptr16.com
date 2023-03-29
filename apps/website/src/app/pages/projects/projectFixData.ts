import { Optional } from '@app/util';

import { fixDates, getDuration } from '../../elf/types/fixDates';
import { ProjectProps, ProjectRawData } from '../../elf/types/ProjectTypes';

export function fixData(raw: ProjectRawData): ProjectProps {
    const dates = fixDates(raw.dates);
    const duration = getDuration(dates);
    return {
        ...raw,
        dates,
        ratingRaw: {
            duration,
            ...raw.ratingRaw,
        },
        duration,
        ratingRelative: {
            duration: 0,
            impact: 0,
            difficulty: 0,
            size: 0,
        },
    };
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
