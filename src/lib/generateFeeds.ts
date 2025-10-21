import RSS from 'rss';

import { getAllUpdates } from './getUpdates';


export function generateFeeds() {
  const updates = getAllUpdates();

  const siteUrl = 'https://overbyindustries.space'; // replace with actual domain

  // Create RSS feed
  const feed = new RSS({
    title: 'Overby Industries Updates',
    description:
      'Ethical space resource utilization and project development log',
    site_url: siteUrl,
    feed_url: `${siteUrl}/updates/feed.xml`,
    language: 'en',
    pubDate: new Date(),
    ttl: 60,
  });

  updates.forEach((update: any) => {
    feed.item({
      title: update.title,
      description: update.description || '',
      url: `${siteUrl}/updates/${update.slug}`,
      date: update.date,
    });
  });

  const rss = feed.xml({ indent: true });
  const json = JSON.stringify(feed.item, null, 2);

  return { rss, json };
}
