import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(
  "C:",
  "Users",
  "jack",
  ".cursor",
  "projects",
  "c-Users-jack-Desktop-gn-math-DONTDMCA-main-gn-math-DONTDMCA-main",
  "agent-tools",
  "c52ae04c-48b9-41fc-bdfb-31be1bc9b84f.txt"
);
const out = path.join(__dirname, "drive-zones.json");

const raw = fs.readFileSync(src, "utf8");
const pat =
  /\[([^\]]+)\]\(https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view/g;
const items = [];
let m;
while ((m = pat.exec(raw)) !== null) {
  let name = m[1];
  if (/\.html$/i.test(name)) name = name.slice(0, -5);
  else if (/\.htm$/i.test(name)) name = name.slice(0, -4);
  const fileId = m[2];
  items.push({
    id: 10000 + items.length,
    name,
    cover: `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`,
    url: `https://drive.google.com/file/d/${fileId}/preview`,
    author: "Google Drive",
    special: ["drive"],
  });
}

if (items.length !== 307) {
  console.error("count", items.length);
  process.exit(1);
}

fs.writeFileSync(out, JSON.stringify(items, null, 2), "utf8");
console.log("ok", items.length, out);
