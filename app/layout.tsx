import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

// Elegant serif for headings - inspired by high-end editorial design
const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Clean sans-serif for body text - refined and readable
const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moshe Berkowitz Photography | Wedding & Portrait Photographer",
  description: "Award-winning photographer specializing in weddings, portraits, and events. Capturing timeless moments with an artistic eye.",
  keywords: ["photography", "wedding photographer", "portrait photography", "event photography"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${montserrat.variable} antialiased bg-cream-50 text-charcoal-900`}
      >
        {children}
      </body>
    </html>
  );
}
