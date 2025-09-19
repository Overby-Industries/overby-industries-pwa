import fs from "fs";
import path from "path";
import matter from "gray-matter";

const updatesDir = path.join(process.cwd(), "content/updates");

export function getAllUpdates() {
  const files = fs.readdirSync(updatesDir);

  const updates = files.map((file) => {
    const filePath = path.join(updatesDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    const { data } = matter(content);

    return {
      slug: file.replace(".md", ""),
      ...data,
    };
  });

  // sort by date descending
  return updates.sort((a: any, b: any) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getUpdateBySlug(slug: string) {
  const filePath = path.join(updatesDir, slug + ".md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug, metadata: data, content };
}