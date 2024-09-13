import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alan Perlis Quotes",
  description: "A free API for random Alan Perlis epigrams.",
  icons: [
    {
      url: '/favicon.ico',
      sizes: '64x64 32x32 24x24 16x16',
      type: 'image/x-icon',
    },
    {
      url: "/perlis192.png",
      type: "image/png",
      sizes: "192x192",
    },
    {
      url: "/perlis512.png",
      type: "image/png",
      sizes: "512x512",
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
