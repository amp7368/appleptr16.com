export const urls = {
    home: '/',
    projects: '/projects',
    tools: '/tools',
    work: '/work',
};
export const nav = {};
export function navTo(url: string) {
    window.location.href = url;
}
export function isPathname(path: string) {
    let loc = window.location.pathname;
    if (!path.endsWith('/')) path += '/';
    if (!loc.endsWith('/')) loc += '/';
    return path === loc;
}
