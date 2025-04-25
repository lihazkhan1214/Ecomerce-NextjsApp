"use client";
import {
  AppBar,
  Badge,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import * as React from "react";
import { inherits } from "util";
import CustomLink from "../custom-link/customLink";
import {
  AccountCircle,
  LocalMall,
  Menu as MenuIcon,
  MenuOpen,
} from "@mui/icons-material";

import Image from "next/image";
import Logo from "./logo";
import { useRouter } from "next/navigation";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Shop", "Contact", "Whishlist"];
const profileItems = ["Profile", "Account", "Logout"];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();
  const theme = useTheme();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          boxShadow: "none",
          px: [2, 4, 8],
        }}
      >
        <Toolbar
          sx={{
            gap: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuOpen />
          </IconButton>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Logo />
          </Box>

          {/* Center - This will always be centered */}

          {/* Right Side - Nav buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item, ind) => (
              <CustomLink key={ind} href={item}>
                {item}
              </CustomLink>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <CustomLink href="/cart">
              <Badge
                badgeContent={2}
                style={{ display: "flex", gap: 2 }}
                color="primary"
              >
                My Cart <LocalMall />
              </Badge>
            </CustomLink>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                ...theme.typography.navLink,
                display: "flex",
                alignItems: "center",
                color: theme.palette.text.primary,
              }}
            >
              <AccountCircle sx={{ ml: "2px" }} />
              Account
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {profileItems.map((item, ind) => (
                <MenuItem
                  sx={{
                    ...theme.typography.navLink,
                    color: theme.palette.text.primary,
                  }}
                  key={ind}
                  onClick={handleClose}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
