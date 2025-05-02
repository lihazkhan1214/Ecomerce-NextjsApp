// @/styles/theme.ts
"use client";
import { createTheme } from "@mui/material/styles";
import { customTypography } from "./typegraphy";
import { COLORS } from "./color";

declare module "@mui/material/styles" {
  interface Palette {
    custom: typeof COLORS.custom;
  }
  interface PaletteOptions {
    custom?: typeof COLORS.custom;
  }
}

const theme = createTheme({
  palette: {
    ...COLORS, // Spread all standard colors
    custom: COLORS.custom, // Separate custom colors
  },
  typography: customTypography,
});

export default theme;
