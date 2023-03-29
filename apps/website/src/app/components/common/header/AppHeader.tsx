import { useMobile } from '../../../util/useMobile';
import { AppHeaderDesktop } from './AppHeader.desktop';
import { AppHeaderMobile } from './AppHeader.mobile';

export function AppHeader() {
    if (useMobile()) return <AppHeaderDesktop />;
    return <AppHeaderMobile />;
}
