import { Box, Button, Tooltip } from '@mui/material';

import { AppLink } from '../../../components/base/AppLink';
import { AppTypography } from '../../../components/base/AppTypography';
import { ToolTipTypography } from '../../../components/base/ToolTipTypography';
import { ProjectUrl } from '../../../elf/types/ProjectTypes';
import { lightShadows } from '../../../util/lightShadow';

export interface ProjectUrlButtonProps {
    title: string;
    url: ProjectUrl;
}
export function ProjectUrlButton(props: ProjectUrlButtonProps) {
    return (
        <Tooltip
            disableInteractive
            title={
                <ToolTipTypography>
                    {props.url.comment ?? 'No description'}
                </ToolTipTypography>
            }
        >
            <Box>
                <AppLink to={props.url.link}>
                    <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        sx={{ boxShadow: lightShadows[5] }}
                    >
                        <AppTypography
                            noWrap
                            variant="body1"
                            textTransform="none"
                        >
                            {props.title}
                        </AppTypography>
                    </Button>
                </AppLink>
            </Box>
        </Tooltip>
    );
}
