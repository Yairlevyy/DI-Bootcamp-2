import React, {useState} from 'react'
import data from '../data.json'
import Card from './Card'
import '../App.css'

function CardList({updateScore}) {
    const [heroes,setHeroes] = useState(data.superheroes)

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function changeHeroes() {
    const newHeroes = [...heroes];
    console.log(heroes)
    shuffleArray(newHeroes);
    setHeroes(newHeroes);
  }

function handleClick(clicked, id) {
  updateScore(clicked);
  if (!clicked) {
    const updatedSuperheroes = [...heroes];
    const superheroToUpdate = updatedSuperheroes.find(hero => hero.id === id);
    if (superheroToUpdate) {
      superheroToUpdate.clicked = true;
    }
    setHeroes(updatedSuperheroes);
  } else {
    const heroesToUpdate = [...heroes]
    const newHeroes = heroesToUpdate.map(superhero => ({
      ...superhero,
      clicked: false
    }))
    setHeroes(newHeroes)
  }
  changeHeroes();
}


  return (
    <div className='container'>
        {
            heroes.map(item=>(
                <Card 
                    key={item.id}
                    id={item.id}
                    img={item.image} 
                    name={item.name} 
                    clicked={item.clicked}
                    occupation={item.occupation}
                    handleClick={handleClick}
                />
            ))
        }
    </div>
  )
}

export default CardList