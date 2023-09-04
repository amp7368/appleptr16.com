import { Stack } from '@mui/material';
import { ToolTag, allToolTags } from '../../elf/types/ToolTypes';
import { useToolUI } from '../../elf/repo/tool';
import { ToolTagChip } from './ToolTagChip';

export function ToolsFilter() {
    const toolFilter = useToolUI('toolTags');
    return (
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
            {allToolTags.map((tag: ToolTag) => (
                <ToolTagChip
                    key={tag}
                    toolTag={tag}
                    active={toolFilter.includes(tag)}
                />
            ))}
        </Stack>
    );
}
