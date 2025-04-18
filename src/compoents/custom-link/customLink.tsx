"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Typography, TypographyProps } from "@mui/material";

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  isExternal?: boolean;
  variant?: TypographyProps["variant"];
  color?: TypographyProps["color"];
  sx?: TypographyProps["sx"];
}

const CustomLink = ({
  href,
  children,
  isExternal = false,
  variant = "navLink",
  color = "text.primary",
  sx,
}: CustomLinkProps) => {
  const pathname = usePathname();
  console.log(pathname);
  const isActive = pathname.slice(1) === href;
  if (isExternal) {
    return (
      <Typography
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variant={variant}
        color={color}
        sx={{
          cursor: "pointer",
          textDecoration: "none",
          "&:hover": {
            color: "red",
          },
          ...(isActive && {
            fontWeight: "bold",
            color: "secondary.main",
          }),
          ...sx,
        }}
      >
        {children}
      </Typography>
    );
  }

  return (
    <Link href={href}>
      <Typography
        component="span"
        variant={variant}
        color={color}
        sx={{
          cursor: "pointer",
          textDecoration: "none",
          "&:hover": {
            color: "blue",
          },
          ...(isActive && {
            color: "secondary.main",
          }),
          ...sx,
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};

export default CustomLink;
