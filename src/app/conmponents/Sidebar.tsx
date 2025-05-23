import { Box, Divider, IconButton, Link, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import Options from "./Options";
import { useChatContext } from "./ChatProvider";
import { useEffect, useState } from "react";

interface SideBarProps {
  isOpen: boolean;
}

const SideBar = ({ isOpen }: SideBarProps) => {
  // const rows = ["Test-Test-Test-Test-Test-Test1", "Test-Test-Test-Test-Test-Test12", "3", "4", "5", "6", "7", "8", "9", "Test-Test-Test-Test-Test-Test110---------", "12", "32323"];
  const [list_titles, setList_titles] = useState<string[]>([]);
  const { setIsOpen, setMode, setType, title } = useChatContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/auth");

        const data = await response.json();
        console.log(data.chat_title);
        const chat_titlelist = data.chat_title.map((chat: { title: string }) => chat.title);
        // {
        //   "chat_title": [
        //     { "title": "AIの規制について" }
        //   ]
        // }
        console.log(chat_titlelist);

        setList_titles(chat_titlelist || []);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/auth");

        const data = await response.json();
        console.log(data.chat_title);
        const chat_titlelist = data.chat_title.map((chat: { title: string }) => chat.title);
        // {
        //   "chat_title": [
        //     { "title": "AIの規制について" }
        //   ]
        // }
        console.log(chat_titlelist);

        setList_titles(chat_titlelist || []);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      }
    };

    fetchData();
  }, [title]);

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
        <Link href="./">
          <IconButton edge="end">
            <CreateRoundedIcon />
          </IconButton>
        </Link>
      </Box>
      <Box sx={{ flexGrow: 3, ml: 2, overflow: "auto", height: "65%" }}>
        {list_titles.map((item, index) => (
          <List key={index}>
            <ListItem disablePadding>
              <ListItemText primary={item} primaryTypographyProps={{ noWrap: true }} />
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
