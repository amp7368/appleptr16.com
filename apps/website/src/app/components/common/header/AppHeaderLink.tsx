import { Button, useTheme } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { AppLink } from '../../base/AppLink';
import { AppTypography } from '../../base/AppTypography';

export interface AppHeaderLinkProps {
    route: string;
    title: string;
    small?: boolean;
    newTab?: boolean;
}
export function AppHeaderLink(props: AppHeaderLinkProps) {
    const { palette } = useTheme();
    const textColor =
        useLocation().pathname === props.route
            ? palette.secondary.main
            : palette.grey[300];
    const textSize: Variant = props.small ? 'body1' : 'h4';
    const [isActive, setIsActive] = useState(false);
    return (
        <AppLink to={props.route} newTab={props.newTab}>
            <Button
                variant="text"
                sx={{
                    borderRadius: '2rem',
                    padding: 1,
                    paddingLeft: 3,
                    paddingRight: 3,
                }}
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
            >
                <AppTypography
                    color={textColor}
                    variant={textSize}
                    noWrap
                    textTransform="capitalize"
                    sx={{
                        ':after': {
                            content: '""',
                            position: 'absolute',
                            width: 'calc(100%)',
                            height: '2px',
                            bottom: 0,
                            left: 0,
                            bgcolor: 'secondary.main',
                            transition: 'transform 0.25s ease-out',
                            transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                            transformOrigin: isActive
                                ? 'bottom left'
                                : 'bottom right',
                        },
                        ':hover:after': {},
                    }}
                >
                    {props.title}
                </AppTypography>
            </Button>
        </AppLink>
    );
}
