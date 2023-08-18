import { FullDateRangeProps } from '../../../elf/types/DateTypes';

import { useToggle } from '@app/ui';
import { AppTypography } from '../../base/AppTypography';
import { DatePartDurationList } from './DatePartDurationList';
import { DatesDisplayContainer } from './DatesDisplayContainer';

const MILLIS_PER_MONTH = 1000 * 60 * 60 * 24 * 30.437;
export type DatesDisplayProps = FullDateRangeProps & {
    duration: number;
};
export function DatesDisplay(props: DatesDisplayProps) {
    const totalMonths = props.duration / MILLIS_PER_MONTH;
    const [isExpanded, setExpanded] = useToggle(false);

    return (
        <DatesDisplayContainer
            isExpanded={isExpanded}
            setExpanded={setExpanded}
        >
            {!isExpanded && (
                <DatePartDurationList isExpanded={isExpanded} dates={[props]} />
            )}
            {isExpanded && (
                <DatePartDurationList
                    isExpanded={isExpanded}
                    dates={props.dates}
                />
            )}
            <AppTypography fontWeight={500}>
                ~ {totalMonths.toFixed(2)} months
            </AppTypography>
        </DatesDisplayContainer>
    );
}
