import './App.css';
import CardList from './components/CardList';
import { useState } from 'react';

function App() {
    const [score,setScore] = useState(0)
    const [topScore,setTopScore] = useState(0)

    function updateScore(clicked){
      if(!clicked){
        const newScore = score + 1
        setScore(newScore)
        handleTopScore()
      } else {
        const newScore = 0
        setScore(newScore)
      }
    }

    function handleTopScore() {
      if (score >= topScore) {
        const newScore = score + 1
        setTopScore(newScore)
      }
    }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>Superheroes Memory Game - Score: {score} / Top Score: {topScore}</h3>
        </div>
        <CardList updateScore={updateScore}/>
      </header>
    </div>
  );
}

export default App;
