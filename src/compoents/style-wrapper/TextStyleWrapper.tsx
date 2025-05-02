"use client";
import { Typography, useTheme } from "@mui/material";
import React from "react";

interface TextWrapperProps {
  children: React.ReactNode;
}

const TextStyleWrapperComponent = ({ children }: TextWrapperProps) => {
  const theme = useTheme();
  console.log("stlewrapper render");
  return (
    <Typography
      sx={{
        ...theme.typography.sectionStyleText,
        color: theme.palette.text.secondary,
        textAlign: "center",
        fontStyle: "italic",
      }}
    >
      {children}
    </Typography>
  );
};

const TextStyleWrapper = React.memo(TextStyleWrapperComponent);
export default TextStyleWrapper;
