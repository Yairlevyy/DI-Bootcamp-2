 const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];

(function(){
  displayRobot(robots)
})();

function displayRobot(array){
  let section = document.querySelector('section');
  
  array.forEach(({id,name,username,email,image})=>{
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let h4 = document.createElement('h4');

    div.classList.add('card');
    div2.classList.add('card_img_cont');
    img.classList.add('card_img');
    h2.classList.add('card_title');
    h4.classList.add('card_email');

    div.setAttribute('id',username)
    img.setAttribute('src',image);
    h2.innerHTML = name;
    h4.innerHTML = email;

    div2.appendChild(img);
    div.appendChild(div2);
    div.appendChild(h2);
    div.appendChild(h4);

    section.appendChild(div)
})
};

let input = document.getElementById('searchInput');

input.addEventListener('input',function(e){
  let value = e.target.value.toLowerCase();

  for (item of robots){
    let card = document.getElementById(item.username);
    let itemName = item.name.toLowerCase();

    if (!itemName.includes(value)){
      card.style.display = 'none'
    } else {
      card.style.display = 'block'
    }
  }

});

