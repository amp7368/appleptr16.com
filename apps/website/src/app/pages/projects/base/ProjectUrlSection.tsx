import { Grid } from '@mui/material';

import { ProjectUrl } from '../../../elf/types/ProjectTypes';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectUrlButton } from './ProjectUrlButton';

export interface ProjectUrlsProps {
    urls?: Record<string, ProjectUrl>;
}
export function ProjectUrlSection({ urls }: ProjectUrlsProps) {
    if (!urls) return null;
    return (
        <>
            <SectionHeader>Links</SectionHeader>
            <Grid container gap={1} justifyContent="center">
                {Object.entries(urls).map(([title, url]) => (
                    <ProjectUrlButton key={title} title={title} url={url} />
                ))}
            </Grid>
        </>
    );
}
