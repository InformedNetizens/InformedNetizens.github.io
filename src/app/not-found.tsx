import Link from "next/link";

export default function NotFound() {
   return (
      <div className="flex-grow flex flex-col space-y-4 items-center justify-center text-center">
         <div className="px-2 py-1 mb-2 rounded bg-sky-100 text-sky-600 text-sm">404 Error</div>

         <div className="leading-none">
            <h1 className="text-3xl font-bold">Page not found</h1>
            <p className="mt-3 mb-8 text-lg text-muted-foreground">
               Sorry the page you are looking for doesn&apos;t exits or has been moved.
            </p>
            <Link href="/" className="text-sky-500 hover:text-sky-600">
               View our latest blog posts →
            </Link>
         </div>
      </div>
   );
}
