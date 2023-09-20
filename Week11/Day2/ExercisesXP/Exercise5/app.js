const {addition,multiplication} = require('./math.js')
const { add, multiply } = require('lodash')

const sum = addition(10,14)
const mult = multiplication(10,14)

const sumLod = add(10,14)
const multLod = multiply(10,14)

console.log('sum=>',sum)
console.log('mult=>',mult)
console.log('sumLod=>',sumLod)
console.log('multLod=>',multLod)

