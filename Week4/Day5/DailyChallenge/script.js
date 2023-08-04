const planets = [
  { planet: "Mercury", color: "gray", moons: 0 },
  { planet: "Venus", color: "yellow", moons: 0 },
  { planet: "Earth", color: "blue", moons: 1 },
  { planet: "Mars", color: "red", moons: 2 },
  { planet: "Jupiter", color: "orange", moons: 79 },
  { planet: "Saturn", color: "goldenrod", moons: 83 },
  { planet: "Uranus", color: "lightblue", moons: 27 },
  { planet: "Neptune", color: "darkblue", moons: 14 }
];

let section = document.querySelector('section');

for (obj of planets){

    // Moons (don't look really nice but display everything...)
        // for (let i = 0; i < obj.moons; i++){
        //     let moonDiv = document.createElement('div');
        //     moonDiv.classList.add('moon');
        //     section.appendChild(moonDiv);
        // };

    // Planet
    console.log(obj.planet)
    let div = document.createElement('div');
    let text = document.createTextNode(obj.planet);
    div.style.backgroundColor = obj.color;
    div.classList.add('planet');
    div.appendChild(text)
    section.appendChild(div);

};