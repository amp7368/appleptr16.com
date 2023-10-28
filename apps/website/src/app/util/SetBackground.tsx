import { useTheme } from '@mui/material';
import { urls, useIsPathname } from './routes';

export function SetBackground() {
    let color;
    if (useIsPathname(urls.resume)) color = '#eee';
    else color = useTheme().palette.background.default;

    const element = document.getElementById('root');
    if (element) element.style.backgroundColor = color;
    return <></>;
}
