import React from 'react'

// Reusable card for a single news article
export default function NewsCard({ article, onClick }) {
  // Uses conditional rendering (if) to avoid rendering when article is missing
  if (!article) return null

  return (
    <article className="news-card" style={{border: '1px solid #ddd', padding: 12, marginBottom: 8}}>
      <h3>{article.title}</h3>
      <p style={{fontSize: 12, color: '#666'}}>
        {article.category ? article.category : 'Uncategorized'} {/* ternary operator example */}
      </p>
      <p>{article.summary}</p>
      <div style={{display: 'flex', gap: 8}}>
        <button onClick={() => onClick(article.id)}>View details</button>
      </div>
    </article>
  )
}
