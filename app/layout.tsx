import type { Metadata } from "next";
import { SiteMotion } from "./components/SiteMotion";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pavneet Singh Realty",
    template: "%s | Pavneet Singh Realty",
  },
  description:
    "Residential, commercial, industrial, and investment real estate guidance across Nova Scotia with Pavneet Singh, REALTOR®.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/images/pavneet-brand-logo.jpg",
    shortcut: "/images/pavneet-brand-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteMotion />
        {children}
      </body>
    </html>
  );
}
