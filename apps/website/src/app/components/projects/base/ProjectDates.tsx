import { DateFactory } from '@appleptr16/utilities';
import { RatingProps, Stack } from '@mui/material';

import { AppTypography } from '../../base/AppTypography';
import { DateRangePropsWithBreaks, ProjectProps } from '../ProjectTypes';
import { ProjectRatingProps } from './ProjectRating';

export type ProjectDatesProps = DateRangePropsWithBreaks & {
    rating: ProjectProps['ratingRaw'];
};
export function ProjectDates(props: ProjectDatesProps) {
    const totalMonths = props.rating.duration / 1000 / 60 / 60 / 24 / 30.437;

    return (
        <Stack direction="column" alignItems="center">
            <Stack direction="row" spacing={1}>
                <AppTypography noWrap>{props.startFormatted}</AppTypography>
                <AppTypography noWrap>to</AppTypography>
                <AppTypography noWrap>{props.endFormatted}</AppTypography>
            </Stack>
            <AppTypography noWrap>
                ~ {totalMonths.toFixed(2)} months
            </AppTypography>
        </Stack>
    );
}
