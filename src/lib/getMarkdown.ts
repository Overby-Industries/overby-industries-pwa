import { promises as fs } from "fs";
import path from "path";

export async function getMarkdown(fileName: string): Promise<string> {
  const filePath = path.join(process.cwd(), "content", fileName);
  const fileContents = await fs.readFile(filePath, "utf8");
  return fileContents;
}