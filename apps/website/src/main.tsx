import './app/init';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Box, CssBaseline, Stack } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { enableElfProdMode } from '@ngneat/elf';

import { App } from './app/App';
import { BottomBar } from './app/components/common/BottomBar';
import { AppHeader } from './app/components/common/header/AppHeader';
import { CookieConsent } from './app/components/cookie/CookieConsent';
import { defaultTheme } from './app/util/appTheme';
import { environment } from './environments/environment';
import { isPathname } from './app/util/routes';

if (environment.production) enableElfProdMode();

function WebPage() {
    if (isPathname('/resume')) return <App />;
    return (
        <Stack justifyContent="space-between" minHeight="100vh">
            <Box>
                <AppHeader />
                <App />
            </Box>
            <CookieConsent />
            <BottomBar />
        </Stack>
    );
}
const container = document.getElementById('root') as HTMLElement;
createRoot(container).render(
    <StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <WebPage />
        </ThemeProvider>
    </StrictMode>
);
