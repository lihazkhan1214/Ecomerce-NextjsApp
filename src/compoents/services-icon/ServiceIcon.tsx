import { Divider, Paper, Stack, styled, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
const itemsIcon = [
  {
    title: "Shipment",
    img: "/images/vehicle.png",
  },
  {
    title: "Best Quality",
    img: "/images/quality.png",
  },
  {
    title: "Money Back Gurantee",
    img: "/images/gurantee.png",
  },
  {
    title: "Support",
    img: "/images/support.png",
  },
];
function ServiceIcon() {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction="row"
        divider={
          <Divider
            sx={{ background: theme.palette.text.primary }}
            orientation="vertical"
            flexItem
          />
        }
        sx={{
          justifyContent: "space-between",
          px: [2, 4, 8],
          py: 5,
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        {itemsIcon.map((item, ind) => (
          <Paper sx={{ background: "inherit" }} elevation={0} key={ind}>
            <Image src={item.img} alt={item.title} width={60} height={60} />
          </Paper>
        ))}
      </Stack>
    </>
  );
}

export default ServiceIcon;
