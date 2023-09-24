import { Box, Stack } from '@mui/material';
import { useResumeProjects } from '../../elf/repo/resume/project/ResumeProject.repo';
import { ResumeSectionHeader } from './common/ResumeSectionHeader';
import { ResumeProject } from './project/ResumeProject';
export function ResumeProjectDivision() {
    const projects = useResumeProjects();
    return (
        <Box>
            <ResumeSectionHeader>Projects</ResumeSectionHeader>
            <Stack>
                <ResumeProject {...projects[0]} />
            </Stack>
        </Box>
    );
}
