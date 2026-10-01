import { writeFile } from "node:fs/promises";

const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};
if (process.env.GITHUB_TOKEN)
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
const repos = [];
for (let page = 1; ; page++) {
  const response = await fetch(
    `https://api.github.com/users/adityaanilraut/repos?per_page=100&sort=pushed&page=${page}`,
    { headers, signal: AbortSignal.timeout(15000) },
  );
  if (!response.ok)
    throw new Error(
      `GitHub returned ${response.status}; existing snapshot was preserved.`,
    );
  const batch = await response.json();
  if (!Array.isArray(batch)) throw new Error("Unexpected repository response");
  repos.push(
    ...batch
      .filter((repo) => !repo.fork && !repo.archived)
      .map(
        ({
          name,
          description,
          html_url,
          language,
          pushed_at,
          stargazers_count,
          topics,
        }) => ({
          name,
          description,
          html_url,
          language,
          pushed_at,
          stargazers_count,
          topics,
        }),
      ),
  );
  if (batch.length < 100) break;
}
if (!repos.length)
  throw new Error("Refusing to replace snapshot with an empty repository list");
await writeFile(
  new URL("../src/data/repos.json", import.meta.url),
  JSON.stringify({ syncedAt: new Date().toISOString(), repos }, null, 2) + "\n",
);
console.log(`Synced ${repos.length} public repositories.`);
