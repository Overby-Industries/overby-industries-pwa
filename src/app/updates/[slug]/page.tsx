import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getUpdateBySlug, getAllUpdates } from "@/lib/getUpdates";

export async function generateStaticParams() {
  const updates = getAllUpdates();
  return updates.map((u: any) => ({ slug: u.slug }));
}

export default function UpdatePage({ params }: { params: { slug: string } }) {
  const { content, metadata } = getUpdateBySlug(params.slug);

  return (
    <main className="bg-gray-950 text-gray-200 py-16 px-6 md:px-12 lg:px-24">
      <article className="prose prose-invert max-w-none prose-headings:text-cyan-400 prose-a:text-cyan-300 prose-strong:text-white">
        <h1>{metadata.title}</h1>
        <p className="text-sm text-gray-400">{metadata.date}</p>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </main>
  );
}
