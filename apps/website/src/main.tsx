import './app/init';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CssBaseline, Stack } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { enableElfProdMode } from '@ngneat/elf';

import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { defaultTheme } from './app/util/appTheme';
import { useIsPathnameResume } from './app/util/routes';
import { environment } from './environments/environment';

if (environment.production) enableElfProdMode();

function WebPage() {
    if (useIsPathnameResume()) return <App />;
    return (
        <Stack justifyContent="space-between" minHeight="100vh">
            <App />
        </Stack>
    );
}
const container = document.getElementById('root') as HTMLElement;
createRoot(container).render(
    <StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <BrowserRouter>
                <WebPage />
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);
