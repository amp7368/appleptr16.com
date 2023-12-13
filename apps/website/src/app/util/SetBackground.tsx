import { useTheme } from '@mui/material';
import { useIsPathnameResume } from './routes';

export function SetBackground() {
    let color;
    if (useIsPathnameResume()) color = '#eee';
    else color = useTheme().palette.background.default;

    const element = document.getElementById('root');
    if (element) element.style.backgroundColor = color;
    return <></>;
}
