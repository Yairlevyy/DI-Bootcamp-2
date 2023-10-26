import './App.css';
import { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
                                            {name: "Php", votes: 0},
                                            {name: "Python", votes: 0},
                                            {name: "JavaSript", votes: 0},
                                            {name: "Java", votes: 0}
                                          ]);
  
  const updateLanguage = (lang) => {
    const updatedLanguages = languages.map((language) => {
      if (language.name === lang) {
        return { ...language, votes: language.votes + 1 };
      }
      return language;
    });
    setLanguages(updatedLanguages);
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          languages.map(item=>(
            <div style={{border:'2px solid white',margin:'10px',minWidth:'150px',padding:'10px'}}>
              <p>{item.votes} {item.name}</p>
              <button onClick={()=>updateLanguage(item.name)}>Click Here</button>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
