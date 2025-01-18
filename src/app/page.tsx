"use client";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Chatare from "./conmponents/Chatare";
import Header from "./conmponents/Header";
import Sidebar from "./conmponents/Sidebar";
import { createContext, useState } from "react";
import ChatProvider, { useChatContext } from "./conmponents/ChatProvider";

export default function Home() {
  const darkTheme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: `
            ::-webkit-scrollbar{
                width: 5px;
                display: none;
            },
            /* Firefox */
            html {
                scrollbar-width: none;
            }
            /* IE, Edge */
            body {
                -ms-overflow-style: none;
            }
            :hover::-webkit-scrollbar {
            display: block;
            }
            ::-webkit-scrollbar-thumb {
                background-color: #676767;
                border-radius: 20px;
            }
            `,
      },
    },
    palette: {
      mode: "dark",
      background: {
        paper: "#212121",
      },
      primary: {
        main: "#2F2F2F",
      },
      secondary: {
        main: "#2E2E2E",
      },
      text: {
        primary: "#fff",
        secondary: "#46505A",
      },
    },
  });

  // const [isOpen, setIsOpen] = useState(true);
  // const [option, setOption] = useState<string>("Agree");
  // const [title, setTitle] = useState<string>("");
  // const [mode, setMode] = useState<string>("normal");
  // const [type, setType] = useState<string>("普通");
  // type ChatInfoType = {
  //   title: string;
  //   setTitle: (title: string) => void;
  //   option: string;
  //   setOption: (option: string) => void;
  //   mode: string;
  //   setMode: (mode: string) => void;
  //   type: string;
  //   setType: (type: string) => void;
  // };
  // const chatInfo: ChatInfoType = {
  //   title, // Set関数: Text, state: Header
  //   setTitle, // // Set関数: Text, state: Header
  //   option,
  //   setOption,
  //   mode,
  //   setMode, // Set関数: Side, state: Text
  //   type,
  //   setType, // Set関数: Side, state: Text
  // };
  // const ChatProvider = createContext<ChatInfoType>(chatInfo);

  // const chatInfo = {
  //   title,
  //   setTitle,
  //   option,
  //   setOption,
  //   mode,
  //   setMode,
  //   type,
  //   setType,
  // };

  const { isOpen } = useChatContext();
  return (
    // <ChatProvider value={chatInfo}>
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ display: "flex", height: "100%", width: "100%", bgcolor: "grey.100" }}>
          <CssBaseline />
          {isOpen && (
            <Box sx={{ display: "flex", width: "15%", height: "100%", flexDirection: "column", bgcolor: (theme) => theme.palette.background.default }}>
              <Sidebar isOpen={isOpen} />
            </Box>
          )}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Header isOpen={isOpen}/>
            <Chatare />
          </Box>
        </Box>
      </ThemeProvider>
    // </ChatProvider>
  );
}
