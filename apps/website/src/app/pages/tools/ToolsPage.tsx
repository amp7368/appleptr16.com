import { Stack } from '@mui/material';

import { Page } from '../../components/common/Page';
import { useToolUI } from '../../elf/repo/tool';
import { ToolDescription } from './ToolDescription';
import { ToolListingPaper } from './ToolListingPaper';
import { ToolsFilter } from './ToolsFilter';

export function ToolsPage() {
    const activeTool = useToolUI('active');
    return (
        <Page title="Tools" filter={<ToolsFilter />}>
            <Stack direction="row" spacing={3}>
                <ToolListingPaper />
                <ToolDescription activeTool={activeTool} />
            </Stack>
        </Page>
    );
}
