import { Box, Link, Theme, lighten } from '@mui/material';

import { appBarColor } from '../../../util/appTheme';
import { urls } from '../../../util/routes';
import { AppTypography } from '../../base/AppTypography';
import { AppLink } from '../../base/AppLink';

export function AppHeaderTitle() {
    return (
        <Box
            alignSelf="start"
            height="auto"
            width="auto"
            bgcolor={appBarColor}
            zIndex={({ zIndex }: Theme) => zIndex.appBar - 1000}
            sx={{ transform: 'perspective(10px) rotateX(-1deg)' }}
            paddingLeft="2.5rem"
            paddingRight="2.5rem"
            paddingBottom={1}
            marginLeft="7.5rem"
        >
            <Link component="div" color="secondary">
                <AppLink to={urls.home}>
                    <AppTypography
                        fontWeight={500}
                        sx={{
                            transform: 'perspective(10px) rotateX(1deg)',
                            textShadow: 'black 1px 1px 2px',
                        }}
                        color="text.primary"
                        variant="h3"
                        noWrap
                    >
                        Aaron Peterham
                    </AppTypography>
                </AppLink>
            </Link>
        </Box>
    );
}
