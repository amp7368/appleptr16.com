import { AppTypography } from '../../../base/AppTypography';

export interface ProjectTitleProps {
    title: string;
}
export function ProjectTitle({ title }: ProjectTitleProps) {
    return (
        <AppTypography color="text.primary" variant="h5" fontWeight={500}>
            {title}
        </AppTypography>
    );
}
