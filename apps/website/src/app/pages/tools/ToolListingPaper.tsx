import { Grid } from '@mui/material';
import { AppPaper } from '../../components/base/AppPaper';

import { ToolDisplay } from '../../components/common/ToolDisplay';
import { Tool } from '../../elf/types/ToolTypes';

export function ToolListingPaper({ tools }: { tools: Tool[] }) {
    return (
        <AppPaper>
            <Grid
                padding={3}
                container
                spacing={3}
                justifyContent="center"
                width="25rem"
            >
                {tools.map((tool) => (
                    <Grid item key={tool.id}>
                        <ToolDisplay tool={tool} />
                    </Grid>
                ))}
            </Grid>
        </AppPaper>
    );
}
