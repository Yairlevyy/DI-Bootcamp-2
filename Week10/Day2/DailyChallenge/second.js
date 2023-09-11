const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs(json){
    return new Promise((res,rej)=>{
        if(json.length == 0){
            rej('Sorry the str is empty.')
        }else{
            res(JSON.parse(morse))
        }
    })
};

function toMorse(morseJs){
    const input = prompt('Please enter a word or a sentence !');
    const array = input.replace(' ','').split('');
    const finalArray = input.split('');
    let state = true;

    for (const letter of array) {
    if (!(letter in morseJs)) {
            state = false;
            break; // Exit the loop early if a letter is not found
        }
    }

    return new Promise((res,rej)=>{
        if(state){
        finalArray.forEach((item,i,arr)=>{
        for (elem in morseJs){
        if (item === elem){
            arr[i] = morseJs[elem]
            console.log(arr[i],elem)
        }
        }});
        res(finalArray)
        }else{
        rej("Sorry, doesn't exist in the ")
        }
    })
};

function joinWords(morseTranslation){
    const div = document.getElementById('root');
    
    morseTranslation.forEach(translation => {
                const p = document.createElement("p");
                p.textContent = translation;
                div.appendChild(p);
    });
};

toJs(morse)
    .then(data=>toMorse(data))
    .then(data=>joinWords(data))