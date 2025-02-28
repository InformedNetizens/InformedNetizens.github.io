import type { Metadata } from "next";
import { Geist as FontSans } from "next/font/google";
import "./globals.css";
import NavigationMenu from "@/components/NavigationMenu";

const sitename = "Informed Netizens";

const fontSans = FontSans({
   variable: "--font-sans",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: {
      template: `%s | ${sitename}`,
      default: sitename,
   },
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
            <main className="pt-20 w-full min-h-screen flex flex-col content-start">
               {children}
            </main>
         </body>
      </html>
   );
}
