let sentence = "The movie is not that bad, I like it!";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

console.log(wordNot, wordBad);

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    console.log(sentence.replace(sentence.substring(wordNot, wordBad + 3), "good"));
} else {
    console.log(sentence);
};