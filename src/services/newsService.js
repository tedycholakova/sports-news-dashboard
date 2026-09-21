// Simple mock service returning sports news. No backend.
// Demonstrates async functions, promises and basic error simulation.

const mockNews = [
  {
    id: '1',
    title: 'Local Team Wins Championship',
    category: 'Football',
    summary: 'An exciting final went into overtime.',
    content: 'Detailed match report with key plays and player quotes.',
    author: 'Reporter A',
    date: '2026-09-01',
  },
  {
    id: '2',
    title: 'Star Player Injured in Practice',
    category: 'Basketball',
    summary: 'Injury during training causes concern for season.',
    content: 'Medical update and expected recovery timeline.',
    author: 'Reporter B',
    date: '2026-09-02',
  },
  {
    id: '3',
    title: 'New Coach Brings Fresh Tactics',
    category: 'Football',
    summary: 'A new style aims to revamp the team.',
    content: 'Tactical analysis and preseason preparation details.',
    author: 'Reporter C',
    date: '2026-09-03',
  },
]

export async function fetchNews() {
  // Simulate network latency
  await new Promise((res) => setTimeout(res, 500))

  // Small chance to throw an error to allow try/catch demonstration in the hook
  if (Math.random() < 0.05) {
    throw new Error('Failed to fetch news (simulated)')
  }

  // Return a shallow copy to simulate fresh data
  return mockNews.map((n) => ({ ...n }))
}
