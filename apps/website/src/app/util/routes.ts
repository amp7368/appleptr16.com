export const urls = {
    home: '/',
    egg: '/egg',
    projects: '/projects',
    tools: '/tools',
    backend: '/backend',
    work: '/work',
};
export const nav = {};
export function navTo(url: string) {
    window.location.href = url;
}
