import { Stack, useTheme } from '@mui/material';

import { AppPaper } from '../../../components/base/AppPaper';
import { ProjectProps } from '../../../elf/types/ProjectTypes';
import { ProjectTitle } from '../base/ProjectTitle';
import { ProjectSection } from './ProjectSection';

export type ProjectExpandableProps = ProjectProps & {
    toggleExpanded: () => void;
};
export function ProjectExpanded(props: ProjectExpandableProps) {
    const { palette, typography } = useTheme();
    const shadowColor = palette.secondary.main;
    const h4FontSize = typography.h4.fontSize;
    return (
        <AppPaper shadowColor={shadowColor}>
            <Stack padding={3} spacing={2} color="primary.contrastText">
                <ProjectTitle
                    isExpanded
                    toggleExpanded={props.toggleExpanded}
                    title={props.title}
                    subtitle={props.state}
                />
                <Stack marginTop={3} spacing={`calc(${h4FontSize} * 1.5)`}>
                    {props.sections.map((section) => (
                        <ProjectSection key={section.title} {...section} />
                    ))}
                </Stack>
            </Stack>
        </AppPaper>
    );
}
