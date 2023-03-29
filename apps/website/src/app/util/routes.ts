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
