"use client";

import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useThemeStore } from "@/theme/theme.store";
import { StyledComponentsRegistry } from "./registry";
import { ThemeProvider } from "styled-components";
import { GlobalStylesWrapper } from "./global.styles";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function AppWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useThemeStore((state) => state.selectedTheme);
  const pathname = usePathname();

  return (
    <>
      <head>
        <title>Business Station</title>
        <link rel="icon" href="../../assets/logo/icon512_rounded.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStylesWrapper>{children}</GlobalStylesWrapper>
          </ThemeProvider>
        </StyledComponentsRegistry>
        <ToastContainer stacked />
      </body>
    </>
  );
}
