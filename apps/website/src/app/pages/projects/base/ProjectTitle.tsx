import { ChevronRight, ExpandLess } from '@mui/icons-material';
import { Stack, SvgIconProps, useTheme } from '@mui/material';
import { AppTypography } from '../../../components/base/AppTypography';
import { ExpandIcon } from './ExpandIcon';

export interface ProjectTitleProps {
    title: string;
    isExpanded: boolean;
    disableExpand?: boolean;
    toggleExpanded: () => void;
}
export function ProjectTitle(props: ProjectTitleProps) {
    const { palette } = useTheme();

    const iconProps: SvgIconProps = {
        sx: { fontSize: '3rem' },
        color: props.isExpanded ? 'secondary' : 'primary',
    };

    let color: string;
    let tooltip: string;
    if (props.isExpanded) {
        color = palette.secondary.main;
        tooltip = 'Collapse project sections';
    } else if (props.disableExpand) {
        color = palette.error.main;
        tooltip = 'No sections for project';
    } else {
        color = palette.primary.main;
        tooltip = 'Expand project to show sections';
    }

    if (props.isExpanded) {
        return (
            <Stack alignItems="center" direction="row">
                <ExpandIcon
                    color={color}
                    onClick={props.toggleExpanded}
                    icon={<ExpandLess {...iconProps} />}
                    tooltip={tooltip}
                />
                <AppTypography
                    color="text.primary"
                    variant="h2"
                    fontWeight={500}
                >
                    {props.title}
                </AppTypography>
            </Stack>
        );
    }
    return (
        <Stack>
            <ExpandIcon
                color={color}
                onClick={props.toggleExpanded}
                disabled={props.disableExpand}
                icon={<ChevronRight {...iconProps} />}
                tooltip={tooltip}
            />
            <AppTypography color="text.primary" variant="h5" fontWeight={500}>
                {props.title}
            </AppTypography>
        </Stack>
    );
}
