import { Optional } from '@app/util';
import { Button, Stack } from '@mui/material';

import { Launch } from '@mui/icons-material';
import { AppLink } from '../../components/base/AppLink';
import { AppPaper } from '../../components/base/AppPaper';
import { AppTypography } from '../../components/base/AppTypography';
import { ToolDisplay } from '../../components/common/ToolDisplay';
import { Tool } from '../../elf/types/ToolTypes';
import { lightShadows } from '../../util/lightShadow';
import { ToolTagChip } from './ToolTagChip';

interface ToolDescriptionProps {
    activeTool: Optional<Tool>;
}
export function ToolDescription({ activeTool }: ToolDescriptionProps) {
    if (!activeTool) return null;
    return (
        <AppPaper>
            <Stack
                direction="column"
                spacing={2}
                padding={3}
                maxWidth="20rem"
                alignItems="center"
                color="primary.contrastText"
            >
                <AppTypography color="text.primary" variant="h4">
                    {activeTool.id}
                </AppTypography>
                <Stack direction="row" spacing={1}>
                    {activeTool.tags.map((tag) => (
                        <ToolTagChip key={tag} toolTag={tag} active={false} />
                    ))}
                </Stack>
                <Stack>
                    {(activeTool.comments ?? []).map((comment) => (
                        <AppTypography variant="body1" key={comment}>
                            {comment}
                        </AppTypography>
                    ))}
                </Stack>
                {activeTool.links?.map((link) => (
                    <AppLink key={link.href} to={link.href} newTab>
                        <Button
                            variant="outlined"
                            color="secondary"
                            sx={{
                                boxShadow: lightShadows[5],
                                textTransform: 'none',
                            }}
                        >
                            <Stack direction="row" spacing={1}>
                                <AppTypography
                                    color="info"
                                    sx={{ textDecorationLine: 'underline' }}
                                >
                                    {link?.title ?? 'Website'}
                                </AppTypography>
                                <Launch />
                            </Stack>
                        </Button>
                    </AppLink>
                ))}
                <AppTypography variant="body1">
                    {activeTool.extra}
                </AppTypography>
            </Stack>
        </AppPaper>
    );
}
