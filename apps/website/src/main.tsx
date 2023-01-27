import { Box, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import { enableElfProdMode } from '@ngneat/elf';
import { StrictMode } from 'react';
import { render } from 'react-dom';

import { App } from './app/App';
import { BottomBar } from './app/components/common/BottomBar';
import { AppHeader } from './app/components/common/header/AppHeader';
import { defaultTheme } from './app/util/appTheme';
import { environment } from './environments/environment';

render(
    <StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Stack justifyContent="space-between" minHeight="100vh">
                <Box>
                    <AppHeader />
                    <App />
                </Box>
                <BottomBar />
            </Stack>
        </ThemeProvider>
    </StrictMode>,
    document.getElementById('root')
);
if (environment.production) {
    enableElfProdMode();
}
