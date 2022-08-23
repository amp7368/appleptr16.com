import { Stack } from '@mui/material';
import { useMemo } from 'react';

import { useTools, useUIToolFilter } from '../../../elf/ui/ToolUI.repository';
import { Page } from '../../common/Page';
import { Tool, ToolTag, toolTagValues } from '../../types/ToolTypes';
import { ToolDescription } from './ToolDescription';
import { ToolListingPaper } from './ToolListingPaper';
import { ToolTagChip } from './ToolTagChip';

export function ToolsPage() {
    const toolUI = useUIToolFilter();
    let tools: Tool[] = useTools();
    if (toolUI.toolTags.length !== 0)
        tools = tools.filter((tool) => {
            for (const tag of tool.tags)
                if (toolUI.toolTags.includes(tag)) return true;
            return false;
        });
    return (
        <Page
            title="Tools"
            filter={
                <Stack
                    border={2}
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
                            active={toolUI.toolTags.includes(tag)}
                        />
                    ))}
                </Stack>
            }
        >
            <Stack direction="row" spacing={3}>
                <ToolListingPaper tools={tools} />
                <ToolDescription activeTool={toolUI.active} />
            </Stack>
        </Page>
    );
}
