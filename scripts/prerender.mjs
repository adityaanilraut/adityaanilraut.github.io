import { readFile, writeFile, rm } from "node:fs/promises";
import { render } from "../.prerender/entry-server.js";

const index = new URL("../dist/index.html", import.meta.url);
const template = await readFile(index, "utf8");
if (!template.includes('<div id="root"></div>'))
  throw new Error("Missing prerender target");
await writeFile(
  index,
  template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`),
);
await rm(new URL("../.prerender", import.meta.url), {
  recursive: true,
  force: true,
});
console.log(
  "Prerendered portfolio: content is available before JavaScript loads.",
);
