import { useMemo } from 'react';

import {
    useUIOrderBy,
    useUIOrderDirection,
} from '../../../elf/ui/UI.repository';
import worksRaw from '../../database/work.json';
import { fixDates, getDuration } from '../../types/fixDates';
import { WorkProps, WorkRawData } from '../../types/WorkTypes';

const rawData: WorkRawData[] = Object.values<WorkRawData>(worksRaw as any);
function sortFromExtract<P, T>(extractFn: (p: P) => T) {
    return (a: P, b: P) => {
        const aN: T = extractFn(a);
        const bN: T = extractFn(b);
        if (aN < bN) return -1;
        else if (aN === bN) return 0;
        return 1;
    };
}
function dateCompare(a: WorkProps, b: WorkProps): number {
    const aDate = a.dates.endDate;
    const bDate = b.dates.endDate;
    if (aDate < bDate) return -1;
    else if (aDate > bDate) return 1;
    return 0;
}
export function useWork() {
    const work: WorkProps[] = useMemo(
        () =>
            rawData.map((w: WorkRawData): WorkProps => {
                const dates = fixDates(w.dates);
                return {
                    ...w,
                    dates,
                    duration: getDuration(dates),
                };
            }),
        rawData.flatMap((p) => [p.role, p.company, p.dates.startDate])
    );

    return work.sort(dateCompare);
}
