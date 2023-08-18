import { getRegistry, Store } from '@ngneat/elf';
import { setEntities } from '@ngneat/elf-entities';
import {
    persistState,
    sessionStorageStrategy,
} from '@ngneat/elf-persist-state';

export function persist(store: Store, storeEntities: any[]) {
    persistState(store, { storage: sessionStorageStrategy });
    store.update(setEntities(storeEntities));
}
export function resetStores() {
    getRegistry().forEach((store) => store.reset());
    console.log('RESET STORES');
}
