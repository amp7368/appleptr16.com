import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { OverviewPage } from './pages/overview/OverviewPage';
import { ProjectsPage } from './pages/projects/ProjectsPage';
import { ToolsPage } from './pages/tools/ToolsPage';
import { WorkPage } from './pages/work/WorkPage';
import { urls } from './util/routes';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={urls.home} element={<OverviewPage />} />
                <Route path={urls.work} element={<WorkPage />} />
                <Route path={urls.projects} element={<ProjectsPage />} />
                <Route path={urls.tools} element={<ToolsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
