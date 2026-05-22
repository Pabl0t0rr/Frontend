import type { Metadata } from "next";
import "./globals.css";
import NavigatorPage from "./components/Navigator";

export const metadata: Metadata = {
  title: "Repaso FInal Rick and Morty",
  description:
    "Proyecto de repaso final del curso de React, con la temática de Rick and Morty",
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
