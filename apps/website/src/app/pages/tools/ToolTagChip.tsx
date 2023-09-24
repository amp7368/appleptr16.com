import { Chip } from '@mui/material';

import { AppTypography } from '../../components/base/AppTypography';
import { setToolUI } from '../../elf/repo/tool';
import { ToolTag } from '../../elf/types/ToolTypes';
import { lightShadows } from '../../util/lightShadow';

export interface ToolTagChipProps {
    toolTag: ToolTag;
    active: boolean;
}
export function ToolTagChip({ toolTag, active }: ToolTagChipProps) {
    function onDelete(): void {
        setToolUI('toolTags', ([...tags]) =>
            tags.filter((tag) => toolTag !== tag)
        );
    }
    return (
        <Chip
            label={
                <AppTypography
                    variant="h6"
                    color={active ? 'default' : 'secondary'}
                    fontWeight={500}
                >
                    {toolTag}
                </AppTypography>
            }
            onClick={active ? onDelete : () => setToolUI('toolTags', [toolTag])}
            onDelete={active ? onDelete : undefined}
            color={active ? 'secondary' : 'default'}
            sx={{ boxShadow: lightShadows[10], margin: 1 }}
        />
    );
}
