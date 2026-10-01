import snapshot from "../data/repos.json";
export const repoSnapshot = snapshot;
export const normalizeRepos = (repos) =>
  repos
    .filter((repo) => !repo.fork && !repo.archived)
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
export async function fetchGitHubRepos(signal) {
  const repos = [];
  for (let page = 1; ; page++) {
    const response = await fetch(
      `https://api.github.com/users/adityaanilraut/repos?per_page=100&sort=pushed&page=${page}`,
      { signal, headers: { Accept: "application/vnd.github+json" } },
    );
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const batch = await response.json();
    if (!Array.isArray(batch)) throw new Error("Invalid GitHub response");
    repos.push(...batch);
    if (batch.length < 100) break;
  }
  if (!repos.length) throw new Error("Empty repository response");
  return normalizeRepos(repos);
}
