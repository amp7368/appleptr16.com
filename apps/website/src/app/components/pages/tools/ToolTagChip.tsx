import { Optional } from '@appleptr16/utilities';
import { Chip } from '@mui/material';
import { setUIToolFilter } from '../../../elf/ui/ToolUI.repository';
import { AppTypography } from '../../base/AppTypography';
import { ToolTag } from '../../types/ToolTypes';

export interface ToolTagChipProps {
    toolTag: ToolTag;
    active: boolean;
}
export function ToolTagChip({ toolTag, active }: ToolTagChipProps) {
    const onDelete: () => void = () =>
        setUIToolFilter('toolTags', (tags) =>
            [...tags].filter((tag) => toolTag !== tag)
        );
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
            onClick={() => setUIToolFilter('toolTags', (tags) => [toolTag])}
            onDelete={active ? onDelete : undefined}
            color={active ? 'secondary' : 'default'}
        />
    );
}
