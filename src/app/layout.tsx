import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dotyk bohyně v tobě - Luxusní retreat na Bali",
  description: "Luxusní 10-denní pobyt pro ženy v ráji na Bali – 7.–17. května 2026. Transformační retreat s jógou, meditací a duchovním růstem.",
  keywords: "Bali retreat, ženský retreat, jóga, meditace, transformace, Lemuria",
  openGraph: {
    title: "Dotyk bohyně v tobě - Luxusní retreat na Bali",
    description: "Luxusní 10-denní pobyt pro ženy v ráji na Bali – 7.–17. května 2026",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${playfair.variable} ${cinzel.variable} ${montserrat.variable} font-montserrat antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
