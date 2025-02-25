import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string): string => {
   const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
   };

   const date = new Date(dateString);
   return new Intl.DateTimeFormat("en-US", options).format(date);
};
