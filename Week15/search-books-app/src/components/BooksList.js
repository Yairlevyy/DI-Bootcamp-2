import React, {useContext, useEffect, useState} from 'react'
import { BooksContext } from '../App';
import BookIcon from './BookIcon';

function BooksList() {
  const {data} = useContext(BooksContext);

  useEffect(()=>{
    console.log(data)
  },[data]);

  return (
    <div className='book_list'>
      {data &&
        data.map(item=>(
          <>
            <BookIcon img={item.volumeInfo.imageLinks.thumbnail} title={item.volumeInfo.title} author={item.volumeInfo.authors[0]} published={item.volumeInfo.publishedDate} />
          </>
        ))
      }
    </div>
  )
}

export default BooksList