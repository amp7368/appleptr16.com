import { Stack } from '@mui/material';

import { ProjectSectionProps } from '../../../elf/types/ProjectSectionTypes';
import { ProjectUrlSection } from '../base/ProjectUrlSection';
import { Bulletpoint } from '../common/BulletPoint';
import { SectionHeader } from '../common/SectionHeader';

export function ProjectSectionContent(props: ProjectSectionProps) {
    return (
        <Stack padding={2} justifyContent="space-between">
            <Stack display="flex" direction="row" maxWidth="65rem" spacing={4}>
                <Stack maxWidth={`${100 / 3}%`} flexGrow={0}>
                    <SectionHeader>Summary</SectionHeader>
                    {props.summary.map((text, i) => (
                        <Bulletpoint key={i}>{text}</Bulletpoint>
                    ))}
                </Stack>
                <Stack maxWidth={`${100 / 3}%`} flexGrow={0}>
                    <SectionHeader>Comments</SectionHeader>
                    {props.comments.map((text, i) => (
                        <Bulletpoint key={i}>{text}</Bulletpoint>
                    ))}
                </Stack>
                <Stack width={`${100 / 3}%`} flexGrow={1}>
                    <ProjectUrlSection urls={props.urls} />
                </Stack>
            </Stack>
        </Stack>
    );
}
