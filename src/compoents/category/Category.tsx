import React, { useState } from "react";
import { PaddingWrapper } from "../padding-wrapper/padding-wrapper";
import { useTheme, Typography, Box } from "@mui/material";
import TextStyleWrapper from "../style-wrapper/TextStyleWrapper";
import SectionTitleWrapper from "../section-title-wrapper/SectionTitleWrapper";
import SectionDescWrapper from "../section-desc/section-desc";
import Image from "next/image";

const images = ["/images/cat1.png", "/images/cat2.png", "/images/cat3.png"];
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
function Category() {
  const theme = useTheme();

  return (
    <>
      <PaddingWrapper bg={theme.palette.background.paper}>
        <TextStyleWrapper>Categories</TextStyleWrapper>
        <SectionTitleWrapper>Shop By Catogories</SectionTitleWrapper>
        <SectionDescWrapper>
          “Experience perfection with Kami Industries Tweezers – where quality
          and innovation unite.”
        </SectionDescWrapper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            flexWrap: "wrap",
          }}
        >
          {images.map((item) => (
            <Box
              sx={{
                width: 380,
                height: 320,
                position: "relative",
                // objectFit: "cover",
              }}
            >
              <Image
                src={item}
                style={{ objectFit: "cover", objectPosition: "center" }}
                alt="not found"
                fill
              />
              <ArrowCircleRightIcon
                sx={{
                  position: "absolute",
                  bottom: "30px",
                  marginLeft: "188px",
                  zIndex: 10,
                  color: theme.palette.text.primary,
                  border: "2px dotted #FFF ",
                  borderRadius: "50%",
                }}
                fontSize="large"
              />
            </Box>
          ))}
        </Box>
      </PaddingWrapper>
    </>
  );
}

export default Category;
