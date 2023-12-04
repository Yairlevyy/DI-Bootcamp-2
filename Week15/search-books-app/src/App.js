import { createContext, useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import BooksList from './components/BooksList'

export const BooksContext = createContext();

function App() {
  const [data,setData] = useState([]);

  const getData = (terms) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${terms}&key=AIzaSyAaNEFuBZ9Ir4QbHA9MqUBDKQcC4QAJ6Zg`)
    .then(res=>res.json())
    .then(data=>setData(data.items))
  }

  return (
    <BooksContext.Provider value={{getData,data}}>
      <Header />
      <SearchBar />
      <BooksList />
    </BooksContext.Provider>
  );
}

export default App;
