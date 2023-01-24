import { Page } from '../../common/Page';
import { IncompletePage } from '../../common/IncompletePage';
import { AppPaper } from '../../base/AppPaper';
import { AppTypography } from '../../base/AppTypography';
import { Box, Stack } from '@mui/material';
import { SectionHeader } from '../projects/common/SectionHeader';
import { ReactNode } from 'react';
import { FormatQuote } from '@mui/icons-material';

interface OverviewSectionProps {
    title: string;
    summary: ReactNode;
}
function OverviewSection(props: OverviewSectionProps) {
    return (
        <AppPaper>
            <Stack
                direction="column"
                maxWidth="20rem"
                padding={3}
                paddingTop={1}
                spacing={1}
                color="secondary.main"
            >
                <SectionHeader>{props.title}</SectionHeader>
                {props.summary}
            </Stack>
        </AppPaper>
    );
}
interface QuoteProps {
    children: ReactNode;
    color: string;
    quoteSize: 'inherit' | 'large' | 'medium' | 'small';
}
function Quote(props: QuoteProps) {
    return (
        <Stack
            color={props.color}
            direction="row"
            justifyContent="space-evenly"
        >
            <Box alignSelf="start">
                <FormatQuote fontSize={props.quoteSize} />
            </Box>
            {props.children}
            <Box alignSelf="end">
                <FormatQuote fontSize={props.quoteSize} />
            </Box>
        </Stack>
    );
}
export function OverviewPage() {
    return (
        <Page title="Overview">
            <Stack direction="row" spacing={3}>
                <OverviewSection
                    title="Goal"
                    summary={
                        <AppTypography fontWeight={500}>
                            I like to do cool things. Programming is a great
                            outlet for doing cool things.
                        </AppTypography>
                    }
                />
                <OverviewSection
                    title="Mental Health"
                    summary={
                        <Stack spacing={1} alignItems="center">
                            <AppTypography fontWeight={500}>
                                I'm an advocate for mental health awareness.
                                Currently, my challenge stems from the
                                following:
                            </AppTypography>
                            <Quote quoteSize="medium" color="text.primary">
                                <AppTypography
                                    variant="body1"
                                    fontWeight={600}
                                    textAlign="center"
                                >
                                    What are you going to do and accomplish now
                                    that you feel better?
                                </AppTypography>
                            </Quote>
                            <Quote quoteSize="small" color="text.secondary">
                                <AppTypography
                                    variant="h5"
                                    fontStyle="oblique"
                                    textAlign="center"
                                >
                                    less
                                </AppTypography>
                            </Quote>
                        </Stack>
                    }
                />
            </Stack>
        </Page>
    );
}
