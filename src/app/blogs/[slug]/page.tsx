import fs from "fs";
import path from "path";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdx-components";

type frontmatterType = {
   title: string;
   date: string;
   tags: string[];
   summary: string;
};

export async function generateStaticParams() {
   const blogDir = path.join(process.cwd(), "src/data/blogs");
   const filenames = fs.readdirSync(blogDir);

   return filenames.map((filename) => ({
      slug: filename.replace(".mdx", ""),
   }));
}

const BlogPost = async ({ params }: { params: { slug: string } }) => {
   const slug = (await params).slug;
   const filePath = path.join(process.cwd(), "src/data/blogs", `${slug}.mdx`);

   if (!fs.existsSync(filePath)) {
      notFound();
   }

   const fileContent = fs.readFileSync(filePath, "utf-8");
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
