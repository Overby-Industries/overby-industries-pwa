/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://overbyindustries.space", // replace with your site's URL
  generateRobotsTxt: true, // also generates /robots.txt
  sitemapSize: 5000,
  generateIndexSitemap: true,
  exclude: ["/server-sitemap.xml"], // example if you want some routes hidden
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      // add deny rules here if needed
    ],
  },
};
