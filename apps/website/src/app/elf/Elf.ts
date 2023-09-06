import { Observable } from 'rxjs';

import { getRegistry, Store, StoreValue } from '@ngneat/elf';
import { setEntitiesMap } from '@ngneat/elf-entities';
import { persistState, sessionStorageStrategy, StateStorage } from '@ngneat/elf-persist-state';

import { isNewVersion } from '../init/appVersion';

interface PersistProps {
    getEntities?: () => Record<string, unknown>;
}
interface Options<S extends Store> {
    storage: StateStorage;
    source?: (store: S) => Observable<Partial<StoreValue<S>>>;
    preStoreInit?: (value: StoreValue<S>) => Partial<StoreValue<S>>;
    key?: string;
    runGuard?(): boolean;
}

export function persist(store: Store, { getEntities }: PersistProps) {
    const config: Options<Store> = { storage: sessionStorageStrategy };
    const { initialized$ } = persistState(store, config);
    store.update();
    if (!!getEntities) {
        initialized$.subscribe(() =>
            store.update(setEntitiesMap(getEntities()))
        );
    }
}
export function resetStores() {
    getRegistry().forEach((store) => store.reset());
    console.log('RESET STORES');
}
