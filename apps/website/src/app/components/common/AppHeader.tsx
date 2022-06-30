import { Box, AppBar, Button, Divider, Stack, useTheme } from '@mui/material';

import { urls } from '../../util/routes';
import { AppTypography } from '../base/AppTypography';
import { Logo } from './Logo';

interface AppLinkProps {
    route: string;
    title: string;
}
function AppLink(props: AppLinkProps) {
    return (
        <Button variant="text" color="secondary" href={props.route}>
            <AppTypography color="primary.contrastText" variant="h4">
                {props.title}
            </AppTypography>
        </Button>
    );
}

export function AppHeader() {
    const appBarColor = '#333333';
    return (
        <Stack direction="column">
            <AppBar
                position="static"
                sx={{
                    height: '4rem',
                    bgcolor: appBarColor,
                    zIndex: (theme) => theme.zIndex.appBar,
                }}
            >
                <Stack direction="row">
                    <Logo />
                    <Stack
                        justifyContent="flex-start"
                        spacing={4}
                        alignItems="center"
                        direction="row"
                        divider={
                            <Divider
                                flexItem
                                orientation="vertical"
                                variant="fullWidth"
                            />
                        }
                    >
                        <AppLink route={urls.work} title="Work" />
                        <AppLink route={urls.projects} title="Projects" />
                        <AppLink route={urls.contact} title="Contact" />
                        <AppLink route={urls.backend} title="Portal" />
                    </Stack>
                </Stack>
            </AppBar>
            <Box
                alignSelf="start"
                height="auto"
                width="auto"
                bgcolor={appBarColor}
                zIndex={(theme) => theme.zIndex.appBar - 1000}
                sx={{ transform: 'perspective(10px) rotateX(-1deg)' }}
                paddingLeft="2.5rem"
                paddingRight="2.5rem"
                marginLeft="7.5rem"
            >
                <AppTypography
                    fontWeight={500}
                    sx={{ transform: 'perspective(10px) rotateX(1deg)' }}
                    color="text.primary"
                    variant="h3"
                    noWrap
                >
                    Aaron Peterham
                </AppTypography>
            </Box>
        </Stack>
    );
}
