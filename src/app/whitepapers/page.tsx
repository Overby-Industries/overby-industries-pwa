import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getMarkdown } from "@/lib/getMarkdown";

export default async function WhitePaperPage() {
  const markdown = await getMarkdown("WHITEPAPER.md");

  return (
    <main className="whitepaper-page">
      <div className="whitepaper-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
      <div className="whitepaper-download">
        <a href="/WHITEPAPERS_OVERBY_INDUSTRIES.pdf" download className="btn btn-primary">
          Download Full PDF
        </a>
      </div>
    </main>
  );
}
