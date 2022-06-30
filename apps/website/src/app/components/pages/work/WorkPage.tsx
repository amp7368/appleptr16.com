import { Stack } from '@mui/material';
import { useState } from 'react';

import { Page } from '../../common/Page';
import { Work } from './Work';
import { useWork } from './workStore';

export function WorkPage() {
    const workSorted = useWork();
    return (
        <Page title="Work Experience">
            <Stack direction="column" spacing={3}>
                {workSorted.map((work) => (
                    <Work key={work.company + work.dates.startDate} {...work} />
                ))}
            </Stack>
        </Page>
    );
}
