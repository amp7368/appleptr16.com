import { SubDomain } from './links/SubDomain';

import { Box, Stack, ThemeProvider } from '@mui/material';

import { appTheme } from './themeManager';
import { ReactNode } from 'react';

interface PropsJustChildren {
    children?: ReactNode;
}
const StyledRoot = ({ children }: PropsJustChildren) => (
    <Box width="100vw" height="100vh" bgcolor="background.default">
        {children}
    </Box>
);
function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <StyledRoot>
                <Stack spacing={2} direction="column">
                    <SubDomain
                        name="ambrosia-loans"
                        newSubdomain="ambrosia-loans"
                    />
                    <SubDomain name="host" newSubdomain="host" />
                    <SubDomain name="docker" newSubdomain="docker" />
                    <SubDomain name="reposilite" newSubdomain="reposilite" />
                    <SubDomain name="ambrosia" newSubdomain="ambrosia" />
                    <SubDomain name="test" newSubdomain="test" />
                </Stack>
            </StyledRoot>
        </ThemeProvider>
    );
}

export default App;
