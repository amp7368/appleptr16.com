import { Box, Divider, Stack, useTheme } from '@mui/material';

import img from '../../../assets/common/Logo.jpeg';
import { urls } from '../../util/routes';
import { AppTypography } from '../base/AppTypography';

export function Logo() {
    return (
        <Box height="4rem" width="7.5rem">
            <a href={urls.home}>
                <img
                    src={img}
                    alt="applept16 Logo"
                    height="200"
                    width="200"
                    style={{
                        position: 'absolute',
                        maxHeight: '7.5rem',
                        maxWidth: '7.5rem',
                        border: '3px',
                        borderStyle: 'solid',
                        borderRadius: '50%',
                        borderColor: 'primary',
                    }}
                />
            </a>
        </Box>
    );
}
