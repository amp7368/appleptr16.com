import { useObservableMemo } from '@app/ui';
import { Optional } from '@app/util';
import {
    getAllEntities,
    getAllEntitiesApply,
    getEntity,
    selectAllEntities,
    selectAllEntitiesApply,
    selectEntity,
} from '@ngneat/elf-entities';

import { useCallback } from 'react';
import { Tool, ToolTag } from '../../types/ToolTypes';
import { toolStore } from './ToolUI.store';
import { useUIToolFilter } from './ToolUIProps.query';

export function useActiveTools(): Tool[] {
    const toolFilter: ToolTag[] = useUIToolFilter();

    const filterEntity = useCallback(
        (tool: Tool): boolean => {
            if (toolFilter.length === 0) return true;

            for (const tag of tool.tags)
                if (toolFilter.includes(tag)) return true;
            return false;
        },
        [toolFilter]
    );
    return useObservableMemo(
        () => toolStore.pipe(selectAllEntitiesApply({ filterEntity })),
        [filterEntity, toolStore],
        toolStore.query(getAllEntitiesApply({ filterEntity }))
    );
}

export function useAllTools(): Tool[] {
    return useObservableMemo(
        () => toolStore.pipe(selectAllEntities()),
        [toolStore],
        toolStore.query(getAllEntities())
    );
}
export function useTool(id: string): Optional<Tool> {
    return useObservableMemo(
        () => toolStore.pipe(selectEntity(id)),
        [id, toolStore],
        toolStore.query(getEntity(id))
    );
}
