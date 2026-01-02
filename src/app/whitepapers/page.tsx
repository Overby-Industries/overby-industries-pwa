import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getMarkdown } from "@/lib/getMarkdown";

export default async function WhitePaperPage() {
  const markdown = await getMarkdown("WHITEPAPER.md");

  return (
    <main className="bg-gray-950 text-gray-200 py-16 px-6 md:px-12 lg:px-24">
      <div className="prose prose-invert max-w-none prose-headings:text-cyan-400 prose-a:text-cyan-300 prose-strong:text-white">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
      <div className="text-center mt-12">
        <a
          href="/WHITEPAPERS_OVERBY_INDUSTRIES.pdf"
          download
          className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold"
        >
          📄 Download Full PDF
        </a>
      </div>
    </main>
  );
}

