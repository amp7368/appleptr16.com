import { Stack } from '@mui/material';
import { AppTypography } from '../../../components/base/AppTypography';
import { DatePartDuration } from '../../../components/common/dates/DatesPartDuration';
import { ResumeWorkProps } from '../../../elf/types/ResumeWorkTypes';
import { Bulletpoint } from '../../projects/common/BulletPoint';

export function ResumeWork(project: ResumeWorkProps) {
    return (
        <Stack>
            <AppTypography
                sx={{ textDecoration: 'underline' }}
                color="text.primary"
                variant="h3"
            >
                {project.company} ({project.role})
            </AppTypography>
            {/* <AppTypography>{project.description}</AppTypography> */}
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
