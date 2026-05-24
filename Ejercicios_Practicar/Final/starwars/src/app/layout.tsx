import type { Metadata } from "next";
import Navigator from "./components/Navigator/Navigator";
import "./layout.css";

export const metadata: Metadata = {
  title: "Repaso Final Star Wars",
  description:
    "Proyecto para repara las estructura en base a la APi de Star Wars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layoutContainer">
          <div className="layoutTitle">
            <h1>Ejercicio Star wars</h1>
          </div>
          <Navigator />
          {children}
        </div>
      </body>
    </html>
  );
}
