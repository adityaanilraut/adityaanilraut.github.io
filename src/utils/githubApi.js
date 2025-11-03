const GITHUB_USERNAME = 'adityaanilraut';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

// Pinned repositories to highlight
const PINNED_REPOS = [
  'homebrew-coderai',
  'AI-Model-Context-Routing',
  'HavenAI-Live-VideoCall-with-AI-Agent',
  'ChatBot-Chain-of-Thought',
  'Finetuning-Google-Gemma2',
  'Chess-engine'
];

export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(GITHUB_API_URL + '?per_page=100&sort=updated');
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const repos = await response.json();
    
    // Filter out forks and sort by stars and update date
    const filteredRepos = repos
      .filter(repo => !repo.fork)
      .sort((a, b) => {
        // Prioritize pinned repos
        const aIsPinned = PINNED_REPOS.includes(a.name);
        const bIsPinned = PINNED_REPOS.includes(b.name);
        
        if (aIsPinned && !bIsPinned) return -1;
        if (!aIsPinned && bIsPinned) return 1;
        
        // Then sort by stars
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        
        // Finally by update date
        return new Date(b.updated_at) - new Date(a.updated_at);
      });
    
    return filteredRepos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

export const isPinnedRepo = (repoName) => {
  return PINNED_REPOS.includes(repoName);
};

