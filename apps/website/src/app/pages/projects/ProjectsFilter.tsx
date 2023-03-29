import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import {
    Button,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
} from '@mui/material';
import { ReactNode } from 'react';

import {
    flipUIOrderDirection,
    OrderBy,
    orderByValues,
    setUIOrderBy,
    useUIOrderDirection,
} from '../../elf/ui/UI.repository';
import { AppTypography } from '../../components/base/AppTypography';

export function ProjectsFilter({ uiId }: { uiId: string }) {
    const orderAsc = useUIOrderDirection(uiId);
    let orderElement: ReactNode;
    if (orderAsc === undefined) {
        orderElement = null;
    } else
        orderElement = orderAsc ? (
            <ArrowUpward fontSize="large" />
        ) : (
            <ArrowDownward fontSize="large" />
        );
    return (
        <Stack
            border={2}
            borderRadius={'5px'}
            borderColor="secondary.main"
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            padding={1}
        >
            <AppTypography noWrap variant="h6">
                Order by
            </AppTypography>
            <Button onClick={() => flipUIOrderDirection(uiId)}>
                {orderElement}
            </Button>
            <Select<OrderBy>
                variant="outlined"
                labelId="projectsFilterLabel"
                defaultValue="impact"
                sx={{ width: '10rem' }}
                onChange={({ target }: SelectChangeEvent<OrderBy>) => {
                    const val: OrderBy = target.value as OrderBy;
                    setUIOrderBy(uiId, val);
                }}
            >
                {orderByValues.map((orderBy) => (
                    <MenuItem dense value={orderBy} key={orderBy}>
                        <AppTypography
                            color="primary.contrastText"
                            variant="body1"
                            textTransform="capitalize"
                        >
                            {orderBy}
                        </AppTypography>
                    </MenuItem>
                ))}
            </Select>
        </Stack>
    );
}
