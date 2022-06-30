import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BackendPage } from './components/backend/BackendPage';
import { ContactPage } from './components/contact/ContactPage';

import { OverviewPage } from './components/overview/OverviewPage';
import { ProjectsPage } from './components/projects/ProjectsPage';
import { WorkPage } from './components/work/WorkPage';
import { urls } from './util/routes';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={urls.home} element={<OverviewPage />} />
                <Route path={urls.work} element={<WorkPage />} />
                <Route path={urls.projects} element={<ProjectsPage />} />
                <Route path={urls.contact} element={<ContactPage />} />
                <Route path={urls.backend} element={<BackendPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
