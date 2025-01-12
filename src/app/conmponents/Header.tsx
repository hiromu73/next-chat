// "use client";
import { Box, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import React, { useContext } from "react";
import Options from "./Options";
import Auth from "./Auth";
import { ChatContext } from "../contexts/ChatContext";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setOptions: (options: string) => void;
}

const Header = ({ isOpen, setIsOpen, setOptions }: HeaderProps) => {
  const chatContext = useContext(ChatContext);
  console.log(chatContext);

  return (
    <Box sx={{ p: 4, bgcolor: (theme) => theme.palette.background.paper, width: "100%", display: "flex", alignItems: "center", gap: "20px" }}>
      {!isOpen && (
        <IconButton edge="start" color="inherit" aria-label="menu" id="menu-button" onClick={() => setIsOpen(!isOpen)} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
      )}
      <Box sx={{ flexGrow: 1 }}>
        {/* Chat中はdisable, 初回は必須にする */}
        <Options setOptions={setOptions} />
      </Box>
      <Box sx={{ flexGrow: 14 }}>
        <Typography variant="h5" sx={{}}>
          {chatContext.title}
        </Typography>
      </Box>
      <Box>
        <Auth />
      </Box>
    </Box>
  );
};
export default Header;
