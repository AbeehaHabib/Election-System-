import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Election Intel — Iceland & Luxembourg 2016–2026",
  description: "Electoral research by Abeeha Habib · S25BINCE1M04005",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
