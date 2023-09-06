import { ReactNode } from 'react';

import { Rating, Stack } from '@mui/material';

import { SectionHeader } from '../common/SectionHeader';

export interface ProjectRatingProps {
    value: number;
    title: ReactNode;
    icon: ReactNode;
    children?: ReactNode;
}
export function ProjectRating(props: ProjectRatingProps) {
    return (
        <>
            <SectionHeader>{props.title}</SectionHeader>
            <Stack direction="column" alignItems="center">
                <Rating
                    readOnly
                    value={props.value}
                    precision={0.1}
                    icon={props.icon}
                    emptyIcon={props.icon}
                />
                {props.children}
            </Stack>
        </>
    );
}
