import {
    Palette as MPalette,
    PaletteOptions as MPaletteOptions,
    TypeBackground as MTypeBackground,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette extends MPalette {
        background: MPalette['background'] & { card: string };
    }
    interface Theme {
        palette: Palette;
    }

    interface TypeBackground extends MTypeBackground {
        card?: string;
    }
    interface PaletteOptions extends MPaletteOptions {
        background?: TypeBackground;
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        palette?: PaletteOptions;
    }
}
export { Theme, ThemeOptions, PaletteOptions, TypeBackground };
