import { Box, Link } from '@mui/material';

import img from '../../../assets/logo.jpeg';
import { urls } from '../../util/routes';

interface LogoProps {
    size?: string;
    color?: string;
}
export function Logo(props: LogoProps) {
    return (
        <Box height={props.size ?? '4rem'} width={props.size ?? '7.5rem'}>
            <Link href={urls.home} color={props.color ?? 'text.primary'}>
                <LogoImg {...props} />
            </Link>
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
