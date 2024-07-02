import './app.css';
import './app/init';
import 'highlight.js/styles/base16/solar-flare.min.css';

import { StrictMode, createElement } from 'react';
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
else {
    document.head.innerHTML +=
        '<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>';
}
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
