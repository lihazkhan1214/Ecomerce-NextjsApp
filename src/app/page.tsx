"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, useTheme } from "@mui/material";
import Hero from "@/compoents/hero";
import ServiceIcon from "@/compoents/services-icon/ServiceIcon";
import Category from "@/compoents/category/Category";
export default function Home() {
  // const theme = useTheme();
  return (
    <>
      <Hero />
      <ServiceIcon />
      <Category />
    </>
  );
}
