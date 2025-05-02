import { Typography, useTheme } from "@mui/material";

interface TextWrapperProps {
  children: React.ReactNode;
}

const SectionDescWrapper = ({ children }: TextWrapperProps) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        ...theme.typography.sectionDesc,
        color: theme.palette.text.secondary,
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
};

export default SectionDescWrapper;
