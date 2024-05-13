"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { NewNav } from "@/components/NewNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sibartech Desarrollo Web Profesional</title>
        <meta
          name="description"
          content="Sitio web de Sibartech, una empresa especializada en desarrollo web profesional. Ofrecemos soluciones innovadoras y personalizadas para tus necesidades en línea."
        />
        <link rel="icon" href="/assets/img/Interno/logo.webp" />
      </head>
      <body className={`scroll-smooth ${inter.className}`}>
        <NextUIProvider>
          <NewNav />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
