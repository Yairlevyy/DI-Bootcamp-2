let dataArray = [];
let div = document.getElementById('root');
let input = document.getElementById('inputCity');
let counter = 0;

function searchCity(input){
    let data = {
        lat: null,
        long: null,
    }
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`)
    xhr.send();
    xhr.onload = () => {
        if(xhr.status === 200){
            let response = JSON.parse(xhr.response);
                if (response.length == 0) {
                        alert('Please enter a correct city!')        
                } else {
                        getData(response[0].lat,response[0].lon,input);
                }
        } else {
            alert('Please enter a correct city!')        
        }
    }
};

function getData(lat,lon,city){
    let xhr = new XMLHttpRequest();
    xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`);
    xhr.send();
    xhr.onload = () => {
        if(xhr.status === 200){
            let res = JSON.parse(xhr.response);
            // console.log(res)
            console.log('city->',city,'country->',res.sys.country,'weather->',res.weather[0].main,'icon->',res.weather[0].icon,'temperature->',res.main.temp,'humidity->',res.main.humidity)
            addCity(city,res.sys.country,res.weather[0].main,res.weather[0].icon,res.main.temp,res.main.humidity,res.wind,res.sys.sunrise,res.sys.sunset);
            displayData(dataArray);
            resetInput();
        } else {
            alert('Please enter a correct city!')
        }
    }
};

function resetInput(){
    input.value = ''
};

function addCity(city,country,weather,icon,temp,humidity,wind,sunrise,sunset){
    let obj = {
        city,
        country,
        weather,
        icon,
        temp,
        humidity,
        wind,
        sunrise,
        sunset
    };
    dataArray.push(obj)
};

function displayData(array){
    div.innerHTML = '';

    array.map((item,index,array)=>{

        let container = document.createElement('div');
        let p = document.createElement('p');
        let h1 = document.createElement('h1');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');


        container.classList.add('city');
        p.classList.add('loc');
        h1.classList.add('temp');
        img.classList.add('icon');
        h3.classList.add('weather');

        p.innerHTML = `${item.city}, ${item.country}`;
        h1.innerHTML = `${item.temp}°`;
        img.setAttribute('src',`https://openweathermap.org/img/wn/${item.icon}@2x.png`);
        h3.innerHTML = `${item.weather}`;
        p2.innerHTML = `wind: deg : ${item.wind.deg}, speed : ${item.wind.speed}`;
        p3.innerHTML = `sunrise : ${item.sunrise}`;
        p4.innerHTML = `sunset : ${item.sunset}`;

        div.appendChild(container);
        container.appendChild(p);
        container.appendChild(h1);
        container.appendChild(img);
        container.appendChild(h3);
        container.appendChild(p2);
        container.appendChild(p3);
        container.appendChild(p4);

    })
};

let form = document.forms[0];
form.addEventListener('submit',function(event){
    event.preventDefault();
    let value = input.value;
    searchCity(value)
});

function convertK(){
    if (counter == 1) {
        dataArray.forEach((item,i,arr)=>{
        arr[i].temp = item.temp + 273,15;
    });
    displayData(dataArray);
    counter--;
    }
};

function convertC(){
    if (counter == 0) {
        dataArray.forEach((item,i,arr)=>{
        arr[i].temp = item.temp - 273,15;
    });
    displayData(dataArray);
    counter++
    }
};
