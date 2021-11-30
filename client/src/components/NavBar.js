import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Auth from "../utils/auth";
import { commerce } from "../lib/commerce";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";
import { teal, indigo } from '@mui/material/colors';

const primary = indigo[500]
const primaryLight = indigo[200]
const primaryDark = indigo[900]
const secondary = teal[500]
const secondaryLight = teal[200]
const secondaryDark = teal[700]

export default function PrimarySearchAppBar({ totalItems }) {
  const location = useLocation();
  const [totalItem, setTotalItem] = useState([]);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClick={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="" color="inherit">
          <Badge badgeContent={totalItems} color="error">
            <Link href="/cart" color="inherit">
              <ShoppingCartIcon />
            </Link>
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Link href="/login" color="inherit">
            <LoginIcon />
          </Link>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{
        flexGrow: 1
      }}>
        <AppBar position="static" style={{ background: secondaryDark }}>
          <Toolbar>
            <Typography>
              <Link
                variant="h6"
                noWrap
                //   component="div"
                color="inherit"
                underline="hover"
                href="/"
              >
                {"Photographer Phinder"}
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {location.pathname !== "/login" && (
                <IconButton size="large" aria-label="" color="inherit">
                  <Badge badgeContent={totalItems} color="error">
                    <Link href="/cart" color="inherit">
                      <ShoppingCartIcon />
                    </Link>
                  </Badge>
                </IconButton>
              )}
              &nbsp;
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                <Link href="/login" color="inherit">
                  <LoginIcon />
                </Link>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Box>
    </>
  );
}
