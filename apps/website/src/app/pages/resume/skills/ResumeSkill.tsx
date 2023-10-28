import { Box } from '@mui/material';
import { AppTypography } from '../../../components/base/AppTypography';

export interface ResumeSkillProps {
    skill: string;
}
export function ResumeSkill(props: ResumeSkillProps) {
    return (
        <Box
            border={1}
            borderRadius={1}
            borderColor="primary.dark"
            paddingX={1}
            paddingY={0.5}
        >
            <AppTypography variant="subtitle2">{props.skill}</AppTypography>
        </Box>
    );
}
