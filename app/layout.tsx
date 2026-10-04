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
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} min-h-screen bg-white px-5 pt-6 pb-2 text-[#222] flex justify-center sm:px-12 sm:pt-12`}>
        {children}
      </body>
    </html>
  );
}
