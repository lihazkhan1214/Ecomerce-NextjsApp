import { TypographyVariantsOptions } from "@mui/material";
import "@mui/material/styles";
import { Inter } from "next/font/google";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    navLink: React.CSSProperties;
    heroTitle: React.CSSProperties;
    heroText: React.CSSProperties;
    heroSubText: React.CSSProperties;
    heroButton: React.CSSProperties;
    iconTitle: React.CSSProperties;
    sectionStyleText: React.CSSProperties;
    sectionTitle: React.CSSProperties;
    sectionDesc: React.CSSProperties;
    sectionButton: React.CSSProperties;
    cardTitle: React.CSSProperties;
    cardPrice: React.CSSProperties;
    cardDetail: React.CSSProperties;
    cardButton: React.CSSProperties;
    reviewTitle: React.CSSProperties;
    reviewDesc: React.CSSProperties;
    formInput: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    navLink?: React.CSSProperties;
    heroTitle?: React.CSSProperties;
    heroText?: React.CSSProperties;
    mobileHeroText?: React.CSSProperties;
    mobileHeroTitle?: React.CSSProperties;
    heroSubText?: React.CSSProperties;
    mobileHeroSubText?: React.CSSProperties;
    heroButton?: React.CSSProperties;
    mobileHeroButton?: React.CSSProperties;
    iconTitle?: React.CSSProperties;
    sectionStyleText?: React.CSSProperties;
    sectionTitle?: React.CSSProperties;
    sectionDesc?: React.CSSProperties;
    sectionButton?: React.CSSProperties;
    cardTitle?: React.CSSProperties;
    cardPrice?: React.CSSProperties;
    cardDetail?: React.CSSProperties;
    cardButton?: React.CSSProperties;
    reviewTitle?: React.CSSProperties;
    reviewDesc?: React.CSSProperties;
    formInput?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    navLink: true;
    heroTitle: true;
    heroText: true;
    mobileHeroSubText: true;
    mobileHeroButton: true;
    mobileHeroTitle: true;
    mobileHeroText: true;
    heroSubText: true;
    heroButton: true;
    iconTitle: true;
    sectionStyleText: true;
    sectionTitle: true;
    sectionDesc: true;
    sectionButton: true;
    cardTitle: true;
    cardPrice: true;
    cardDetail: true;
    cardButton: true;
    reviewTitle: true;
    reviewDesc: true;
    formInput: true;
  }
}

export const customTypography: TypographyVariantsOptions = {
  // font
  fontFamily: "Inter, Arial, sans-serif",
  // ===== NAV LINKS =====
  navLink: {
    fontSize: "18px",
    fontWeight: 400,
  },
  // ===== HERO =====
  heroTitle: {
    fontSize: "150x",
    fontWeight: 900,
  },
  mobileHeroTitle: {
    fontSize: "50x",
    fontWeight: 900,
  },
  heroText: {
    fontSize: "32px",
    fontWeight: 400,
    lineHeight: 1.5,
  },

  heroSubText: {
    fontSize: "24px",
    fontWeight: 400,
  },

  heroButton: {
    fontSize: "32px",
    fontWeight: 500,
  },

  // ===== ICON TITLE =====
  iconTitle: {
    fontSize: "20px",
    fontWeight: 700,
  },
  // ===== SECTIONS =====
  sectionStyleText: {
    fontSize: "24px",
    fontWeight: 400,
  },
  sectionTitle: {
    fontSize: "48px",
    fontWeight: 600,
  },
  sectionDesc: {
    fontSize: "20px",
    fontWeight: 300,
  },
  sectionButton: {
    fontSize: "18px",
    fontWeight: 500,
  },
  // ===== CARDS =====
  cardTitle: {
    fontSize: "20px",
    fontWeight: 700,
  },
  cardPrice: {
    fontSize: "20px",
    fontWeight: 400,
  },
  cardDetail: {
    fontSize: "14px",
    fontWeight: 400,
  },
  cardButton: {
    fontSize: "16px",
    fontWeight: 400,
  },
  // ===== CLIENT REVIEWS =====
  reviewTitle: {
    fontSize: "40px",
    fontWeight: 400,
  },
  reviewDesc: {
    fontSize: "18px",
    fontWeight: 500,
  },
  // ===== FORM INPUTS =====
  formInput: {
    fontSize: "14px",
    fontWeight: 400,
  },
};
