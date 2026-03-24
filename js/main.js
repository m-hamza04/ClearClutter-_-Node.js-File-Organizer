import fs from 'fs/promises';
import path from 'path';

const baseAddress = "C:\\Users\\Hamza\\Desktop\\Clear_Cluter";

const files = await fs.readdir(baseAddress);

for (const item of files) {

  // ignore folders
  if (!item.includes(".")) continue;

  // get extension
  const ext = item.split(".").pop();

  if (ext === "json") {
    console.log(`Skipped ${item}`);
    continue;
  }

  const folderPath = path.join(baseAddress, ext);
  const oldPath = path.join(baseAddress, item);
  const newPath = path.join(folderPath, item);

  await fs.mkdir(folderPath, { recursive: true });
  await fs.rename(oldPath, newPath);

  console.log(`Moved ${item} → ${ext}/`);
}
