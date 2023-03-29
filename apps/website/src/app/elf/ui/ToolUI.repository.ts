import { useObservableMemo } from '@app/ui';
import { Optional } from '@app/util';
import { createStore } from '@ngneat/elf';
import {
    selectEntities,
    selectEntity,
    UIEntitiesRef,
    updateEntities,
    withEntities,
    withUIEntities,
} from '@ngneat/elf-entities';

import toolsJson from '../database/tools.json';
import { Tool, ToolTag, ToolValue } from '../types/ToolTypes';

type UIEnv = {
    id: string;
    toolTags: ToolTag[];
    active: Optional<Tool>;
};
type EnvKey = Exclude<keyof UIEnv, 'id'>;

function getTools() {
    return Object.entries<ToolValue>(toolsJson as any)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([id, tool]) => ({ id, ...tool }));
}
export const uiStore = createStore(
    { name: 'ui' },
    withEntities<Tool>({ initialValue: getTools() }),
    withUIEntities<UIEnv>({
        initialValue: [],
    })
);
const defaultEntity: Omit<UIEnv, 'id'> = { toolTags: [], active: undefined };
const uiId = 'uiId';
export function setUIToolFilter<Key extends EnvKey>(
    key: Key,
    prop: UIEnv[Key] | ((key: UIEnv[Key]) => UIEnv[Key])
) {
    const updateProp = (state: UIEnv) => {
        if (typeof prop === 'function')
            return prop((state ?? defaultEntity)[key]);
        else return prop;
    };
    const stateUpdate: (state: UIEnv) => UIEnv = (state: UIEnv): UIEnv => ({
        ...defaultEntity,
        ...state,
        id: uiId,
        [key]: updateProp(state),
    });
    uiStore.update(updateEntities(uiId, stateUpdate, { ref: UIEntitiesRef }));
}
export function useUIToolFilter(): UIEnv {
    const out = useObservableMemo(
        () => uiStore.pipe(selectEntity(uiId, { ref: UIEntitiesRef })),
        [uiId, uiStore],
        null
    );
    if (out === undefined || out === null)
        return { ...defaultEntity, id: uiId };
    return out;
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
