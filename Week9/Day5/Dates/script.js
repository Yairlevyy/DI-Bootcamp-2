function formatDate(date){
    
const completeDate = {
    year : date.getFullYear(),
    month : date.getMonth(),
    date : date.getDate(),
    hours : date.getHours(),
    minutes : date.getMinutes(),
    seconds : date.getSeconds()
};

let dateArray = [];

for (elem in completeDate){
    dateArray.push(completeDate[elem])
};

console.log(dateArray)

dateArray.forEach((item,i,arr) => {
    item < 10 ?  arr[i] = '0'+item : null    
})

 return dateArray.join("");

};


// formatDate(new Date(2020, 6, 4, 8, 0, 0)) ➞ "20200704080000"

// formatDate(new Date(2019, 11, 31, 23, 59, 59)) ➞ "20191231235959"

// formatDate(new Date(2020, 6, 4)) ➞ "20200704000000"


