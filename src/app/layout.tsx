import "./global.css";
import { Montserrat, Oxanium } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const oxanium = Oxanium({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Ghibli Collection",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${oxanium.variable}`} >
      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
