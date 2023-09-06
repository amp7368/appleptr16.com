import { ReactNode } from 'react';

import { Box, Divider, TypographyProps } from '@mui/material';

import { AppTypography } from '../../../components/base/AppTypography';

export interface SectionHeaderProps {
    children: ReactNode;
    variant?: TypographyProps['variant'];
}
export function SectionHeader(props: SectionHeaderProps) {
    return (
        <Box>
            <Divider flexItem variant="fullWidth">
                <AppTypography
                    variant={props.variant ?? 'h6'}
                    color="text.primary"
                >
                    {props.children}
                </AppTypography>
            </Divider>
        </Box>
    );
}
