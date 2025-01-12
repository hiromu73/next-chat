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
  //Provider
  const chatInfo = {
    title: title,
    option: options,
    message: "",
  };

  console.log(options);

  return (
    <ChatProvider chatInfo={chatInfo}>
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ display: "flex", height: "100vh", bgcolor: "grey.100" }}>
          <CssBaseline />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setModel={setModel} />
          </Box>
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} setOptions={setOptions} />
            <Chatare />
          </Box>
        </Box>
      </ThemeProvider>
    </ChatProvider>
  );
}
