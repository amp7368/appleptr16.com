import { Box } from '@mui/material';
import { ReactNode } from 'react';

export interface ResumeProjectContainerProps {
    children: ReactNode;
}
export function ResumeProjectContainer(props: ResumeProjectContainerProps) {
    return <Box>{props.children}</Box>;
}
