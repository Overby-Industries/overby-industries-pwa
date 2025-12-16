// app/sitemap.ts
/** import { getAllUpdates } from '@/lib/getUpdates';

export default async function sitemap() {
  const baseUrl = 'https://overbyindustries.space'; // 🔁 CHANGE THIS to your actual domain

  // Fetch all updates for dynamic routes
  const updates = getAllUpdates();

  const updateRoutes = updates.map((update: any) => ({
    url: `${baseUrl}/updates/${update.slug}`,
    lastModified: new Date(update?.metadata?.date ?? new Date().toISOString()).toISOString().split('T')[0], // format: YYYY-MM-DD
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
    },
    ...updateRoutes,
  ];
} **/