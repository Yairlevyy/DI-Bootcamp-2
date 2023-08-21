const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

const usernames = [];

gameInfo.forEach((value)=>{
    usernames.push(`${value.username}!`)
})

console.log(usernames)

const usernamesPlusFive = [];

gameInfo.forEach((value)=>{
    value.score > 5 ? usernamesPlusFive.push(`${value.username}!`) : null
})

console.log(usernamesPlusFive)

let total = 0;

gameInfo.forEach((value,index,i)=>{
    total += value.score
})

console.log(total)

