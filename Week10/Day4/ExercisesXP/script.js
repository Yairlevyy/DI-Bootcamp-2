// // Exercise 1

// const conversion = async () => {
//     const res = await fetch("https://www.swapi.tech/api/starships/9/");
//     const data = await res.json();
//     console.log(data.result)
// };

// conversion()

// Exercise 2

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// The outcome will be 'calling' and 2 sec later 'resolved'