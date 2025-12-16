import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllUpdates, getUpdateBySlug } from "@/lib/getUpdates";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const updates = getAllUpdates();
  return updates.map((u: { slug: string }) => ({
    slug: u.slug,
  }));
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const { content, metadata } = getUpdateBySlug(slug);

  return (
    <main className="bg-gray-950 px-6 py-16 text-gray-200 md:px-12 lg:px-24">
      <article className="prose prose-invert prose-headings:text-cyan-400 prose-a:text-cyan-300 prose-strong:text-white max-w-none">
        <h1>{metadata.title}</h1>
        <p className="text-sm text-gray-400">{metadata.date}</p>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </main>
  );
}