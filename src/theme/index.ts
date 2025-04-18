"use client";
import { createTheme } from "@mui/material";
import { COLORS } from "./color";
import { customTypography } from "./typegraphy";

const theme = createTheme({
  palette: COLORS,
  typography: {
    ...customTypography,
  },
});

export default theme;
