// function checkChar(e) {
//     if(!e.key.match(/[a-zA-Z]/)){
//         const newStr = deleteSpecs(e.target.value);
//         // e.target.value = newStr;
//         console.log(newStr)
//     }
// };

// function deleteSpecs(str) {
//     str.slice(0,-1);
//     return str;
// }

const numberPattern = /^[0-9]+$/;
const specialCharacterPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

function checkChar(e) {
    // console.log(e.target.value.slice(0,-1));
    const input_user = e.target;
    const lastChar = input_user.value.charAt(input_user.value.length - 1);
    
    if (lastChar.match(numberPattern) || lastChar.match(specialCharacterPattern)) {
        input_user.value = input_user.value.slice(0,-1);
    }
};

