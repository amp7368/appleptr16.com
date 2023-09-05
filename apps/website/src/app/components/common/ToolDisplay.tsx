import { Optional } from '@app/util';
import { Button, ButtonProps, Stack, Tooltip } from '@mui/material';
import { setToolUI, useTool } from '../../elf/repo/tool';
import { Tool } from '../../elf/types/ToolTypes';
import { lightShadows } from '../../util/lightShadow';
import { isPathname, navTo, urls } from '../../util/routes';
import { AppTypography } from '../base/AppTypography';
import { ToolTipTypography } from '../base/ToolTipTypography';

type ToolID = {
    id: string;
    extra?: string[];
};
export type ToolDisplayProps = (ToolID | { tool: Tool }) & {
    color?: ButtonProps['color'];
};

export function ToolDisplay(props: ToolDisplayProps) {
    let tool: Optional<Tool> = undefined;
    if ('id' in props) {
        tool = useTool(props.id);
        if (tool) tool.extra = props.extra;
    } else tool = props.tool;
    if (!tool) return null;
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
            <Button
                variant="outlined"
                color={props.color ?? 'secondary'}
                size="small"
                onClick={() => {
                    setToolUI('active', tool);
                    if (!isPathname(urls.tools)) navTo(urls.tools);
                }}
                sx={{ boxShadow: lightShadows[5] }}
            >
                <AppTypography variant="body1" textTransform="none">
                    {tool.id}
                </AppTypography>
            </Button>
        </Tooltip>
    );
}
