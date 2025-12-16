import React from "react";
import { Metadata } from "next";

interface UpdatePageProps {
  params: {
    slug: string;
  };
}

interface Update {
  slug: string;
  title: string;
  summary: string;
  [key: string]: any;
}

interface UpdateDetailsProps {
  update: Update;
}

function UpdateDetails({ update }: UpdateDetailsProps) {
  return (
    <div>
      <h1>{update.title}</h1>
      <p>{update.summary}</p>
    </div>
  );
}

export async function generateMetadata({
  params,
}: UpdatePageProps): Promise<Metadata> {
  const res = await fetch(`https://api.example.com/updates/${params.slug}`);
  const update = await res.json();

  return {
    title: update.title,
    description: update.summary,
  };
}

export default async function UpdatePage({ params }: UpdatePageProps) {
  const res = await fetch(`https://api.example.com/updates/${params.slug}`);
  const update = await res.json();

  return <UpdateDetails update={update} />;
}

export async function generateStaticParams() {
  const res = await fetch("https://api.example.com/updates");
  const updates = await res.json();

  return updates.map((update: { slug: string }) => ({
    slug: update.slug,
  }));
}

export const revalidate = 3600; // Revalidate every hour

// Note: Ensure that the API endpoints used in the fetch calls are replaced with actual endpoints relevant to your application.
