import { Button, Stack } from '@mui/material';

import { AppTypography } from '../../base/AppTypography';
import { ProjectTool, ProjectToolNotes } from '../ProjectTypes';

export interface ProjectToolsProps {
    tools: Record<string, ProjectToolNotes | ProjectTool>;
}
export function ProjectTools({ tools }: ProjectToolsProps) {
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
