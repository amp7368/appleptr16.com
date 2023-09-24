import { ReactNode } from 'react';

import { Box, emphasize, lighten, Stack, Tooltip } from '@mui/material';
import { common } from '@mui/material/colors';

import { ToolTipTypography } from '../../../components/base/ToolTipTypography';

export interface ExpandIconProps {
    color: string;
    disabled?: boolean;
    icon: ReactNode;
    tooltip: ReactNode | ReactNode[];
    onClick: () => void;
}
export function ExpandIcon(props: ExpandIconProps) {
    return (
        <Stack
            padding={1.5}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Tooltip
                disableInteractive
                describeChild
                componentsProps={{
                    tooltip: {
                        sx: {
                            bgcolor: props.color,
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: emphasize(props.color, 0.3),
                        },
                    },
                }}
                title={<ToolTipTypography>{props.tooltip}</ToolTipTypography>}
            >
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
