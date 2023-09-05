import { alpha } from '@mui/material';
import { common } from '@mui/material/colors';

const color: string[] = [...Array.from({ length: 11 }).keys()].map(
    (_: unknown, i: number) => alpha(common.white, i / 10)
);
export const lightShadows = {
    1: [`0 0 5px 1px ${color[1]}`],
    2: [`0 0 5px 1px ${color[1]}`],
    5: [`0 0 5px 2px ${color[2]}`],
    10: [`0 0 5px 2px ${color[5]}`],
};
