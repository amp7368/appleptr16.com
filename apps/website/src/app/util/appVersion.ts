import { environment } from '../../environments/environment';

const APP_VERSION = '2.0.1';
export function verifyAppVersion() {
    const currentVersion = localStorage.getItem('version');
    if (currentVersion !== APP_VERSION) {
        sessionStorage.clear();
        localStorage.clear();
        localStorage.setItem('version', APP_VERSION);
        if (!environment.production)
            console.log('Upgrading version to ' + APP_VERSION);
    }
}
