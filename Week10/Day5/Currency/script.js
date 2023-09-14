// Add Currency to select 

fetch('https://v6.exchangerate-api.com/v6/addc369bcef49d041c47d735/codes')
.then(res=>res.json())
.then(data=>displayOptions(data.supported_codes))

function displayOptions(array){
    let from = document.getElementById('from_curr');
    let to = document.getElementById('to_curr');

    for (item of array){
        let option = document.createElement('option');
        option.setAttribute('value',item[0]);
        option.innerHTML = `${item[0]} - ${item[1]}`;
        let optionClone = option.cloneNode(true); // Clone the option element
        from.appendChild(option)
        to.appendChild(optionClone)
    }
};

// Convert the currency

let from_curr = document.getElementById('from_curr');
let to_curr = document.getElementById('to_curr');
let amount = document.getElementById('amount');
let converted_amount = document.getElementById('converted_amount');
let btn = document.getElementById('btn');

btn.addEventListener('click',convert)

async function convert(){
    console.log('hello')
    let from_curr = document.getElementById('from_curr').value;
    let to_curr = document.getElementById('to_curr').value;
    let amount = document.getElementById('amount_to_convert').value;
    let converted_amount = document.getElementById('converted_amount');

    const res = await fetch(`https://v6.exchangerate-api.com/v6/addc369bcef49d041c47d735/pair/${from_curr}/${to_curr}`);
    const data = await res.json();

    converted_amount.innerHTML = amount * data.conversion_rate
}

