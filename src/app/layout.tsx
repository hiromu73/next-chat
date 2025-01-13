import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";

import { Box, CssBaseline } from "@mui/material";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "https://clerk.com/terms",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <Box component="main" sx={{ height: "100vh",width: "100vw" }}>
                {children}
              </Box>
            </Box>
          </AppRouterCacheProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
