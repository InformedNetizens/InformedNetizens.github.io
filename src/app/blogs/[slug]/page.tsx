import path from "path";
import { promises as fs } from "fs";
import { formatDate } from "@/lib/utils";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdx-components";

type frontmatterType = {
   title: string;
   date: string;
   tags: string[];
   summary: string;
};

export async function generateStaticParams() {
   const filenames = await fs.readdir(path.join(process.cwd(), "src/data/blogs"));
   return filenames.map((filename) => ({
      slug: filename.replace(".mdx", ""),
   }));
}

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
   const { slug } = await params;
   const fileContent = await fs.readFile(
      path.join(process.cwd(), "src/data/blogs", `${slug}.mdx`),
      "utf-8"
   );
   const { frontmatter } = await compileMDX<frontmatterType>({
      source: fileContent,
      options: { parseFrontmatter: true },
      components: MDXComponents,
   });

   return {
      title: frontmatter.title,
      description: frontmatter.summary,
   };
};

const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
   const { slug } = await params;
   const fileContent = await fs.readFile(
      path.join(process.cwd(), "src/data/blogs", `${slug}.mdx`),
      "utf-8"
   );
   const { content, frontmatter } = await compileMDX<frontmatterType>({
      source: fileContent,
      options: { parseFrontmatter: true },
      components: MDXComponents,
   });

   return (
      <article className="mt-12 mb-3 container max-w-screen-lg mx-auto">
         <p className="text-gray-500 text-center">{formatDate(frontmatter.date)}</p>
         <h1 className="text-foreground mt-2 mb-12 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug max-w-screen-md mx-auto text-balance">
            {frontmatter.title}
         </h1>
         {content}
      </article>
   );
};

export default BlogPost;
