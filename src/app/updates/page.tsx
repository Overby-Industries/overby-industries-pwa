import Link from "next/link";
import { getAllUpdates } from "@/lib/getUpdates";

export default function UpdatesPage() {
  const updates = getAllUpdates();

  return (
    <main className="whitepaper-page graph-bg">
      <div className="whitepaper-content">
        <h1>Project Updates</h1>
        <p>
          A running log of what&apos;s shipped across the Overby Industries
          repos. Also available as an{" "}
          <Link href="/updates/feed.xml">RSS feed</Link>.
        </p>
        <ul>
          {updates.map((update: any) => (
            <li key={update.slug}>
              <strong>{update.date}</strong> &mdash; {update.title}
              {update.description ? <p>{update.description}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
