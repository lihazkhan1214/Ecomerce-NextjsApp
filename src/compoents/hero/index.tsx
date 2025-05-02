import {
  Box,
  useTheme,
  Typography,
  Stack,
  Button,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

function Hero() {
  const theme = useTheme();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "100%", md: 850 },
        position: "relative",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Hero Section Background"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
          position: "absolute",
          zIndex: 1, // Ensure image stays behind content
        }}
        priority
      />

      {/* Content Overlay */}
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          p: 3,
          mt: { xs: 10, lg: 0 },
        }}
      >
        <Typography
          variant="heroSubText"
          sx={{
            fontSize: { xs: 16, sm: 24 },
          }}
          color={theme.palette.custom.special.white}
        >
          Elevate your Grooming with Kami Industries Premium Tweezers.
        </Typography>

        <Typography
          variant="heroTitle"
          sx={{
            fontSize: { xs: "50", sm: "150px" },
          }}
          color={theme.palette.custom.special.white}
        >
          Tweezers and Mirrors
        </Typography>

        <Typography
          variant="heroText"
          color={theme.palette.custom.special.white}
          sx={{
            maxWidth: { md: 630 },

            fontWeight: 500,
            fontSize: { xs: 16, md: 32 },
          }}
        >
          Explore Exclusive Hair Removal, Stainless Steel, Eyelash Tweezers and
          Mirrors
        </Typography>

        <Button
          variant="contained"
          sx={{
            ...theme.typography.heroButton,
            width: { md: 300 },
            fontSize: { xs: 16, sm: 24 },
            background: theme.palette.primary.contrastText,
            color: theme.palette.text.primary,
            "&:hover": {
              transform: "scale(1.05)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          Shop Now
        </Button>
      </Stack>
    </Box>
  );
}

export default Hero;
