import { Stack } from '@mui/material';
import { AppTypography } from '../../../components/base/AppTypography';
import { DatePartDuration } from '../../../components/common/dates/DatesPartDuration';
import { ResumeProjectProps } from '../../../elf/types/ResumeProjectTypes';
import { Bulletpoint } from '../../projects/common/BulletPoint';

export function ResumeProject(project: ResumeProjectProps) {
    return (
        <Stack>
            <AppTypography variant="h3">
                <u>{project.title}</u> - {project.type}
            </AppTypography>
            <AppTypography>{project.description}</AppTypography>
            <Stack direction="row" marginTop={2} spacing={2}>
                <Stack direction="column" spacing={1}>
                    {project.summary.map((text, i) => (
                        <Bulletpoint key={i}>{text}</Bulletpoint>
                    ))}
                </Stack>

                <Stack alignItems="center">
                    <AppTypography
                        fontWeight={500}
                        sx={{ textDecoration: 'underline' }}
                        marginBottom="0.25rem"
                    >
                        Dates
                    </AppTypography>
                    {project.dates.dates.map((date) => (
                        <DatePartDuration
                            key={date.startFormatted}
                            start={date.startFormatted}
                            end={date.endFormatted}
                        />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
}
