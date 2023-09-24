import { ReactNode } from 'react';

import { Stack, TypographyProps } from '@mui/material';

import { AppTypography } from './AppTypography';

interface WrapperProps {
    children: ReactNode | ReactNode[];
}

export type ToolTipTypographyProps = TypographyProps & {
    Wrapper?: (props: WrapperProps) => JSX.Element;
};
export function ToolTipTypography({
    children,
    Wrapper,
    ...props
}: ToolTipTypographyProps) {
    const isChildrenArray = Array.isArray(children);
    if (Wrapper && isChildrenArray)
        return (
            <Wrapper>
                {children.map((c: ReactNode) => (
                    <BaseCase {...props}>{c}</BaseCase>
                ))}
            </Wrapper>
        );
    else if (Wrapper)
        return (
            <Wrapper>
                <ToolTipTypography {...props}>{children}</ToolTipTypography>
            </Wrapper>
        );
    else if (isChildrenArray)
        return (
            <Stack>
                {children.map((c: ReactNode) => (
                    <BaseCase {...props}>{c}</BaseCase>
                ))}
            </Stack>
        );
    else return <BaseCase {...props}>{children}</BaseCase>;
}
function BaseCase(props: Omit<ToolTipTypographyProps, 'Wrapper'>) {
    if (typeof props.children === 'string')
        return <AppTypography variant="body1" {...props} />;
    else return <>{props.children}</>;
}
