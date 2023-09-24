import { Theme } from '@mui/material';

export function setBackground(theme: Theme, color?: string) {
    const element = document.getElementById('root');
    color = color ?? theme.palette.background.default;
    if (element != null) element.style.backgroundColor = color;
}
