import { Stack } from '@mui/material';
import { Bulletpoint } from '../../pages/projects/common/BulletPoint';
import { SectionHeader } from '../../pages/projects/common/SectionHeader';

export interface SummaryDisplayProps {
    summary: string[];
    comments: string[];
}
export function SummaryDisplay({ summary, comments }: SummaryDisplayProps) {
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
