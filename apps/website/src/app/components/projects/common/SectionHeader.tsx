import { Box, Divider } from '@mui/material';
import { ReactNode } from 'react';
import { AppTypography } from '../../base/AppTypography';

export function SectionHeader({ children }: { children: ReactNode }) {
    return (
        <Box>
            <Divider flexItem variant="fullWidth">
                <AppTypography variant="h6" color="text.primary">
                    {children}
                </AppTypography>
            </Divider>
        </Box>
    );
}
