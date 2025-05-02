import React from "react";
import { Stack, StackProps } from "@mui/material";

interface WrapperProps extends StackProps {
  py?: number | string;
  px?: number | string | number[];
  bg?: string;
}

const PaddingWrapperComponent = ({
  py = 5,
  px = [2, 4, 8],
  bg,
  sx,
  ...rest
}: WrapperProps) => {
  return (
    <Stack
      sx={{
        backgroundColor: `${bg} !important`,
        py,
        px,
        ...sx,
      }}
      {...rest}
      spacing={1}
    />
  );
};

export const PaddingWrapper = React.memo(PaddingWrapperComponent);
