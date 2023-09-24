import { Stack } from '@mui/material';

import { ProjectUrl } from '../../elf/types/ProjectTypes';
import { ProjectUrlSection } from '../../pages/projects/base/ProjectUrlSection';
import { Bulletpoint } from '../../pages/projects/common/BulletPoint';
import { SectionHeader } from '../../pages/projects/common/SectionHeader';

export interface SummaryDisplayProps {
    summary: string[];
    comments: string[];
    urls?: Record<string, ProjectUrl>;
}
export function SummaryDisplay({
    summary,
    comments,
    urls,
}: SummaryDisplayProps) {
    return (
        <Stack maxWidth="35rem" direction="column" paddingBottom={1}>
            <SectionHeader>Summary</SectionHeader>
            <Stack direction="column">
                {summary.map((text, i) => (
                    <Bulletpoint key={i}>{text}</Bulletpoint>
                ))}
            </Stack>
            <SectionHeader>Comments</SectionHeader>
            <Stack direction="column">
                {comments.map((text, i) => (
                    <Bulletpoint key={i}>{text}</Bulletpoint>
                ))}
            </Stack>
            <ProjectUrlSection urls={urls} />
        </Stack>
    );
}
