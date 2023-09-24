import { ReactNode } from 'react';

import { Box, Container, Stack, Typography } from '@mui/material';

import { AppPaper } from '../base/AppPaper';
import { AppTypography } from '../base/AppTypography';

export interface PageProps {
    title: string;
    filter?: ReactNode;
    children: ReactNode;
    alignItems?: 'center' | 'flex-start';
}
export function Page(props: PageProps) {
    return (
        <Stack
            direction="column"
            alignItems={props.alignItems ?? 'center'}
            padding={5}
            paddingTop={0}
            justifyContent="start"
            spacing={5}
        >
            <Container>
                <Stack direction="row" justifyContent="space-around">
                    <AppTypography
                        variant="h2"
                        fontWeight={500}
                        textTransform="capitalize"
                    >
                        {props.title}
                    </AppTypography>
                    {props.filter}
                </Stack>
            </Container>
            {props.children}
        </Stack>
    );
}
