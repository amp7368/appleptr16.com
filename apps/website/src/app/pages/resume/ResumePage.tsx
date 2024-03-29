import { Box, Stack, ThemeProvider } from '@mui/material';
import { resumeTheme } from '../../util/pdfTheme';
import { ResumeEducation } from './ResumeEducation';
import { ResumeObjective } from './ResumeObjective';
import { ResumeContact } from './header/ResumeContact';
import { ResumeTitle } from './header/ResumeTitle';
import { ResumeProjectDivision } from './project/ResumeProjectDivision';
import { ResumeSkillsDivision } from './skills/ResumeSkillsDivision';
import { ResumeWorkDivision } from './work/ResumeWorkDivision';

function ResumeBasePage() {
    return (
        <Stack>
            <Stack
                marginBottom={1}
                direction="row"
                justifyContent="space-between"
            >
                <ResumeTitle />
                <ResumeContact />
            </Stack>
            <ResumeSkillsDivision />
            <ResumeObjective />
            <ResumeProjectDivision />
            <ResumeWorkDivision />
            <ResumeEducation />
        </Stack>
    );
}

export function ResumePage() {
    return (
        <ThemeProvider theme={resumeTheme}>
            <Stack
                id="resume_page"
                alignItems="center"
                maxWidth="100vw"
                width="100%"
            >
                <Box
                    height="11in"
                    maxHeight="11in"
                    width="8.5in"
                    maxWidth="8.5in"
                    color="text.primary"
                    bgcolor="background.default"
                    padding="0.5in"
                >
                    <ResumeBasePage />
                </Box>
            </Stack>
        </ThemeProvider>
    );
}
