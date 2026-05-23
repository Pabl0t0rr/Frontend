import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigatorPage from "./components/Navigator";

export const metadata: Metadata = {
  title: "Repaso Examen Final",
  description: "Este es un proyecto de repaso para el examen final de frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigatorPage />
        {children}
      </body>
    </html>
  );
}
