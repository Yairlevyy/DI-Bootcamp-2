// Create the div of colors

let div_colors = document.querySelector('.colors');
const colors = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan"
];

for (colory of colors) {
    const div = document.createElement('div');
    // div.innerHTML = '*';
    div.style.height = '50px'
    div.style.backgroundColor = colory;
    div.setAttribute('id',colory);
    div.setAttribute('class','sub_colors');
    div.addEventListener('click',getColor)
    div_colors.appendChild(div);
};

// Create the white div

let div_right = document.querySelector('.right');
let shiftKeyDown = false;

for (let i = 0; i < 1800; i++) {
  const div = document.createElement('div');
  div.style.backgroundColor = 'white';
  div.classList.add('white')
  div.addEventListener('click',changeBg)
  div.addEventListener('mouseenter', function(event) {
    if(mouseDown == 1) {
      event.target.style.backgroundColor = color;
    }
  })
  div_right.appendChild(div)
};

// Enable drawing

function resetWhite() {
  const box_white = document.getElementsByClassName('white');
  for (box of box_white){
    box.style.backgroundColor = 'white'
  }
};

let color;

function getColor(e) {
  color = e.target.id;
  // console.log(color)
};

function changeBg(e) {
  e.target.style.backgroundColor = color;
};

let mouseDown = 0;

document.body.onmousedown = function() { 
  ++mouseDown;
  console.log(mouseDown);
}

document.body.onmouseup = function() {
  --mouseDown;
  console.log(mouseDown);
}



