import { Stack } from '@mui/material';

import { Page } from '../../components/common/Page';
import { Tool, ToolTag, toolTagValues } from '../../elf/types/ToolTypes';
import {
    useToolUI,
    useTools,
    useUIToolFilter,
} from '../../elf/ui/ToolUI.repository';
import { ToolDescription } from './ToolDescription';
import { ToolListingPaper } from './ToolListingPaper';
import { ToolTagChip } from './ToolTagChip';

export function ToolsPage() {
    const activeTool = useToolUI('active');
    const toolTags = useUIToolFilter();
    let tools: Tool[] = useTools();
    if (toolTags.length !== 0)
        tools = tools.filter((tool) => {
            for (const tag of tool.tags)
                if (toolTags.includes(tag)) return true;
            return false;
        });
    return (
        <Page
            title="Tools"
            filter={
                <Stack
                    border={1}
                    borderRadius="5px"
                    borderColor="secondary.main"
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    padding={1}
                    spacing={1}
                >
                    {toolTagValues.map((tag: ToolTag) => (
                        <ToolTagChip
                            key={tag}
                            toolTag={tag}
                            active={toolTags.includes(tag)}
                        />
                    ))}
                </Stack>
            }
        >
            <Stack direction="row" spacing={3}>
                <ToolListingPaper tools={tools} />
                <ToolDescription activeTool={activeTool} />
            </Stack>
        </Page>
    );
}
