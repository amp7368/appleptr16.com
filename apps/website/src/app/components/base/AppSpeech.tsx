import { alpha, Box, useTheme } from '@mui/material';
import MarkdownIt from 'markdown-it';
import { useMemo } from 'react';

import { AppTypography } from './AppTypography';

const markdown = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
});

export interface AppSpeechProps {
    content: string;
    title: string;
}
export function AppSpeech(props: AppSpeechProps) {
    const arrowHeight = '30px';
    const palette = useTheme().palette;

    const bgColor = palette.background.paper;
    const fontColor = palette.getContrastText(bgColor);
    const boxShadowColor = alpha(palette.common.black, 0.6);

    const content = useMemo(
        () => markdown.render(props.content),
        [props.content]
    );
    return (
        <Box
            id={props.title}
            maxWidth="27.5rem"
            sx={{
                margin: 4,
                padding: 3,
                position: 'relative',
                backgroundColor: bgColor,
                borderRadius: '5px',
                color: fontColor,
                boxShadow: `8px 8px 16px 8px ${boxShadowColor}`,
                ':before': {
                    content: '""',
                    position: 'absolute',
                    top: '100%',
                    right: '3rem',
                    width: '0',
                    borderTop: `${arrowHeight} solid ${bgColor}`,
                    borderLeft: `${arrowHeight} solid transparent`,
                    filter: `drop-shadow(8px 12px 8px ${boxShadowColor})`,
                },
            }}
        >
            <AppTypography variant="h5" fontWeight={500}>
                {props.title}
            </AppTypography>
            <div
                ref={(input) => {
                    if (input) input.innerHTML = content;
                }}
            />
        </Box>
    );
}
