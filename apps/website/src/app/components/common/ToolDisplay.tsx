import { Optional } from '@appleptr16/utilities';
import { Button } from '@mui/material';
import { setUIToolFilter, useTool } from '../../elf/ui/ToolUI.repository';
import { navPathTo, urls } from '../../util/routes';
import { AppTypography } from '../base/AppTypography';
import { ToolValue, ToolNotes, ToolTag, Tool } from '../types/ToolTypes';

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
            onClick={() => {
                setUIToolFilter('active', tool);
                if (location.pathname !== urls.tools) navPathTo(urls.tools);
            }}
        >
            <AppTypography variant="body1" textTransform="none">
                {tool.id}
            </AppTypography>
        </Button>
    );
}
