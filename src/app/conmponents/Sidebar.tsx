// "use client";
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Menu as MenuIcon } from "@mui/icons-material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import Mode from "./Mode";
import React from "react";

import DraftsIcon from "@mui/icons-material/Drafts";

const drawerWidth = 240;
interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setModel: (model: string) => void;
}

const SideBar = ({ isOpen, setIsOpen, setModel }: SideBarProps) => {
  const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  if (!isOpen) {
    return null;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", bgcolor: (theme) => theme.palette.background.default }}>
      <Box sx={{ p: 2, width: "100%", display: "flex", alignItems: "center" }}>
        <IconButton edge="start" sx={{ mr: 20 }}>
          <MenuIcon
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </IconButton>
        <IconButton edge="start" sx={{ mr: 2 }}>
          <CreateRoundedIcon />
        </IconButton>
      </Box>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

      {/* <Box sx={{ flexGrow: 3 }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: (theme) => theme.palette.background.default,
            },
          }}
        >
          <Box sx={{ p: 2, width: "100%", display: "flex", alignItems: "center" }}>
            <IconButton edge="start" sx={{ mr: 20 }}>
              <MenuIcon
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
            </IconButton>
            <IconButton edge="start" sx={{ mr: 2 }}>
              <CreateRoundedIcon />
            </IconButton>
          </Box>
          <Box sx={{ overflow: "auto" }}>
            <List>
              {rows.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </Box> */}
      <Box sx={{ width: "100%" , p:2}}>
        <Mode setModel={setModel} />
      </Box>
    </Box>
  );
};

export default SideBar;
