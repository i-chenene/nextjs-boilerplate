import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "iliès chenene",
  description: "iliès chenene — ml & ai portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} min-h-screen pt-12 pb-2 mx-6 flex justify-center sm:mx-12`}>
        {children}
      </body>
    </html>
  );
}
