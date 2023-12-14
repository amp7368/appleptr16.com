import {
    createTheme,
    emphasize,
    lighten,
    ThemeOptions,
} from '@mui/material/styles';

export const defaultThemeOptions: ThemeOptions = {
    components: {
        MuiCard: {
            defaultProps: {
                sx: {
                    width: { xs: '15rem', sm: '17.5rem', md: '20rem' },
                    padding: '0.75rem',
                    bgcolor: '#333333',
                },
            },
        },
    },
    typography: {
        fontFamily: 'Roboto',
        body1: {
            color: '#fff',
        },
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#7154d9',
        },
        secondary: {
            main: '#d9b354',
        },
        background: {
            default: '#232323',
            paper: '#623492',
            card: '#333333',
        },
        text: {
            primary: '#cc174a',
            secondary: '#649c3a',
        },
        divider: '#649c3a',
        info: { main: '#cc174a' },
        error: { main: '#753535' },
    },
};
export const appBarColor = '#011627';
export const defaultTheme = createTheme(defaultThemeOptions);
