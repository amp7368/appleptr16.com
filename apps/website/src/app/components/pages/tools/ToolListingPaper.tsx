import { Button, Grid } from '@mui/material';
import { AppPaper } from '../../base/AppPaper';
import { AppTypography } from '../../base/AppTypography';
import { ToolDisplay } from '../../common/ToolDisplay';
import { ToolValue, ToolTag, Tool } from '../../types/ToolTypes';

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
