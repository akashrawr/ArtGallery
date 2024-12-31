import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArtyFiji", // This title should be descriptive enough for the app
  description: "Discover beautiful artwork and creative expressions on ArtyFiji.", // Updated to provide more context
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no"> {/* Prevent translation of the entire page */}
      <head>
        <link rel="icon" href="/artyfiji.ico" type="image/x-icon" />
        <title>ArtyFiji</title>
        <meta name="description" content="Discover beautiful artwork and creative expressions on ArtyFiji." />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="notranslate"> {/* Ensure "ArtyFiji" is not translated */}
          {children}
        </div>
      </body>
    </html>
  );
}
