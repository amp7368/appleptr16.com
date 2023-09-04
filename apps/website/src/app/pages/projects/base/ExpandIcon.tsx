import { Box, Stack, Tooltip, emphasize, useTheme } from '@mui/material';
import { common } from '@mui/material/colors';
import { ReactNode } from 'react';

export interface ExpandIconProps {
    color: string;
    disabled?: boolean;
    icon: ReactNode;
    onClick: () => void;
}
export function ExpandIcon(props: ExpandIconProps) {
    const title = props.disabled
        ? 'No sections for project'
        : 'Expand project to show sections';

    return (
        <Stack
            padding={1.5}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Tooltip disableInteractive title={title}>
                <Box
                    onClick={props.onClick}
                    display="flex"
                    sx={{
                        textAlign: 'center',
                        cursor: props.disabled ? 'not-allowed' : 'pointer',
                        borderWidth: 2,
                        borderRadius: 2,
                        borderColor: props.color,
                        borderStyle: 'solid',
                        ':hover': {
                            transform: props.disabled ? 'none' : 'scale(1.2)',
                            borderColor: emphasize(props.color, 0.3),
                            boxShadow: `0 0 10px 2px ${common.black}`,
                        },
                        color: props.color,
                        boxShadow: `0 0 8px 1px ${common.black}`,
                    }}
                >
                    {props.icon}
                </Box>
            </Tooltip>
        </Stack>
    );
}
