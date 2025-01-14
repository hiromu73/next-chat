// "use client";
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Menu as MenuIcon } from "@mui/icons-material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import Mode from "./Mode";
import React, { memo } from "react";

import DraftsIcon from "@mui/icons-material/Drafts";
import Options from "./Options";

const drawerWidth = 240;
interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setModel: (model: string) => void;
  setType: (model: string) => void;
}

const SideBar = memo(({ isOpen, setIsOpen, setModel, setType }: SideBarProps) => {
  const rows = ["Test-Test-Test-Test-Test-Test1", "Test-Test-Test-Test-Test-Test12", "3", "4", "5", "6", "7", "8", "9", "Test-Test-Test-Test-Test-Test110---------", "12", "32323"];
  console.log("sidbar");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 1, height: "100%" }}>
      <Box sx={{ p: 2, width: "100%", display: "flex", justifyContent: "space-between", height: "10%" }}>
        <IconButton edge="start">
          <MenuIcon
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </IconButton>
        <IconButton edge="end">
          <CreateRoundedIcon />
        </IconButton>
      </Box>
      <Box sx={{ flexGrow: 3, ml: 2, overflow: "auto", height: "65%" }}>
        {rows.map((row, index) => (
          <List key={index}>
            <ListItem disablePadding>
              <ListItemText primary={row} primaryTypographyProps={{ noWrap: true }} />
            </ListItem>
          </List>
        ))}
        <Divider />
      </Box>
      <Box sx={{ height: "25%" }}>
        <Box sx={{ width: "100%", p: 1 }}>
          <Options setModel={setModel} mode={true} />
        </Box>
        <Box sx={{ width: "100%", p: 1 }}>
          <Options setType={setType} mode={false} />
        </Box>
      </Box>
    </Box>
  );
});

export default SideBar;
