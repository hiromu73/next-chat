// "use client";
import { Box, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import React from "react";
import Options from "./Options";
import Auth from "./Auth";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  return (
    <Box sx={{ p: 4, bgcolor: (theme) => theme.palette.background.paper, width: "100%", display: "flex", alignItems: "center", gap: "20px" }}>
      {!isOpen && (
        <IconButton edge="start" color="inherit" aria-label="menu" id="menu-button" onClick={() => setIsOpen(!isOpen)} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
      )}
      <Box>
        {/* Chat中はdisable, 初回は必須にする */}
        <Options/>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h5" sx={{}}>
          Debate内容 {/* 初回は非表示 */}
        </Typography>
      </Box>
      <Box>
        <Auth />
      </Box>
    </Box>
  );
};
export default Header;
