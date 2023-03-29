import { Button, ImageList, ImageListItem } from '@mui/material';
import { ReactNode } from 'react';

import { AppTypography } from '../../../components/base/AppTypography';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectUrl } from '../../../elf/types/ProjectTypes';

export interface ProjectUrlsProps {
    urls?: Record<string, ProjectUrl>;
}
export function ProjectUrlSection({ urls }: ProjectUrlsProps) {
    if (!urls) return null;
    return (
        <>
            <SectionHeader>Links</SectionHeader>
            <ImageList variant="standard">
                {Object.entries(urls).map(([title, url]) => (
                    <ImageListItem key={title}>
                        <Button
                            variant="outlined"
                            size="small"
                            color="secondary"
                            href={url.link}
                            LinkComponent={'a'}
                        >
                            <AppTypography
                                noWrap
                                variant="body1"
                                textTransform="none"
                            >
                                {title}
                            </AppTypography>
                        </Button>
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}
