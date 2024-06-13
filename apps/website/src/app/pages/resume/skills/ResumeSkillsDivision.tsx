import { Stack } from '@mui/material';
import { getResumeSkills } from '../../../elf/repo/resume/skill/ResumeSkill.repo';
import { ResumeSkill } from './ResumeSkill';

export function ResumeSkillsDivision() {
    const skills: string[] = getResumeSkills();
    return (
        <Stack spacing={1} direction="row">
            {skills.map((skill) => (
                <ResumeSkill key={skill} skill={skill} />
            ))}
        </Stack>
    );
}
