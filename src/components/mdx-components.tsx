import { ComponentPropsWithoutRef } from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

export const MDXComponents = {
   // Headings
   h1: ({ children }: ComponentPropsWithoutRef<"h1">) => (
      <h1 className="mt-7 text-2xl text-foreground font-bold">{children}</h1>
   ),
   h2: ({ children }: ComponentPropsWithoutRef<"h2">) => (
      <h2 className="mt-7 text-xl text-foreground font-semibold">{children}</h2>
   ),
   h3: ({ children }: ComponentPropsWithoutRef<"h3">) => (
      <h3 className="mt-4 mb-2 text-lg text-foreground font-semibold leading-none">{children}</h3>
   ),

   // Emphasized & Strong text elements
   em: ({ children }: ComponentPropsWithoutRef<"em">) => (
      <em className="italic text-foreground">{children}</em>
   ),
   strong: ({ children }: ComponentPropsWithoutRef<"strong">) => (
      <strong className="my-4 font-medium text-foreground">{children}</strong>
   ),

   // Paragraphs
   p: ({ children }: ComponentPropsWithoutRef<"p">) => (
      <p className="p leading-relaxed text-muted-foreground">{children}</p>
   ),

   // Image
   img: ({ alt = "", ...props }: ComponentPropsWithoutRef<"img">) => (
      <Image
         width={0}
         height={0}
         sizes="100vw"
         style={{ width: "100%", height: "auto" }}
         alt={alt || "Image"}
         priority
         className="p-3 my-8 border border-border rounded-lg overflow-hidden"
         {...(props as Omit<ImageProps, "alt">)}
      />
   ),

   Image: Image,

   // Anchor element
   a: ({ href, children, ...props }: ComponentPropsWithoutRef<"a">) => {
      const className = "text-sky-600 hover:text-sky-800 hover:underline";
      if (href?.startsWith("/")) {
         return (
            <Link href={href} className={className} {...props}>
               {children}
            </Link>
         );
      }
      return (
         <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
            {children}
         </a>
      );
   },

   // List elements
   ul: ({ children }: ComponentPropsWithoutRef<"ul">) => (
      <ul className="p list-disc pl-5 space-y-2">{children}</ul>
   ),
   ol: ({ children }: ComponentPropsWithoutRef<"ol">) => (
      <ol className="p list-decimal pl-5 space-y-2">{children}</ol>
   ),
   li: ({ children }: ComponentPropsWithoutRef<"li">) => (
      <li className="text-secondary-foreground">{children}</li>
   ),

   // Horizontal-Rule
   hr: () => <hr className="border-t-2 border-border my-8" />,

   // Table elements
   table: ({ children }: ComponentPropsWithoutRef<"table">) => (
      <table className="min-w-full table-auto text-sm">{children}</table>
   ),
   th: ({ children }: ComponentPropsWithoutRef<"th">) => (
      <th className="px-4 py-2 font-semibold border-b-2 border-border">{children}</th>
   ),
   td: ({ children }: ComponentPropsWithoutRef<"td">) => (
      <td className="px-4 py-2 border-b border-border">{children}</td>
   ),
   tr: ({ children }: ComponentPropsWithoutRef<"tr">) => <tr>{children}</tr>,

   // Blockquote
   blockquote: ({ children }: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote className="p mt-4 border-l-4 pl-4 italic text-muted-foreground border-border">
         {children}
      </blockquote>
   ),

   // other components
};
