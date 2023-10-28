import { common } from '@mui/material/colors';
import { Link, LinkProps } from 'react-router-dom';

export type AppLinkProps = LinkProps & {
    newTab?: boolean;
    underline?: boolean;
};
export function AppLink({ newTab, underline, style, ...props }: AppLinkProps) {
    const newStyle: LinkProps['style'] = {
        textDecorationLine: underline ? 'underline' : 'none',
        textDecorationColor: common.black,
        ...style,
    };
    const target = newTab ? '_blank' : props.target;
    return <Link {...props} target={target} style={newStyle} />;
}
