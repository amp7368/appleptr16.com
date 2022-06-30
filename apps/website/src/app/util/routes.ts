export const urls = {
    home: '/',
    projects: '/projects',
    backend: '/backend',
    work: '/work',
    contact: '/contact',
};
export const nav = {};
export function navTo(url: string) {
    window.location.href = url;
}
