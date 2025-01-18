// "use client";
import { Box, Divider, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import Options from "./Options";
import { useChatContext } from "./ChatProvider";

interface SideBarProps {
  isOpen: boolean;
  // setIsOpen: (isOpen: boolean) => void;
  // setMode: (model: string) => void;
  // setType: (model: string) => void;
}

const SideBar = ({ isOpen }: SideBarProps) => {
  const rows = ["Test-Test-Test-Test-Test-Test1", "Test-Test-Test-Test-Test-Test12", "3", "4", "5", "6", "7", "8", "9", "Test-Test-Test-Test-Test-Test110---------", "12", "32323"];
  const { setIsOpen, setMode, setType } = useChatContext();
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
          <Options setMode={setMode} mode={true} />
        </Box>
        <Box sx={{ width: "100%", p: 1 }}>
          <Options setType={setType} mode={false} />
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
