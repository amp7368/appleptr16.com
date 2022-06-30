import { Stack } from '@mui/material';
import { ReactNode } from 'react';

import { Bulletpoint } from '../common/BulletPoint';
import { SectionHeader } from '../common/SectionHeader';

export interface ProjectSummaryProps {
    summary: string[];
    comments: string[];
}
export function ProjectSummary({ summary, comments }: ProjectSummaryProps) {
    return (
        <Stack direction="column" paddingBottom={1}>
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
        </Stack>
    );
}
