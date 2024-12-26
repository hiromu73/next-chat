"use client"
import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Chatare from "./conmponents/Chatare";
import Header from "./conmponents/Header";
import Sidebar from "./conmponents/Sidebar";
import { useState } from "react";

export default function Home() {
    const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        paper: '#212121',
      },
      primary: {
        main: '#2F2F2F',
      },
      secondary: {
        main: '#2E2E2E'
      },
      text: {
      primary: '#fff',
      secondary: '#46505A',
    },
    }
  })

  // const theme = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'grey.100' }}>
        <CssBaseline />
        {/* <Sidebar /> */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* <Header /> */}
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Chatare />
      </Box>
    </Box>
    </ThemeProvider>
  )
//   const darkTheme = createTheme({
//     palette: {
//       mode: 'dark',
//       primary: {
//         main: '#212121',
//         dark: '#2F2F2F'
//         }
//       }
//   })

//   const lightTheme = createTheme({
//     palette: {
//       mode: 'light',
//       secondary: {
//         main: '#FFFFFF',
//         light: '#F0F4F8',
//         }
//       }
//   })

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <Container>
//       <Paper elevation={3} sx={{ p: 5 }}>
//         <h1 className={styles.title}>Welcome to Material UI!</h1>
//         <FormGroup>
//           <FormControlLabel
//             control={<Checkbox defaultChecked />}
//             label="Label"
//           />
//           <FormControlLabel required control={<Checkbox />} label="Required" />
//           <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
//         </FormGroup>
//         <hr />
//         <Button variant="contained" color="primary">
//           ボタン
//         </Button>
//       </Paper>
//     </Container>
//     </ThemeProvider>

//   );
}
