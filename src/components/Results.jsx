import React from 'react'

export default function Results({ results }) {
  return (
    <div>
        {
            results.map((item) => (
                <div key={item.id}>
                    <h2>
                    {item.title || item.name || 'Title not available'}
                    </h2>
                </div>
            ))
        }
    </div>
  )
}
