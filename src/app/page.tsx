import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";

type frontmatterType = {
   title: string;
   date: string;
   tags: string[];
   summary: string;
};

export default async function Home() {
   const filenames = await fs.readdir(path.join(process.cwd(), "src/data/blogs"));

   const blogs = await Promise.all(
      filenames.map(async (filename) => {
         const fileContent = await fs.readFile(
            path.join(process.cwd(), "src/data/blogs", filename),
            "utf-8"
         );
         const { frontmatter } = await compileMDX<frontmatterType>({
            source: fileContent,
            options: { parseFrontmatter: true },
         });

         return {
            slug: filename.replace(".mdx", ""),
            ...frontmatter,
         };
      })
   );

   return (
      <section className="mt-4 lg:mt-8 xl:mt-12 container">
         <h1 className="text-xl lg:text-4xl font-bold">Latest Blogs</h1>

         <ul className="mt-4 lg:mt-8 xl:mt-12 grid gap-y-8 sm:gap-y-10 lg:gap-y-12">
            {blogs.map((blog) => (
               <li key={blog.slug} className="pt-8 sm:pt-10 lg:pt-12 border-t border-border">
                  <article className="grid xl:grid-cols-4 gap-y-2">
                     <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-muted-foreground text-sm sm:text-base">
                           <time dateTime={new Date(blog.date).toISOString()}>
                              {new Date(blog.date).toLocaleDateString("en-US", {
                                 month: "long",
                                 day: "numeric",
                                 year: "numeric",
                              })}
                           </time>
                        </dd>
                     </dl>

                     <div className="space-y-4 xl:col-span-3 max-w-screen-md">
                        <Link href={`/blogs/${blog.slug}`}>
                           <h1 className="sm:text-lg lg:text-xl font-semibold">{blog.title}</h1>
                        </Link>

                        <p className="text-muted-foreground">{blog.summary}</p>

                        <Link href={`/blogs/${blog.slug}`} className="mt-4 block text-sky-600">
                           Read more →
                        </Link>
                     </div>
                  </article>
               </li>
            ))}
         </ul>
      </section>
   );
}
