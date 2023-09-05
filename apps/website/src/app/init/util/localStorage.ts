function checkLocalStorage() {
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

const hasLocalStorageValue = checkLocalStorage();
const localOrSubstitute = hasLocalStorage() ? localStorage : sessionStorage;
export function hasLocalStorage() {
    return hasLocalStorageValue;
}

export function storageApiL<T>(apply: (storage: Storage) => T): T {
    try {
        return apply(localOrSubstitute);
    } catch (e) {
        return apply(sessionStorage);
    }
}
