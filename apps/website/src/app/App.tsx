import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';
import { BottomBar } from './components/common/BottomBar';
import { AppHeader } from './components/common/header/AppHeader';
import { CookieConsent } from './components/cookie/CookieConsent';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { OverviewPage } from './pages/overview/OverviewPage';
import { ProjectsPage } from './pages/projects/ProjectsPage';
import { ResumePage } from './pages/resume/ResumePage';
import { ToolsPage } from './pages/tools/ToolsPage';
import { WorkPage } from './pages/work/WorkPage';
import { SetBackground } from './util/SetBackground';
import { urls } from './util/routes';

export function App() {
    return (
        <>
            <Box>
                <SetBackground />
                <AppHeader />
                <Routes>
                    <Route path={urls.home} element={<OverviewPage />} />
                    <Route path={urls.work} element={<WorkPage />} />
                    <Route path={urls.projects} element={<ProjectsPage />} />
                    <Route path={urls.tools} element={<ToolsPage />} />
                    <Route path={urls.resume} element={<ResumePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Box>
            <CookieConsent />
            <BottomBar />
        </>
    );
}

export default App;
