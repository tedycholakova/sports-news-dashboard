// Utility to filter news by search and category

export default function filterNews(news = [], search = '', category = '') {
  // Normalize search to lower-case for comparison
  const q = (search || '').trim().toLowerCase()

  // Use filter to apply search and category filters
  const result = news.filter((item) => {
    // If category is selected and doesn't match, exclude
    if (category && item.category !== category) return false

    // If there's a search query, check title or summary
    if (q) {
      const inTitle = item.title.toLowerCase().includes(q)
      const inSummary = item.summary.toLowerCase().includes(q)
      return inTitle || inSummary
    }

    // No search query, include the item
    return true
  })

  // Demonstrate map() by returning a new array with a small derived field
  return result.map((r) => ({ ...r, shortTitle: r.title.length > 40 ? r.title.slice(0, 37) + '...' : r.title }))
}
