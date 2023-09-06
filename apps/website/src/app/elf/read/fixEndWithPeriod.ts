import { ProjectUrl } from '../types/ProjectTypes';
import { ToolNotes } from '../types/ToolTypes';

function endWithPeriod(s: string, isEndPeriod: boolean = true): string {
    if (s.endsWith('.')) return isEndPeriod ? s : s.slice(0, s.length - 1);
    else return isEndPeriod ? s + '.' : s;
}

export function endWithPeriods<T extends string[] | string>(
    msgs: T,
    isEndPeriod: boolean = true
): T {
    if (typeof msgs === 'string') return endWithPeriod(msgs, isEndPeriod) as T;
    else return msgs.map((s: string) => endWithPeriod(s, isEndPeriod)) as T;
}

export function toolEndWithPeriods(
    tools?: Record<string, ToolNotes>
): Record<string, ToolNotes> {
    if (!tools) return {};
    return Object.fromEntries(
        Object.entries(tools).map(([title, tool]) => [
            title,
            { extra: endWithPeriods(tool.extra ?? []) },
        ])
    );
}
export function urlEndWithPeriods(
    urls?: Record<string, ProjectUrl>
): Record<string, ProjectUrl> {
    if (!urls) return {};
    return Object.fromEntries(
        Object.entries(urls).map(([title, url]) => {
            if (!url.comment) return [title, url];
            const fixedUrl: ProjectUrl = {
                link: url.link,
                comment: endWithPeriods(url.comment, false),
            };
            return [title, fixedUrl];
        })
    );
}
