import React from 'react'

export default function Book({books}) {
    console.log("🚀 ~ Book ~ Book:", books)
    
  return (
    <div>

        <h5>Book :{books.id}</h5>
    </div>
  )
}
