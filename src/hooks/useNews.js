import { useEffect, useState } from 'react'
import { fetchNews } from '../services/newsService'
import filterNews from '../utils/filterNews'

export default function useNews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // UI state
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchNews()
        if (!cancelled) {
          setNews(data)
        }
      } catch (err) {
        // Demonstrates exception handling with try/catch
        setError(err.message || 'Unknown error')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [])

  // compute available categories using forEach to iterate an object of counts
  const categories = (() => {
    const counts = {}
    news.forEach((n) => {
      const key = n.category || 'Uncategorized'
      counts[key] = (counts[key] || 0) + 1
    })
    // Return keys as array
    return Object.keys(counts)
  })()

  const filteredNews = filterNews(news, search, category)

  return {
    news,
    filteredNews,
    loading,
    error,
    search,
    category,
    categories,
    setSearch,
    setCategory,
  }
}
