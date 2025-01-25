"use client";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Chatare from "./conmponents/Chatare";
import Header from "./conmponents/Header";
import Sidebar from "./conmponents/Sidebar";
import { useChatContext } from "./conmponents/ChatProvider";

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

  const { isOpen } = useChatContext();
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex", height: "100vh", width: "100vw", bgcolor: "grey.100" }}>
        <CssBaseline />
        {isOpen && (
          <Box sx={{ display: "flex", width: "15%", height: "100%", flexDirection: "column", bgcolor: (theme) => theme.palette.background.default }}>
            <Sidebar isOpen={isOpen} />
          </Box>
        )}
        <Box sx={{ flex: 1, flexGrow: 1,display: "flex", flexDirection: "column", height: "100%", width: "100%", }}>
          <Header isOpen={isOpen} />
          <Chatare />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
