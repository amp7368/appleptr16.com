import { environment } from '../../environments/environment';
import { storageApiL } from './util/localStorage';

const APP_VERSION = '2.0.1';
const isNewVersionValue =
    storageApiL((storage) => storage.getItem('version')) !== APP_VERSION;

export function isNewVersion(): boolean {
    return isNewVersionValue;
}

if (isNewVersion()) {
    storageApiL((storage: Storage) => storage.clear());
    sessionStorage.clear();

    storageApiL((storage: Storage) => storage.setItem('version', APP_VERSION));
    if (!environment.production)
        console.log('Upgrading version to ' + APP_VERSION);
}
