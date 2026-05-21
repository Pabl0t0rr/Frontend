import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import NavigatorPages from "./components/NavigatorPages";

export const metadata: Metadata = {
  title: "Repasote final increíble",
  description: "Que facil que va a estar ese examen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="MainContainer">
          <div className="TitleContainer">
            <h1>Página que llama a cosas de la API de Rick&Mortis</h1>
          </div>
          <NavigatorPages />
          {children}
        </div>
      </body>
    </html>
  );
}
