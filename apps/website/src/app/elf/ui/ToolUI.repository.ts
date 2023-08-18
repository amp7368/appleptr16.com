import { useObservableMemo } from '@app/ui';
import { Optional } from '@app/util';
import { createStore, propsArrayFactory, withProps } from '@ngneat/elf';
import {
    selectEntities,
    selectEntity,
    setEntities,
    withEntities,
} from '@ngneat/elf-entities';
import { ToolTag } from './../types/ToolTypes';

import { persist } from '../Elf';
import toolsJson from '../database/tools.json';
import { Tool, ToolValue } from '../types/ToolTypes';
import { map } from 'rxjs';

type UIEnv = {
    toolTags: ToolTag[];
    active: Optional<Tool>;
};
type EnvKey = Exclude<keyof UIEnv, 'ToolTags'>;

function getToolData() {
    return Object.entries<ToolValue>(toolsJson as any)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([id, tool]) => ({ id, ...tool }));
}

const {
    withToolTags,
    selectToolTags,
    setToolTags: setStoreToolTags,
} = propsArrayFactory('toolTags', { initialValue: [] as ToolTag[] });
const uiStore = createStore(
    { name: 'tool' },
    withEntities<Tool>({ initialValue: [] }),
    withProps<UIEnv>({ toolTags: [], active: undefined }),
    withToolTags()
);
persist(uiStore, getToolData());

export function setToolTags(
    toolTags: ToolTag[] | ((tags: ToolTag[]) => ToolTag[])
) {
    setToolTags(toolTags);
}
export function setUIToolFilter<Key extends EnvKey>(
    key: Key,
    prop: UIEnv[Key] | ((key: UIEnv[Key]) => UIEnv[Key])
) {
    const updateProp = (state: UIEnv) => {
        if (typeof prop === 'function') return prop(state[key]);
        else return prop;
    };
    uiStore.update((state) => ({
        ...state,
        [key]: updateProp,
    }));
}
export function useToolUI<Key extends EnvKey>(key: Key): UIEnv[Key] {
    return useObservableMemo(
        () => uiStore.pipe(map((state) => state[key])),
        [],
        uiStore.getValue()[key]
    );
}
export function useUIToolFilter(): string[] {
    return useObservableMemo(() => uiStore.pipe(selectToolTags()), [], []);
}

export function useTools(): Tool[] {
    const tools = useObservableMemo(
        () => uiStore.pipe(selectEntities()),
        [uiStore],
        null
    );
    return tools ? Object.values(tools) : [];
}
export function useTool(id: string): Optional<Tool> {
    return useObservableMemo(
        () => uiStore.pipe(selectEntity(id)),
        [id, uiStore],
        undefined
    );
}
