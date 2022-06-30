import { Button, Stack } from '@mui/material';

import { AppTypography } from '../base/AppTypography';
import { Tool, ToolNotes } from '../types/ToolTypes';

export interface ToolsProps {
    tools: Record<string, ToolNotes | Tool>;
}
export function ToolsDisplay({ tools }: ToolsProps) {
    return (
        <Stack direction="column" spacing={1} justifyContent="flex-end">
            {Object.entries(tools).map(([id, tool]) => (
                <Button variant="contained" key={id} size="small">
                    <AppTypography variant="body1">{id}</AppTypography>
                </Button>
            ))}
        </Stack>
    );
}
