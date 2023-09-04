import { getRegistry, Store, StoreValue } from '@ngneat/elf';
import {
    persistState,
    sessionStorageStrategy,
    StateStorage,
} from '@ngneat/elf-persist-state';
import { Observable } from 'rxjs';

interface PersistProps {
    entities?: Record<string, unknown>;
}
interface Options<S extends Store> {
    storage: StateStorage;
    source?: (store: S) => Observable<Partial<StoreValue<S>>>;
    preStoreInit?: (value: StoreValue<S>) => Partial<StoreValue<S>>;
    key?: string;
    runGuard?(): boolean;
}

export function persist(store: Store, { entities }: PersistProps) {
    const config: Options<Store> = { storage: sessionStorageStrategy };

    if (entities !== undefined)
        config.preStoreInit = (store: Store) => ({ ...store, entities });

    persistState(store, config);
}
export function resetStores() {
    getRegistry().forEach((store) => store.reset());
    console.log('RESET STORES');
}
