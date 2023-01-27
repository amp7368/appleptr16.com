import { AppBar, Button, Divider, Stack, useTheme } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ReactNode, useState } from 'react';
import { appBarColor } from '../../../util/appTheme';

import { urls } from '../../../util/routes';
import { AppTypography } from '../../base/AppTypography';
import { Logo } from '../Logo';
import { AppHeaderLink } from './AppHeaderLink';
import { AppHeaderTitle } from './AppHeaderTitle';

// interface AppLinkProps {
//     route: string;
//     title: string;
// }
// function AppLink(props: AppLinkProps) {
//     const color =
//         location.pathname === props.route
//             ? 'secondary'
//             : 'primary.contrastText';
//     return (
//         <Button variant="text" color="secondary" href={props.route}>
//             <AppTypography
//                 color={color}
//                 variant="h4"
//                 textTransform="capitalize"
//             >
//                 {props.title}
//             </AppTypography>
//         </Button>
//     );
// }

export function AppHeader() {
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
                        <AppHeaderLink route={urls.backend} title="Portal" />
                    </Stack>
                </Stack>
            </AppBar>
            <AppHeaderTitle />
        </Stack>
    );
}
