import { Optional } from '@app/util';
import { Stack } from '@mui/material';

import { AppPaper } from '../../components/base/AppPaper';
import { AppTypography } from '../../components/base/AppTypography';
import { ToolDisplay } from '../../components/common/ToolDisplay';
import { Tool } from '../../elf/types/ToolTypes';

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
                <ToolDisplay color="info" tool={activeTool} />
                <AppTypography color="secondary.main" variant="h6">
                    {activeTool.tags.join(', ')}
                </AppTypography>
                <Stack>
                    {(activeTool.comments ?? []).map((comment) => (
                        <AppTypography variant="body1" key={comment}>
                            {comment}
                        </AppTypography>
                    ))}
                </Stack>
                <AppTypography variant="body1">
                    {activeTool.extra}
                </AppTypography>
            </Stack>
        </AppPaper>
    );
}
