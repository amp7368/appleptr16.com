import { useMemo } from 'react';

import worksRaw from '../../elf/database/work';
import { fixDates, getDuration } from '../../elf/read/fixDates';
import { endWithPeriods } from '../../elf/read/fixEndWithPeriod';
import { assertToolsExist } from '../../elf/repo/tool';
import { WorkProps, WorkRawData } from '../../elf/types/WorkTypes';

const rawData: WorkRawData[] = Object.values<WorkRawData>(worksRaw);
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
                assertToolsExist(Object.keys(w.tools));
                return {
                    company: w.company,
                    role: w.role,
                    tools: w.tools,
                    urls: w.urls,
                    summary: endWithPeriods(w.summary),
                    comments: endWithPeriods(w.comments),
                    dates,
                    duration: getDuration(dates),
                };
            }),
        []
    );

    return work.sort(dateCompare);
}
