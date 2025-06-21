import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "NutriGrow",
  description: "Solusi cerdas untuk pertanian modern dan nutrisi tanaman Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
