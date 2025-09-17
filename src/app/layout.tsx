
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { DhakPlayer } from "@/components/dhak-player";
import React from "react";
import { LayoutProvider } from "@/components/layout-provider";

// Metadata can't be in a client component, but we can export it separately.
export const metadata: Metadata = {
  title: "DSA - Dubrajpur Sports Association",
  description: "Durga Puja Celebration by Dubrajpur Sports Association",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Hind+Siliguri:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
          <LayoutProvider>
            <div
              className="relative flex min-h-dvh flex-col"
            >
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <Toaster />
              <DhakPlayer />
            </div>
          </LayoutProvider>
      </body>
    </html>
  );
}
