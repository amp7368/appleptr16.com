import { Stack } from '@mui/material';
import { AppTypography } from '../../../components/base/AppTypography';

export interface WorkTitleProps {
    company: string;
    role: string;
}
export function WorkTitle({ company, role }: WorkTitleProps) {
    return (
        <Stack direction="column">
            <AppTypography color="text.primary" variant="h5" fontWeight={500}>
                {company}
            </AppTypography>
            <AppTypography color="text.primary" variant="h6" fontWeight={500}>
                {role}
            </AppTypography>
        </Stack>
    );
}
