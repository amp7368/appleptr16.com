import { Box, CssBaseline, Stack } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { enableElfProdMode } from '@ngneat/elf';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app/App';
import { BottomBar } from './app/components/common/BottomBar';
import { AppHeader } from './app/components/common/header/AppHeader';
import { CookieConsent } from './app/components/cookie/CookieConsent';
import { defaultTheme } from './app/util/appTheme';
import { environment } from './environments/environment';

if (environment.production) enableElfProdMode();

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
    <StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Stack justifyContent="space-between" minHeight="100vh">
                <Box>
                    <AppHeader />
                    <App />
                </Box>
                <CookieConsent />
                <BottomBar />
            </Stack>
        </ThemeProvider>
    </StrictMode>
);
