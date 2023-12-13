import { useLocation } from 'react-router-dom';

export const urls = {
    home: '/',
    projects: '/projects',
    tools: '/tools',
    work: '/work',
    resume: '/resume',
};
export const nav = {};
export function navTo(url: string) {
    window.location.href = url;
}
export function useIsPathname(path: string) {
    let loc = useLocation().pathname;
    if (!path.endsWith('/')) path += '/';
    if (!loc.endsWith('/')) loc += '/';
    return path === loc;
}
export function useIsPathnameResume() {
    return useIsPathname(urls.resume);
}
