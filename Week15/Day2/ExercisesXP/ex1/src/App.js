import './App.css';
import { useState,createContext } from 'react';
import Container from './Container';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        <Container />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
