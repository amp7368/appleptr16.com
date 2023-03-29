import { Optional } from '@app/util';
import { Button } from '@mui/material';
import { Tool } from '../../elf/types/ToolTypes';

import { setUIToolFilter, useTool } from '../../elf/ui/ToolUI.repository';
import { AppTypography } from '../base/AppTypography';

type ToolID = {
    id: string;
    extra?: string[];
};
export type ToolDisplayProps = ToolID | { tool: Tool };
export function ToolDisplay(props: ToolDisplayProps) {
    let tool: Optional<Tool> = undefined;
    if ('id' in props) {
        tool = useTool(props.id);
        if (tool) tool.extra = props.extra;
    } else tool = props.tool;
    if (!tool) return null;
    return (
        <Button
            variant="contained"
            size="small"
            onClick={() => setUIToolFilter('active', tool)}
        >
            <AppTypography variant="body1">{tool.id}</AppTypography>
        </Button>
    );
}
