import { Box, Grid, ImageList, Stack } from '@mui/material';

import { useToolUIFilter } from '../../elf/repo/tool';
import { allToolTags, ToolTag } from '../../elf/types/ToolTypes';
import { ToolTagChip } from './ToolTagChip';

export function ToolsFilter() {
    const toolFilter = useToolUIFilter();
    return (
        <Box maxWidth="40rem">
            {allToolTags.map((tag: ToolTag) => (
                <ToolTagChip
                    key={tag}
                    toolTag={tag}
                    active={toolFilter.includes(tag)}
                />
            ))}
        </Box>
    );
}
