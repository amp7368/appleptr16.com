import { Optional } from '@app/util';
import { Box, Button, ButtonProps, Stack, Tooltip } from '@mui/material';

import { useCallback } from 'react';
import { setToolUI, useTool } from '../../elf/repo/tool';
import { Tool } from '../../elf/types/ToolTypes';
import { lightShadows } from '../../util/lightShadow';
import { urls, useIsPathname } from '../../util/routes';
import { AppLink } from '../base/AppLink';
import { AppTypography } from '../base/AppTypography';
import { ToolTipTypography } from '../base/ToolTipTypography';
import { Variant } from '@mui/material/styles/createTypography';

type ToolID = {
    id: string;
    extra?: string[];
};
export type ToolDisplayProps = (ToolID | { tool: Tool }) & {
    color?: ButtonProps['color'];
};

export function ToolDisplay(props: ToolDisplayProps) {
    let toolId = 'id' in props ? props.id : props.tool.id;

    const tool: Tool | undefined = useTool(toolId);
    if (!tool) return null;
    const isToolsPath = useIsPathname(urls.tools);
    const onToolClick = useCallback(
        () => setToolUI('active', tool),
        [tool, isToolsPath]
    );
    return (
        <Tooltip
            disableInteractive
            title={
                <ToolTipTypography
                    Wrapper={(props) => <Stack divider={<br />} {...props} />}
                >
                    {tool.comments ?? 'No description'}
                </ToolTipTypography>
            }
        >
            <Box>
                <AppLink to={urls.tools} onClick={onToolClick}>
                    <Button
                        variant="outlined"
                        color={props.color ?? 'secondary'}
                        size="small"
                        sx={{ boxShadow: lightShadows[5] }}
                    >
                        <AppTypography variant="body1" textTransform="none">
                            {tool.id}
                        </AppTypography>
                    </Button>
                </AppLink>
            </Box>
        </Tooltip>
    );
}
