import { Link, Stack, useTheme } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { AppTypography } from '../../base/AppTypography';
export interface AboutYouLinkProps {
    route: string;
}
export function AboutYouLink(props: AboutYouLinkProps) {
    const color = useTheme().palette.text.primary;
    return (
        <Link href={`${location.pathname}#${props.route}`} underline="hover">
            <Stack spacing={1} alignItems="center" direction="row">
                <LinkIcon fontSize="large" sx={{ color }} />
                <AppTypography variant="h5" sx={{ color }}>
                    {props.route}
                </AppTypography>
            </Stack>
        </Link>
    );
}
