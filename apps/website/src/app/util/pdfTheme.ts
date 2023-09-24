import { createTheme, ThemeOptions } from '@mui/material/styles';

export const defaultThemeOptions: ThemeOptions = {
    typography: {
        fontFamily: 'Roboto',
        h1: { fontSize: '12mm', lineHeight: '12mm', fontWeight: 500 },
        h2: { fontSize: '7mm', lineHeight: '7mm', fontWeight: 500 },
        h3: { fontSize: '5mm', lineHeight: '5mm', fontWeight: 500 },
        h4: { fontSize: '4mm', lineHeight: '4mm' },
        body1: { fontSize: '4mm', lineHeight: '4mm' },
        subtitle1: { fontSize: '6mm', lineHeight: '6mm' },
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#cc174a',
        },
        secondary: {
            main: '#39476c',
        },
        background: {
            default: '#fff',
            paper: '#623492',
            card: '#333333',
        },
        text: {
            primary: '#000',
            secondary: '#000',
        },
        divider: '#cc174a',
        info: { main: '#cc174a' },
        error: { main: '#753535' },
    },
};
export const resumeTheme = createTheme(defaultThemeOptions);
