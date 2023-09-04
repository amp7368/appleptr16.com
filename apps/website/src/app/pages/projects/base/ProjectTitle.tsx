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
    if (props.isExpanded) color = palette.secondary.main;
    else if (props.disableExpand) color = palette.error.main;
    else color = palette.primary.main;

    if (props.isExpanded) {
        return (
            <Stack alignItems="center" direction="row">
                <ExpandIcon
                    color={color}
                    onClick={props.toggleExpanded}
                    icon={<ExpandLess {...iconProps} />}
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
            />
            <AppTypography color="text.primary" variant="h5" fontWeight={500}>
                {props.title}
            </AppTypography>
        </Stack>
    );
}
