import React, {useContext, useState} from 'react'
import { BooksContext } from '../App';
import '../App.css';

function SearchBar() {
  const [terms,setTerms] = useState('')
  const {getData} = useContext(BooksContext);
  return (
    <div className='search_bar'>
      <input type='text' placeholder='title of the books...' onChange={(e)=>setTerms(e.target.value)}/>
      <button onClick={()=>getData(terms)}>Search</button>
    </div>
  )
}

export default SearchBar