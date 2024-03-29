import { map } from 'rxjs';

import { useObservableMemo } from '@app/ui';

import { ToolTag } from '../../types/ToolTypes';
import { toolStore, toolTagsArrayFactory, ToolUIEnv } from './ToolUI.store';

const {
    getToolTags,
    selectToolTags,
    setToolTags: setInternalToolTags,
} = toolTagsArrayFactory;

type UpdateToolTags = ToolTag[] | ((tags: ToolTag[]) => ToolTag[]);

function setToolTags(newState: UpdateToolTags) {
    if (typeof newState === 'function') {
        toolStore.update(
            setInternalToolTags(({ toolTags }) => newState(toolTags))
        );
    } else {
        toolStore.update(setInternalToolTags(newState));
    }
}
export function setToolUI<Key extends keyof ToolUIEnv>(
    key: Key,
    prop: ToolUIEnv[Key] | ((key: ToolUIEnv[Key]) => ToolUIEnv[Key])
) {
    if (key === 'toolTags') {
        setToolTags(prop as UpdateToolTags);
        return;
    }
    const updateProp = (state: ToolUIEnv) => {
        if (typeof prop === 'function') return prop(state[key]);
        else return prop;
    };
    toolStore.update((state) => ({
        ...state,
        [key]: updateProp,
    }));
}

export function useToolUIFilter(): ToolTag[] {
    return useObservableMemo(
        () => toolStore.pipe(selectToolTags()),
        [toolStore],
        () => toolStore.query(getToolTags)
    );
}
export function useToolUI<Key extends Exclude<keyof ToolUIEnv, 'toolTags'>>(
    key: Key
): ToolUIEnv[Key] {
    return useObservableMemo(
        () => toolStore.pipe(map((state) => state[key])),
        [toolStore, key],
        toolStore.getValue()[key]
    );
}
