import { ReactNode } from 'react';

import { Email, GitHub, LinkedIn, Web } from '@mui/icons-material';
import { AppBar, Box, Divider, Stack } from '@mui/material';

import { useIsPathnameResume } from '../../util/routes';
import { AppLink } from '../base/AppLink';
import { AppTypography } from '../base/AppTypography';

interface ContactInfoProps {
    title: string;
    href: string;
    value: string;
    icon: ReactNode;
    sameTab?: boolean;
}
function ContactInfo(props: ContactInfoProps) {
    return (
        <Box>
            <Stack
                direction="row"
                spacing={1}
                justifyContent="start"
                alignItems="center"
            >
                {props.icon}
                <AppLink to={props.href} newTab={!props.sameTab}>
                    <AppTypography color="secondary" variant="h6">
                        {props.value}
                    </AppTypography>
                </AppLink>
            </Stack>
        </Box>
    );
}

export function BottomBar() {
    if (useIsPathnameResume()) return null;
    const appBarColor = '#333333';
    return (
        <AppBar
            position="static"
            sx={{
                marginTop: 5,
                position: 'static',
                bgcolor: appBarColor,
                zIndex: ({ zIndex }) => zIndex.appBar,
            }}
        >
            <Stack alignItems="center">
                <Stack
                    justifyContent="flex-start"
                    spacing={1}
                    alignItems="start"
                    direction="column"
                    padding={3}
                >
                    <Divider variant="fullWidth" flexItem>
                        <AppTypography variant="h4">Contact</AppTypography>
                    </Divider>
                    <ContactInfo
                        icon={<Email />}
                        title="Email"
                        href="mailto:apeterham@gmail.com"
                        value="apeterham@gmail.com"
                    />
                    <ContactInfo
                        icon={<GitHub />}
                        title="Github"
                        href="https://github.com/amp7368"
                        value="github.com/amp7368"
                    />
                    <ContactInfo
                        icon={<LinkedIn />}
                        title="LinkedIn"
                        href="https://linkedin.com/in/aaron-peterham"
                        value="in/aaron-peterham"
                    />
                    <ContactInfo
                        icon={<Web />}
                        title="Website"
                        href="https://appleptr16.com"
                        value="appleptr16.com"
                        sameTab
                    />
                </Stack>
            </Stack>
        </AppBar>
    );
}
