import { ReactNode } from 'react';

import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import {
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    useTheme,
} from '@mui/material';

import { AppTypography } from '../../components/base/AppTypography';
import {
    flipUIOrderDirection,
    OrderBy,
    orderByValues,
    setUIOrderBy,
    useUIOrderDirection,
} from '../../elf/repo/order/UI.repository';
import { ExpandIcon } from './base/ExpandIcon';

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
            border={1}
            borderRadius={'5px'}
            borderColor="divider"
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            padding={1}
        >
            <AppTypography id="projectsFilterLabel" noWrap variant="h6">
                Order by
            </AppTypography>
            <ExpandIcon
                onClick={() => flipUIOrderDirection(uiId)}
                color={useTheme().palette.primary.main}
                icon={orderElement}
                tooltip="Reverse Sort"
            />
            <Select<OrderBy>
                variant="outlined"
                labelId="projectsFilterLabel"
                defaultValue="impact"
                sx={{ width: '10rem' }}
                onChange={({ target }: SelectChangeEvent<OrderBy>) =>
                    setUIOrderBy(uiId, target.value as OrderBy)
                }
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
