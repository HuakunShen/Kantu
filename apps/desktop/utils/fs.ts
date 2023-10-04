import { readDir } from "@tauri-apps/api/fs";
import { convertFileSrc } from "@tauri-apps/api/tauri";

export async function readFolderFromDisk(folderPath: string): string[] {
  const files = await readDir(folderPath);
  const convertedFiles = files.map((f) => convertFileSrc(f.path));
  return convertedFiles;
}
