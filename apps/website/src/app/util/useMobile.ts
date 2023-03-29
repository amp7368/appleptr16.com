import isMobileOrigin from 'is-mobile';
import { BehaviorSubject, last, Observable, Subject } from 'rxjs';
import { useObservable } from '../../../../../libs/elemental/src/lib/observeable/useObservable';

interface GlobalStore<T> {
    subject: Subject<T>;
    observable: Observable<T>;
    initial: T;
}
function observe<T>(state: T): GlobalStore<T> {
    const subject = new BehaviorSubject(state);
    const observable: Observable<T> = subject.pipe(last());
    return { subject, initial: state, observable };
}
interface Globe {
    mobile: GlobalStore<boolean>;
}
const globe: Globe = {
    mobile: observe(isMobileOrigin()),
};

function useGlobal<K extends keyof Globe>(key: K): Globe[K]['initial'] {
    const globeVal: Globe[K] = globe[key];
    return useObservable(globeVal.observable, globeVal.initial);
}

export function useMobile(): boolean {
    return useGlobal('mobile');
}
