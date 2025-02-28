import React from "react";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

function NavigationMenu() {
   return (
      <header className="fixed inset-x-0 top-0 h-20 flex items-center bg-white/75 backdrop-blur">
         <nav
            className="container py-3 relative flex justify-between md:grid grid-cols-3 items-center"
            aria-label="Main Navigation"
         >
            {/* Left side navigation items */}
            <div className="flex items-center gap-x-5 md:gap-x-6 lg:gap-x-8 md:divide-x order-2 md:order-1">
               <button
                  aria-label="Open menu"
                  className="order-2 md:order-1 focus:outline-none focus:ring-2 focus:ring-primary"
               >
                  <Menu className="size-5" aria-hidden="true" />
               </button>
               <button
                  aria-label="Search"
                  className="pl-5 md:pl-8 order-1 md:order-2 focus:outline-none focus:ring-2 focus:ring-primary"
               >
                  <Search className="size-5" aria-hidden="true" />
               </button>
            </div>

            {/* Center: Brand Logo */}
            <div className="flex items-center justify-center order-1 md:order-2">
               <Link
                  href="/"
                  className="text-xl md:text-2xl font-bold text-foreground text-center whitespace-nowrap"
                  aria-label="Go to homepage"
               >
                  Informed Netizens
               </Link>
            </div>

            {/* Right side navigation links */}
            <div className="hidden md:flex items-center justify-end order-3">
               <ul className="flex items-center space-x-4">
                  <li>
                     <Link
                        href="/login"
                        className="px-4 py-2 rounded-md border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary font-medium block transition-colors duration-200"
                        aria-label="Subscribe for updates"
                     >
                        Subscribe
                     </Link>
                  </li>
               </ul>
            </div>

            {/* Divider */}
            <div className="container absolute top-full inset-x-0">
               <div className="border border-gray-100" />
            </div>
         </nav>
      </header>
   );
}

export default NavigationMenu;
