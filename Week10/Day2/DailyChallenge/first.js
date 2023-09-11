function makeAllCaps(array){
    return new Promise((res,rej)=>{
        if (array.every(item => typeof item === "string")){
            array.forEach((item,i,arr)=>{
                arr[i] = item.toUpperCase();
            })
            res(array)
        } else {
            rej('Sorry, not all the words are strings.')
        }
    })
};

function sortWords(array){
    return new Promise((res,rej)=>{
        if(array.length > 4){
            res(array.sort())
        }else{
            rej("Sorry, it's not the good length.")
        }
    })
};

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))