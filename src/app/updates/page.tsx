import Link from "next/link";
import { getAllUpdates } from "@/lib/getUpdates";

export default function UpdatesPage() {
  const updates = getAllUpdates();

  return (
    <main className="bg-gray-950 text-gray-200 py-16 px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-12">
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
            <p className="text-gray-400 text-sm">{update.date}</p>
            <p className="text-gray-300 mt-2 line-clamp-2">
              {update.description || ""}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
