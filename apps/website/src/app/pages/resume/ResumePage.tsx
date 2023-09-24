import { Box, Stack, ThemeProvider } from '@mui/material';
import { resumeTheme } from '../../util/pdfTheme';
import { ResumeProjectDivision } from './ResumeProjectDivision';
import { ResumeContact } from './header/ResumeContact';
import { ResumeTitle } from './header/ResumeTitle';

function printToPDF() {
    const content = document.getElementById('resume_page');
    const pdf = window.open(
        '',
        '',
        'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0'
    );
    if (!pdf || !content) throw 'PDF is null'; //todo
    pdf.document.write(content.innerHTML);
    pdf.document.close();
    pdf.focus();
    pdf.print();
    // pdf.close();
}
export function ResumeBasePage() {
    return (
        <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between">
                <ResumeTitle />
                <ResumeContact />
            </Stack>
            <ResumeProjectDivision />
        </Stack>
    );
}

export function ResumePage() {
    return (
        <Box id="resume_page">
            <ThemeProvider theme={resumeTheme}>
                <Stack alignItems="center" width="100vw">
                    <Box
                        height="29.7cm"
                        width="21cm"
                        color="text.primary"
                        bgcolor="background.default"
                        padding="0.75in"
                    >
                        <ResumeBasePage />
                    </Box>
                </Stack>
            </ThemeProvider>
        </Box>
    );
}
