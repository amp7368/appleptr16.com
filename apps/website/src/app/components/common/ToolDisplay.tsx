import { Optional } from '@app/util';
import { Button, ButtonProps } from '@mui/material';
import { Tool } from '../../elf/types/ToolTypes';
import { setUIToolFilter, useTool } from '../../elf/ui/ToolUI.repository';
import { isPathname, navTo, urls } from '../../util/routes';
import { AppTypography } from '../base/AppTypography';

type ToolID = {
    id: string;
    extra?: string[];
};
export type ToolDisplayProps = { color?: ButtonProps['color'] } & (
    | ToolID
    | { tool: Tool }
);
export function ToolDisplay(props: ToolDisplayProps) {
    let tool: Optional<Tool> = undefined;
    if ('id' in props) {
        tool = useTool(props.id);
        if (tool) tool.extra = props.extra;
    } else tool = props.tool;
    if (!tool) return null;
    return (
        <Button
            variant="outlined"
            color={props.color ?? 'secondary'}
            size="small"
            onClick={() => {
                setUIToolFilter('active', tool);
                if (!isPathname(urls.tools)) navTo(urls.tools);
            }}
        >
            <AppTypography variant="body1" textTransform="none">
                {tool.id}
            </AppTypography>
        </Button>
    );
}
