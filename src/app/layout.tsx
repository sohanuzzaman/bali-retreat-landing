import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Návrat K Sebe - Liečivý retreat na Bali",
  description: "8-dňový transformačný liečivý pobyt pre ženy v raji na Bali – 1.–8. mája 2026.",
  keywords: "Bali retreat, ženský retreat, jóga, meditácia, transformácia",
  openGraph: {
    title: "Návrat K Sebe - Liečivý retreat na Bali",
    description: "8-dňový transformačný liečivý pobyt pre ženy v raji na Bali – 1.–8. mája 2026",
    type: "website",
    locale: "sk_SK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className="font-montserrat antialiased"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
