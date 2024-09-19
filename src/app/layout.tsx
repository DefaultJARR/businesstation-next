import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import AppWrapper from "./app-wrapper";

export const metadata: Metadata = {
  title: "eva",
  description: "eva",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppWrapper>{children}</AppWrapper>
    </html>
  );
}
