import { Box } from '@mui/material';

import img from '../../../assets/logo.jpeg';
import { urls } from '../../util/routes';
import { AppLink } from '../base/AppLink';

interface LogoProps {
    size?: string;
}
export function Logo(props: LogoProps) {
    return (
        <Box height={props.size ?? '4rem'} width={props.size ?? '7.5rem'}>
            <AppLink to={urls.home}>
                <Box
                    sx={{
                        color: 'text.primary',
                        ':hover': { color: 'secondary.main' },
                    }}
                >
                    <LogoImg {...props} />
                </Box>
            </AppLink>
        </Box>
    );
}

export function LogoImg(props: LogoProps) {
    return (
        <img
            src={img}
            alt="applept16 Logo"
            height="200"
            width="200"
            style={{
                maxHeight: props.size ?? '7.5rem',
                maxWidth: props.size ?? '7.5rem',
                border: '3px',
                borderStyle: 'solid',
                borderRadius: '50%',
                borderColor: 'primary',
            }}
        />
    );
}
