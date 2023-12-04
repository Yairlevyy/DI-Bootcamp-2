import React from 'react'

function BookIcon({img,title,author,published}) {
  return (
    <div className='book_icon'>
      <img src={img}/>
      <p>{title}</p>
      <p>Author: {author}</p>
      <p>Published: {published}</p>
    </div>
  )
}

export default BookIcon