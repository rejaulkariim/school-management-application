import Navbar from "@/components/design/navbar/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

export const metadata: Metadata = {
  title:
    "মুক্তিযোদ্ধা প্রজন্ম একাডেমী এন্ড ইঞ্জিনিয়ার ফরিদুল ইসলাম উচ্চ বিদ্যালয়",
  description: "চরবাহার, সাতখামাইর, বর্মী, শ্রীপুর, গাজীপুর",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", font.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
