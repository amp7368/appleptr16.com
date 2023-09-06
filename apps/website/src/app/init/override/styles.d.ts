import {
    Palette as MPalette,
    PaletteOptions as MPaletteOptions,
    Theme as MTheme,
    ThemeOptions as MThemeOptions,
    TypeBackground as MTypeBackground,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette extends MPalette {
        background: MPalette['background'] & { card: string };
    }
    interface Theme extends MTheme {
        palette: Palette;
    }

    interface TypeBackground extends MTypeBackground {
        card?: string;
    }
    interface PaletteOptions extends MPaletteOptions {
        background?: TypeBackground;
    }
    // allow configuration using `createTheme`
    interface ThemeOptions extends MThemeOptions {
        palette?: PaletteOptions;
    }
}
export { PaletteOptions, Theme, ThemeOptions, TypeBackground };
