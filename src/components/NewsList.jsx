import React, { useState } from 'react'
import NewsCard from './NewsCard'
import useNews from '../hooks/useNews'

export default function NewsList() {
  const {
    filteredNews,
    loading,
    error,
    search,
    category,
    categories,
    setSearch,
    setCategory,
  } = useNews()

  const [selectedId, setSelectedId] = useState(null)

  // Event handlers for UI controls
  const handleSearchChange = (e) => setSearch(e.target.value)
  const handleCategoryChange = (e) => setCategory(e.target.value)
  const handleSelect = (id) => setSelectedId(id)

  // Use find() to pick the selected article for details view
  const selectedArticle = filteredNews.find((a) => a.id === selectedId)

  // Conditional rendering for loading and error states
  if (loading) return <p>Loading news...</p>
  if (error) return <p style={{color: 'red'}}>Error: {error}</p>

  return (
    <section>
      <h2>Sports News Dashboard</h2>

      <div style={{display: 'flex', gap: 8, marginBottom: 12}}>
        <input
          value={search}
          onChange={handleSearchChange}
          placeholder="Search articles..."
        />
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        {/* Demonstrates map() to render a collection */}
        {filteredNews.length === 0 ? (
          <p>No articles match your search.</p>
        ) : (
          filteredNews.map((article) => (
            <NewsCard key={article.id} article={article} onClick={handleSelect} />
          ))
        )}
      </div>

      {selectedArticle ? (
        <aside style={{marginTop: 16, padding: 12, border: '1px solid #ccc'}}>
          <h3>Details</h3>
          <p><strong>{selectedArticle.title}</strong></p>
          <p>{selectedArticle.content}</p>
        </aside>
      ) : null}
    </section>
  )
}
