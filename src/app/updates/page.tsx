import Link from "next/link";
import { getAllUpdates } from "@/lib/getUpdates";

export default function UpdatesPage() {
  const updates = getAllUpdates();

  return (
    <main className="bg-gray-950 px-6 py-16 text-gray-200 md:px-12 lg:px-24">
      <h1 className="mb-12 text-4xl font-extrabold text-cyan-400">
        Project Updates
      </h1>
      <ul className="space-y-8">
        {updates.map((update: any) => (
          <li key={update.slug}>
            <Link href={`/updates/${update.slug}`}>
              <h2 className="text-2xl font-bold text-cyan-300 hover:underline">
                {update.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-400">{update.date}</p>
            <p className="mt-2 line-clamp-2 text-gray-300">
              {update.description || ""}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
