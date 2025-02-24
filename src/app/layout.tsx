import type { Metadata } from "next";
import { Geist as FontSans } from "next/font/google";
import "./globals.css";
import NavigationMenu from "@/components/NavigationMenu";

const fontSans = FontSans({
   variable: "--font-sans",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Informed Netizens",
   description: "You will be informed soon!",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${fontSans.variable} font-sans antialiased`}>
            <NavigationMenu />
            {children}
         </body>
      </html>
   );
}
