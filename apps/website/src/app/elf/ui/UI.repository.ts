import { useObservableMemo } from '@app/ui';
import { Optional } from '@app/util';
import { createStore } from '@ngneat/elf';
import {
    selectEntity,
    UIEntitiesRef,
    updateEntities,
    withUIEntities,
} from '@ngneat/elf-entities';

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
export const uiStore = createStore(
    { name: 'ui' },
    withUIEntities<UIEnv>({
        initialValue: [],
    })
);
const defaultEntity: Omit<UIEnv, 'id'> = {
    orderBy: 'impact',
    orderDirectionAsc: true,
};
export function setUI<Key extends EnvKey>(
    id: string,
    key: Key,
    prop: UIEnv[Key] | ((key: UIEnv[Key]) => UIEnv[Key])
) {
    uiStore.update(
        updateEntities(
            id,
            (state) => ({ ...defaultEntity, ...state, id, [key]: prop }),
            {
                ref: UIEntitiesRef,
            }
        )
    );
}
export function useUI<Key extends EnvKey>(
    id: string,
    key: Key
): Optional<UIEnv[Key]> {
    const out = useObservableMemo(
        () =>
            uiStore.pipe(selectEntity(id, { pluck: key, ref: UIEntitiesRef })),
        [id, key, uiStore],
        null
    );
    if (out === undefined || out === null) return defaultEntity[key];
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
