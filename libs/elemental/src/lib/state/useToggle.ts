import { useState } from 'react';

export function useToggle(initial: boolean): [boolean, () => void] {
    const [state, setState] = useState(initial);
    return [state, () => setState((s) => !s)];
}
