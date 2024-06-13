import { Box, Stack } from '@mui/material';
import { useResumeWorks } from '../../../elf/repo/resume/work/ResumeWork.repo';
import { ResumeSectionHeader } from '../common/ResumeSectionHeader';
import { ResumeWork } from './ResumeWork';

export function ResumeWorkDivision() {
    const work = useResumeWorks();
    return (
        <Box>
            <ResumeSectionHeader>Work Experience</ResumeSectionHeader>
            <Stack marginTop={2} spacing={2}>
                {work.map((w) => (
                    <ResumeWork key={`${w.company}.${w.role}`} {...w} />
                ))}
            </Stack>
        </Box>
    );
}
