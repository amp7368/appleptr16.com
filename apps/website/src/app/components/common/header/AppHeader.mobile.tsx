import { AppBar, Divider, Stack } from '@mui/material';

import { appBarColor } from '../../../util/appTheme';
import { urls } from '../../../util/routes';
import { Logo } from '../Logo';
import { AppHeaderLink } from './AppHeaderLink';
import { AppHeaderTitle } from './AppHeaderTitle';

export function AppHeaderMobile() {
    return (
        <Stack marginBottom={3}>
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
                        <AppHeaderLink route={urls.projects} title="Projects" />
                        <AppHeaderLink route={urls.work} title="Work" />
                        <AppHeaderLink route={urls.tools} title="Tools" />
                    </Stack>
                </Stack>
            </AppBar>
            <AppHeaderTitle />
        </Stack>
    );
}
