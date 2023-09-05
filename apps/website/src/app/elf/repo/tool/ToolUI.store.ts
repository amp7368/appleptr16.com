import { Optional } from '@app/util';
import { createStore, propsArrayFactory, withProps } from '@ngneat/elf';
import { withEntities } from '@ngneat/elf-entities';
import { ToolTag } from '../../types/ToolTypes';

import { persist } from '../../Elf';
import toolsJson from '../../database/tools.json';
import { Tool, ToolValue } from '../../types/ToolTypes';

export type ToolUIEnv = {
    toolTags: ToolTag[];
    active: Optional<Tool>;
};

export const toolTagsArrayFactory = propsArrayFactory('toolTags', {
    initialValue: [] as ToolTag[],
});
const { withToolTags } = toolTagsArrayFactory;

function getToolData(): Record<string, Tool> {
    const tools: Tool[] = Object.entries<ToolValue>(toolsJson as any)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([id, tool]) => ({ id, ...tool }));

    const toolEntries: [string, Tool][] = tools.map((tool) => [tool.id, tool]);
    return Object.fromEntries(toolEntries);
}
export const toolStore = createStore(
    { name: 'tool' },
    withEntities<Tool>(),
    withProps<ToolUIEnv>({ toolTags: [], active: undefined }),
    withToolTags()
);

persist(toolStore, { getEntities: () => getToolData() });
