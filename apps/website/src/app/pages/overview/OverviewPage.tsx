import { ReactNode } from 'react';

import { FormatQuote } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';

import { AppPaper } from '../../components/base/AppPaper';
import { AppTypography } from '../../components/base/AppTypography';
import { IncompletePage } from '../../components/common/IncompletePage';
import { Page } from '../../components/common/Page';
import { SectionHeader } from '../projects/common/SectionHeader';

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
                    title="Coolness unit"
                    summary={
                        <AppTypography fontWeight={500}>
                            I like to do cool things, but the reward vs coolness
                            function has a greater 2nd derivative than a linear
                            curve.
                            <br />
                            The law of diminishing returns applies here. Because
                            '1 coolness' things are plentiful, '2 coolness'
                            things are more valuable per unit. The more '1
                            coolness' things consumed, the less value the next
                            '1 coolness' thing will provide.
                        </AppTypography>
                    }
                />
                <OverviewSection
                    title="Programming"
                    summary={
                        <AppTypography fontWeight={500}>
                            I think of programming to be a form of art more than
                            a science. The math and logic skills required to
                            program are simply the brushes used to create the
                            artwork. I use programming as an outlet to express
                            myself.
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
