import { useIsPathnameResume } from '../../../util/routes';
import { AppHeaderDesktop } from './AppHeader.desktop';

export function AppHeader() {
    if (useIsPathnameResume()) return null;
    return <AppHeaderDesktop />;
}
