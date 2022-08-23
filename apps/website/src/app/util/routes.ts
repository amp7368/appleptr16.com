export const urls = {
    home: '/',
    egg: '/egg',
    projects: '/projects',
    tools: '/tools',
    backend: '/backend',
    work: '/work',
};
export const nav = {};
export function navPathTo(url: string) {
    location.pathname = url;
}
