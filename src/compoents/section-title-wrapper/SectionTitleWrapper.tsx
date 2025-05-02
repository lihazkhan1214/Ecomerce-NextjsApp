import { Typography, useTheme } from "@mui/material";

interface TextWrapperProps {
  children: React.ReactNode;
}

const SectionTitleWrapper = ({ children }: TextWrapperProps) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        ...theme.typography.sectionTitle,
        color: theme.palette.custom.accents.heading,
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
};

export default SectionTitleWrapper;
