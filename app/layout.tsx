import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CommandMenu } from "@/components/ui/command-menu";
import { RESUME_DATA } from "@/data/resume-data";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | Resume`,
  description: RESUME_DATA.about_me,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {children}
      <CommandMenu links={[
        { url: "/", title: "Home" },
        { url: "/modern", title: "Modern" },
      ]}
      />
      </body>
    </html>
  );
}