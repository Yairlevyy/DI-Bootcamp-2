import './App.css';
import {Route,Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Favorites from './components/Favorites';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/favorites' element={<Favorites />} />
    </Routes>
    </>
  );
}

export default App;
