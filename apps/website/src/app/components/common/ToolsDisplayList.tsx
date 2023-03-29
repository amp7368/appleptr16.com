import { Stack } from '@mui/material';
import { ToolNotes } from '../../elf/types/ToolTypes';

import { ToolDisplay } from './ToolDisplay';

export interface ToolsDisplayListProps {
    toolIds: Record<string, ToolNotes>;
}
export function ToolsDisplayList({ toolIds }: ToolsDisplayListProps) {
    return (
        <Stack direction="column" spacing={1} justifyContent="flex-end">
            {Object.entries(toolIds).map(([id, tool]) => (
                <ToolDisplay key={id} id={id} extra={tool.extra} />
            ))}
        </Stack>
    );
}
