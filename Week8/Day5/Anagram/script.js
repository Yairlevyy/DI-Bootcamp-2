function checkAnagram(str1,str2){
    let arr1 = createArray(str1).sort();
    let arr2 = createArray(str2).sort();
    let isAnagram = true;

    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]) {
      isAnagram = false;
    }  
    };

    return isAnagram
};

function createArray(str){
    const word = str.replace(" ","");

    let letters = [];

    for (let i = 0; i < word.length; i++ ) {
    letters.push(word[i])
    };

    return letters
};

console.log(checkAnagram('hello','olleh')) // true
console.log(checkAnagram('hegllo','olleh')) // false