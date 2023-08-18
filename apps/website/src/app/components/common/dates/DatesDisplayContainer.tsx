import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, Stack, SvgIconProps } from '@mui/material';
import { ReactNode } from 'react';

const expandIconProps: SvgIconProps = {
    fontSize: 'large',
    color: 'primary',
};

export interface DatesDisplayContainerProps {
    children: ReactNode;
    isExpanded: boolean;
    setExpanded: () => void;
}
export function DatesDisplayContainer(props: DatesDisplayContainerProps) {
    const expandIcon = props.isExpanded ? (
        <ExpandLess {...expandIconProps} />
    ) : (
        <ExpandMore {...expandIconProps} />
    );
    return (
        <Box
            padding={1}
            border="solid 1px"
            borderColor="divider"
            onClick={props.setExpanded}
            sx={{ cursor: 'pointer' }}
        >
            <Stack direction="row" alignItems="center" spacing={1}>
                {expandIcon}
                <Stack>{props.children}</Stack>
            </Stack>
        </Box>
    );
}
