// "use client";
import { Box, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import React from "react";
import Options from "./Options";
import Auth from "./Auth";
import { useChatContext } from "./ChatProvider";

interface HeaderProps {
  isOpen: boolean;
}

const Header = ({ isOpen }: HeaderProps) => {
  const { setIsOpen, setOption, title } = useChatContext();
  return (
    <Box sx={{ p: 2, bgcolor: (theme) => theme.palette.background.paper, width: "100%", display: "flex", alignItems: "center", gap: "10px" }}>
      {!isOpen && (
        <IconButton edge="start" color="inherit" aria-label="menu" id="menu-button" onClick={() => setIsOpen(!isOpen)} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
      )}
      <Box sx={{ flexGrow: 1 }}>
        <Options setOptions={setOption} />
      </Box>
      <Box sx={{ flexGrow: 10 }}>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box>
        <Auth />
      </Box>
    </Box>
  );
};
export default Header;
