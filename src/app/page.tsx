"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, useTheme } from "@mui/material";
import Hero from "@/compoents/hero";
export default function Home() {
  // const theme = useTheme();
  return (
    <>
      <Hero />
    </>
  );
}
