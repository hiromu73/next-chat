
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { dark } from '@clerk/themes'
// import localFont from "next/font/local";
import "./globals.css";
// import { ThemeProvider, createTheme } from '@mui/material/styles';

import {
  Box,
  CssBaseline,
} from "@mui/material";

// const inter = Inter({ subsets: ["latin"] });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Debete App",
  description: "Debete App",
};

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'dark',
  //     background: {
  //       paper: '#212121',
  //     },
  //     primary: {
  //       main: '#2F2F2F',
  //     },
  //     secondary: {
  //       main: '#2E2E2E'
  //     },
  //     text: {
  //     primary: '#fff',
  //     secondary: '#46505A',
  //   },
  //   }
  // })

  // const lightTheme = createTheme({
  //   palette: {
  //     mode: 'light',
  //     secondary: {
  //       main: '#FFFFFF',
  //       light: '#F0F4F8',
  //       }
  //     }
  // })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider  appearance={{
      baseTheme: dark,
      layout: {
      socialButtonsPlacement: 'bottom',
      socialButtonsVariant: 'iconButton',
      termsPageUrl: 'https://clerk.com/terms'
    }
    }}>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>
            {/* <ThemeProvider theme={darkTheme}> */}
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
                {children}
              </Box>
            </Box>
            {/* </ThemeProvider> */}
          </AppRouterCacheProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
