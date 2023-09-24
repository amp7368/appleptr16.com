import { Button, Tooltip } from '@mui/material';

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
            <Button
                variant="outlined"
                size="small"
                href={props.url.link}
                LinkComponent={'a'}
                color="secondary"
                sx={{ boxShadow: lightShadows[5] }}
            >
                <AppTypography noWrap variant="body1" textTransform="none">
                    {props.title}
                </AppTypography>
            </Button>
        </Tooltip>
    );
}
