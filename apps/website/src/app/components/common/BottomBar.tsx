import { Email, GitHub, LinkedIn, Web } from '@mui/icons-material';
import { AppBar, Box, Divider, Link, Stack, useTheme } from '@mui/material';
import { Container } from '@mui/system';
import { ReactNode } from 'react';
import { AppTypography } from '../base/AppTypography';
import { SectionHeader } from '../projects/common/SectionHeader';

import { Logo } from './Logo';

interface ContactInfoProps {
    title: string;
    href: string;
    value: string;
    icon: ReactNode;
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
                <Link color="secondary" variant="h6" href={props.href}>
                    {props.value}
                </Link>
            </Stack>
        </Box>
    );
}

export function BottomBar() {
    const appBarColor = '#333333';
    return (
        <AppBar
            position="static"
            sx={{
                marginTop: 5,
                position: 'static',
                bgcolor: appBarColor,
                zIndex: (theme) => theme.zIndex.appBar,
            }}
        >
            <Stack alignItems="center">
                <Stack
                    justifyContent="flex-start"
                    spacing={1}
                    alignItems="start"
                    direction="column"
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
                    />
                </Stack>
            </Stack>
        </AppBar>
    );
}
