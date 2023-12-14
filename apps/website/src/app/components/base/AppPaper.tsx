import { alpha, Box, PaperProps, Theme } from '@mui/material';

type Opaceness = 'highest' | 'higher' | 'high' | 'normal' | 'low' | 'lower';
const OpacenessMap: Record<Opaceness, number> = {
    highest: 1,
    higher: 0.8,
    high: 0.7,
    normal: 0.5,
    low: 0.2,
    lower: 0.1,
};

export interface AppPaperProps extends PaperProps {
    shadowColor?: string;
}
export function AppPaper(props: AppPaperProps) {
    return (
        <Box
            {...props}
            sx={{
                ...props.sx,
                bgcolor: ({ palette }: Theme) => '#011627',
                borderRadius: 4,
                boxShadow: ({ palette }: Theme) =>
                    `-3px 6px 12px 4px ${alpha(
                        props.shadowColor ?? palette.primary.main,
                        0.55
                    )}`,
            }}
        />
    );
}
