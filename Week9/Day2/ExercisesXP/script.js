// Exercise 1

// The data will appear in the url as a query with the name of the input and the value.

// Exercise 2

// The data will appear in the body of the request.

// Exercise 3

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
};

const marioJson = JSON.stringify(marioGame);

console.log(marioJson)

// Everything including the nested object convert to JSON.

const marioJsonPretty = JSON.stringify(marioGame,null,2);

console.log(marioJsonPretty)

