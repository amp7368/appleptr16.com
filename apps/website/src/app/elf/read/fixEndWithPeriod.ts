import { ProjectUrl } from '../types/ProjectTypes';
import { ToolNotes } from '../types/ToolTypes';

export function endWithPeriod(s: string, isEndPeriod: boolean = true): string {
    return s.endsWith('.') ? s : s + '.';
}
export function endWithPeriods(msgs: string[]): string[] {
    return msgs.map((s) => endWithPeriod(s));
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
                comment: endWithPeriod(url.comment, false),
            };
            return [title, fixedUrl];
        })
    );
}
