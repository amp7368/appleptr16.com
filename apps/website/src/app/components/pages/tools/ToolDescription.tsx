import { Optional } from '@appleptr16/utilities';
import { Stack } from '@mui/material';

import { AppPaper } from '../../base/AppPaper';
import { AppTypography } from '../../base/AppTypography';
import { ToolDisplay } from '../../common/ToolDisplay';
import { Tool } from '../../types/ToolTypes';

interface ToolDescriptionProps {
    activeTool: Optional<Tool>;
}
export function ToolDescription({ activeTool }: ToolDescriptionProps) {
    if (!activeTool) return null;
    return (
        <AppPaper>
            <Stack
                direction="column"
                spacing={1}
                padding={3}
                maxWidth="20rem"
                alignItems="center"
                color="primary.contrastText"
            >
                <ToolDisplay tool={activeTool} />
                <AppTypography color="text.primary" variant="h6">
                    {activeTool.tags.join(', ')}
                </AppTypography>
                <AppTypography variant="body1">
                    {activeTool.comments}
                </AppTypography>
                <AppTypography variant="body1">
                    {activeTool.extra}
                </AppTypography>
            </Stack>
        </AppPaper>
    );
}
