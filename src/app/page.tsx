"use client";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Chatare from "./conmponents/Chatare";
import Header from "./conmponents/Header";
import Sidebar from "./conmponents/Sidebar";
import { useState } from "react";
import ChatProvider from "./conmponents/ChatProvider";
import Mode from "./conmponents/Mode";

export default function Home() {
  const darkTheme = createTheme({
    components: {
      //`MuiCssBaseline`になっているが`CssBaseLine`ても同様に作用した
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

  const [isOpen, setIsOpen] = useState(true);
  const [options, setOptions] = useState<string>("Agree");
  const [title, setTitle] = useState<string>("初回は無し、最初のプロンプトで表示");
  const [mode, setModel] = useState<string>("normal");
  const [type, setType] = useState<string>("普通");
  const [message, setMessage] = useState<string>("");

  //Provider
  const chatInfo = {
    title: title, // Set関数: Text, state: Header
    option: options, // Set関数: Header, state: Text
    model: mode, // Set関数: Side, state: Text
    type: type, // Set関数: Side, state: Text
    message: "", // Set関数: Text, state: ChatMessage
  };

  return (
    <ChatProvider chatInfo={chatInfo}>
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ display: "flex", height: "100%", width: "100%", bgcolor: "grey.100" }}>
          <CssBaseline />
          {isOpen && (
            <Box sx={{ display: "flex", width: "15%", height: "100%", flexDirection: "column", bgcolor: (theme) => theme.palette.background.default }}>
              <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setModel={setModel} setType={setType} />
            </Box>
          )}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} setOptions={setOptions} />
            <Chatare />
          </Box>
        </Box>
      </ThemeProvider>
    </ChatProvider>
  );
}
