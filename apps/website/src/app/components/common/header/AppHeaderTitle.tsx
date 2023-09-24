import { Box, Link, useTheme } from '@mui/material';

import { appBarColor } from '../../../util/appTheme';
import { urls } from '../../../util/routes';
import { AppTypography } from '../../base/AppTypography';

export function AppHeaderTitle() {
    return (
        <Box
            alignSelf="start"
            height="auto"
            width="auto"
            bgcolor={appBarColor}
            zIndex={(theme) => theme.zIndex.appBar - 1000}
            sx={{ transform: 'perspective(10px) rotateX(-1deg)' }}
            paddingLeft="2.5rem"
            paddingRight="2.5rem"
            paddingBottom={1}
            marginLeft="7.5rem"
        >
            <Link href={urls.home} color="secondary">
                <AppTypography
                    fontWeight={500}
                    sx={{
                        transform: 'perspective(10px) rotateX(1deg)',
                    }}
                    color="text.primary"
                    variant="h3"
                    noWrap
                >
                    Aaron Peterham
                </AppTypography>
            </Link>
        </Box>
    );
}
