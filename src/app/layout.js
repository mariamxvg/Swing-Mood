import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

import { Noto_Kufi_Arabic } from "next/font/google";

const arabicFont = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Swing Mood",
  description: "Luxary event experiences",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
{children}
      </body>
    </html>
  );
}
