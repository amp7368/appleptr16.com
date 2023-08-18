import { Optional } from '@app/util';

import { FullDateRangeProps, FullDateRangeRaw } from '../types/DateTypes';
import {
    ProjectProps,
    ProjectRawData,
    ProjectUrl,
} from '../types/ProjectTypes';
import { ToolNotes } from '../types/ToolTypes';
import { fixDates, getDuration } from './fixDates';

export function fixData(raw: ProjectRawData): ProjectProps {
    if (!Array.isArray(raw.dates)) raw.dates = [raw.dates];
    const summary: string[] = [...raw.summary];
    const tools: Record<string, ToolNotes> = { ...raw.tools };
    const urls: Record<string, ProjectUrl> = { ...raw.urls };
    const datesRaw: FullDateRangeRaw = [...raw.dates];
    for (const section of raw.sections ?? []) {
        summary.push(section.description);
        for (const [name, tool] of Object.entries(section.tools ?? {})) {
            if (!tools[name]) tools[name] = tool;
        }
        for (const [name, url] of Object.entries(section.urls ?? {})) {
            if (!urls[name]) urls[name] = url;
        }

        if (Array.isArray(section.dates)) datesRaw.push(...section.dates);
        else datesRaw.push(section.dates);
    }
    const dates: FullDateRangeProps = fixDates(datesRaw);
    const duration: number = getDuration(dates);

    return {
        title: raw.title,
        comments: raw.comments,
        summary,
        tools,
        urls,
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
        relativeRatingKeyed(projects, ratingKeyCasted);
    }
    return projects;
}
function relativeRatingKeyed(
    projects: ProjectProps[],
    ratingKey: keyof ProjectProps['ratingRaw']
): void {
    let minVal: Optional<number> = undefined;
    let maxVal: Optional<number> = undefined;
    for (const project of projects) {
        const ratingVal: number = project.ratingRaw[ratingKey];
        if (minVal === undefined || ratingVal < minVal) minVal = ratingVal;
        if (maxVal === undefined || ratingVal > maxVal) maxVal = ratingVal;
    }
    if (minVal === undefined || maxVal === undefined)
        [minVal, maxVal] = [0, 10];
    if (minVal === maxVal) [minVal, maxVal] = [minVal - 5, minVal + 5];
    const spread = (maxVal - minVal) / 5; // 5 start rating
    for (const project of projects) {
        const ratingVal: number = project.ratingRaw[ratingKey];
        project.ratingRelative[ratingKey] = (ratingVal - minVal) / spread;
    }
}
