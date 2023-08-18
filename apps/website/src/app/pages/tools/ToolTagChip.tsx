import { Chip } from '@mui/material';

import { ToolTag } from '../../elf/types/ToolTypes';
import { setToolTags, setUIToolFilter } from '../../elf/ui/ToolUI.repository';
import { AppTypography } from '../../components/base/AppTypography';

export interface ToolTagChipProps {
    toolTag: ToolTag;
    active: boolean;
}
export function ToolTagChip({ toolTag, active }: ToolTagChipProps) {
    const onDelete: () => void = () =>
        setToolTags(([...tags]) => tags.filter((tag) => toolTag !== tag));
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
            onClick={() => setToolTags([toolTag])}
            onDelete={active ? onDelete : undefined}
            color={active ? 'secondary' : 'default'}
        />
    );
}
