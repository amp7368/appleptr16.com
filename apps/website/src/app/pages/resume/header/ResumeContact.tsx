import { Stack } from '@mui/material';
import { ReactNode } from 'react';
import { AppTypography } from '../../../components/base/AppTypography';

import { Email, GitHub, LinkedIn, Phone, Web } from '@mui/icons-material';
import { AppBar, Box, Divider } from '@mui/material';
import { AppLink } from '../../../components/base/AppLink';
import { ResumeSectionHeader } from '../common/ResumeSectionHeader';

export function ResumeContact() {
    return (
        <Stack>
            <ResumeSectionHeader>Contact</ResumeSectionHeader>
            <Stack alignItems="end">
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
            </Stack>
        </Stack>
    );
}

interface ContactInfoProps {
    title: string;
    value: string;
    href: string;
    icon: ReactNode;
    sameTab?: boolean;
}
function ContactInfo(props: ContactInfoProps) {
    return (
        <Stack
            direction="row"
            spacing={1}
            justifyContent="start"
            alignItems="center"
            color="secondary.main"
        >
            <Box
                color="secondary.main"
                sx={{ textDecorationLine: 'underline' }}
            >
                <AppLink to={props.href} newTab={!props.sameTab}>
                    <AppTypography color="text.primary" variant="body1">
                        {props.value}
                    </AppTypography>
                </AppLink>
            </Box>
            {props.icon}
        </Stack>
    );
}

function BottomBar() {
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
                        sameTab={true}
                        href="https://appleptr16.com"
                        value="appleptr16.com"
                    />
                </Stack>
            </Stack>
        </AppBar>
    );
}
