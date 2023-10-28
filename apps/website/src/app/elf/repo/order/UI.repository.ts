
import { useObservableMemo } from '@app/ui';
import { Optional } from '@app/util';
import { createStore } from '@ngneat/elf';
import {
    getEntity, selectEntity, UIEntitiesRef,
    upsertEntitiesById, withUIEntities
} from '@ngneat/elf-entities';

import { persist } from '../../Elf';

export type OrderBy =
    | 'date'
    | 'impact'
    | 'name'
    | 'difficulty'
    | 'duration'
    | 'size';
export const orderByValues: OrderBy[] = [
    'impact',
    'difficulty',
    'size',
    'duration',
    'date',
    'name',
];
type UIEnv = {
    id: string;
    orderBy: OrderBy;
    orderDirectionAsc: boolean;
};
type EnvKey = Exclude<keyof UIEnv, 'id'>;
const uiStore = createStore(
    { name: 'ui' },
    withUIEntities<UIEnv>({ initialValue: [] })
);
persist(uiStore, {});

const defaultEntity: Omit<UIEnv, 'id'> = {
    orderBy: 'impact',
    orderDirectionAsc: true,
};

export function setUI<Key extends EnvKey>(
    id: string,
    key: Key,
    prop: UIEnv[Key] | ((key: UIEnv[Key] | undefined) => UIEnv[Key])
) {
    const propIsFn = typeof prop === 'function';

    const setState = (state: Partial<UIEnv>): UIEnv => ({
        ...defaultEntity,
        ...state,
        id,
        [key]: propIsFn ? prop(state?.[key]) : prop,
    });
    uiStore.update(
        upsertEntitiesById(id, {
            creator: () => setState({}),
            updater: setState,
            ref: UIEntitiesRef,
        })
    );
}
export function useUI<Key extends EnvKey>(
    uiId: string,
    key: Key
): Optional<UIEnv[Key]> {
    const selectFactory = () =>
        uiStore.pipe(selectEntity(uiId, { pluck: key, ref: UIEntitiesRef }));
    const query = () =>
        uiStore.query(getEntity(uiId, { ref: UIEntitiesRef }))?.[key];

    const out = useObservableMemo(selectFactory, [uiId, key, uiStore], query);
    if (out === undefined) return defaultEntity[key];
    return out;
}

export function useUIOrderBy(uiId: string) {
    return useUI(uiId, 'orderBy');
}
export function setUIOrderBy(uiId: string, newState: OrderBy) {
    return setUI(uiId, 'orderBy', newState);
}

export function useUIOrderDirection(uiId: string) {
    return useUI(uiId, 'orderDirectionAsc');
}
export function flipUIOrderDirection(uiId: string) {
    setUI(uiId, 'orderDirectionAsc', (state) => !state);
}
