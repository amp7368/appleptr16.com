import { Box, Stack } from '@mui/material';
import { useResumeProjects } from '../../../elf/repo/resume/project/ResumeProject.repo';
import { ResumeSectionHeader } from '../common/ResumeSectionHeader';
import { ResumeProject } from './ResumeProject';
export function ResumeProjectDivision() {
    const projects = useResumeProjects();
    return (
        <Box>
            <ResumeSectionHeader>Projects</ResumeSectionHeader>
            <Stack marginTop={2} spacing={2}>
                {projects.map((proj) => (
                    <ResumeProject key={proj.title} {...proj} />
                ))}
            </Stack>
        </Box>
    );
}
