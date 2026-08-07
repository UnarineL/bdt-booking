import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ThemeBootstrap } from "@/components/theme/theme-bootstrap";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BDT Booking",
    template: "%s | BDT Booking",
  },
  description: "Professional booking and business operations, built the BDT way.",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d10" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeBootstrap />
      </head>
      <body>{children}</body>
    </html>
  );
}
