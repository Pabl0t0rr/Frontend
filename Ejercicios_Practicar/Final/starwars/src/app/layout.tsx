import type { Metadata } from "next";
import Navigator from "./components/Navigator/Navigator";

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
        <div>
          <Navigator />
          {children}
        </div>
      </body>
    </html>
  );
}
