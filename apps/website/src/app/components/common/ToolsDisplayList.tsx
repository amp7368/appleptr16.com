import { Stack } from '@mui/material';

import { ToolNotes } from '../../elf/types/ToolTypes';
import { ToolDisplay } from './ToolDisplay';

export interface ToolsDisplayListProps {
    toolIds: Record<string, ToolNotes>;
    row?: boolean;
}
export function ToolsDisplayList({ toolIds, row }: ToolsDisplayListProps) {
    return (
        <Stack
            direction={row ? 'row' : 'column'}
            spacing={1}
            justifyContent={row ? 'center' : 'flex-end'}
            alignItems="start"
        >
            {Object.entries(toolIds).map(([id, tool]) => (
                <ToolDisplay key={id} id={id} extra={tool.extra} />
            ))}
        </Stack>
    );
}
