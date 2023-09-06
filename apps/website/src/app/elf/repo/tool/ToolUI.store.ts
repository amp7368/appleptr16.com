import { Optional } from '@app/util';
import { createStore, propsArrayFactory, withProps } from '@ngneat/elf';
import { hasEntity, withEntities } from '@ngneat/elf-entities';

import toolsJson from '../../database/tools.json';
import { persist } from '../../Elf';
import { Tool, ToolTag, ToolValue, allToolTags } from '../../types/ToolTypes';
import { environment } from '../../../../environments/environment';

export type ToolUIEnv = {
    toolTags: ToolTag[];
    active: Optional<Tool>;
};

export const toolTagsArrayFactory = propsArrayFactory('toolTags', {
    initialValue: [] as ToolTag[],
});
const { withToolTags } = toolTagsArrayFactory;

function getToolData(): Record<string, Tool> {
    const tools: Tool[] = Object.entries<ToolValue>(
        toolsJson as Record<string, ToolValue>
    )
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([id, tool]) => ({ id, ...tool }));
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

persist(toolStore, { getEntities: () => getToolData() });
