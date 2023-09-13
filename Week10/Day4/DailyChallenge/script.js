// // Challenge 1

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });

// const res = Promise.all([promise1,promise2,promise3]);

// res.then(data=>console.log(data))
//     .catch(e=>console.log('error=>',e));

// // The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

// Challenge 2

// fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today')
// .then(res=>res.json())
// .then(data=>console.log(data.results.sunrise))

async function getSunrise(){
    let lat_one = document.getElementById('lat_first').value;
    let long_one = document.getElementById('long_first').value;
    let lat_sec = document.getElementById('lat_sec').value;
    let long_sec = document.getElementById('long_sec').value;
    try {
        const res = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat_one}&lng=${long_one}&date=today`);
        const res_two = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat_sec}&lng=${long_sec}&date=today`)
        const [data_one,data_two] = await Promise.all([res.json(),res_two.json()]);
        displayData(data_one.results.sunrise,"sun_first")
        displayData(data_two.results.sunrise,"sun_second")
    } catch (e) {
        console.log(e)
    }
};

function displayData(data,id){
    let p = document.getElementById(id);
    p.innerHTML = data;
};

let form = document.forms[0];
form.addEventListener('submit',function(event){
    event.preventDefault();
    getSunrise()
});

