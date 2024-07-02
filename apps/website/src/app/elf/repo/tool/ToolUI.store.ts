import { createStore, propsArrayFactory, withProps } from '@ngneat/elf';
import { hasEntity, withEntities } from '@ngneat/elf-entities';

import { environment } from '../../../../environments/environment';
import { stripSchemaProp } from '../../../util/jsonUtil';
import { persist } from '../../Elf';
import toolsJson from '../../database/tools.json';
import { Tool, ToolRaw, ToolTag, allToolTags } from '../../types/ToolTypes';

export type ToolUIEnv = {
    toolTags: ToolTag[];
    active: Tool | undefined;
};

export const toolTagsArrayFactory = propsArrayFactory('toolTags', {
    initialValue: [] as ToolTag[],
});
const { withToolTags } = toolTagsArrayFactory;

function getToolData(): Record<string, Tool> {
    const rawData = stripSchemaProp(toolsJson) as Record<string, ToolRaw>;

    const tools: Tool[] = Object.entries(rawData)
        .sort(([aName], [bName]) => aName.localeCompare(bName))
        .map(([id, tool]) => ({
            ...tool,
            id,
            comments: tool.comments ?? [],
            extra: tool.extra ?? [],
            links: tool.links ?? [],
        }));

    assertToolTagsExist(tools);
    const toolEntries: [string, Tool][] = tools.map((tool) => [tool.id, tool]);
    return Object.fromEntries(toolEntries);
}
function assertToolTagsExist(tools: Tool[]) {
    if (environment.production) return;
    for (const tool of tools) {
        for (const tag of tool.tags) {
            if (!allToolTags.includes(tag))
                console.error(`${tag} is not a defined tool tag!`);
        }
    }
}
export function assertToolsExist(tools: string[]) {
    if (environment.production) return;
    for (const tool of tools) {
        if (!toolStore.query(hasEntity(tool)))
            console.error(`${tool} is not a defined tool`);
    }
}
export const toolStore = createStore(
    { name: 'tool' },
    withEntities<Tool>(),
    withProps<ToolUIEnv>({ toolTags: [], active: undefined }),
    withToolTags()
);

persist(toolStore, { getEntities: getToolData });
