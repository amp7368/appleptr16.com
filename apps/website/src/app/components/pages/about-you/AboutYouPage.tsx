import { Box, Stack } from '@mui/material';

import { AppSpeech } from '../../base/AppSpeech';
import { Page } from '../../common/Page';
import aboutYouData from '../../database/about-you.json';
import { AboutYouLink } from './AboutYouLink';

export function AboutYouPage() {
    return (
        <Page title="About You">
            <Stack direction="row" justifyContent="flex-start">
                <Box>
                    {Object.keys(aboutYouData).map((title) => (
                        <AboutYouLink route={title} />
                    ))}
                </Box>
                <Stack>
                    {Object.entries(aboutYouData).map(
                        ([title, speechContent]) => (
                            <AppSpeech
                                title={title}
                                content={speechContent.content.join('\n')}
                            />
                        )
                    )}
                </Stack>
            </Stack>
        </Page>
    );
}
