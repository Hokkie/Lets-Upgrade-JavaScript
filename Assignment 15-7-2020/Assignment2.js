//Question 1
const x = 9;
const y = 10;
console.log(x + y);

//Question 2
//String Methods
//1. length
var name = "Javier Zanetti";
console.log(name.length);

//2. indexOf()
const str = 'Forza Inter, The Champions of Europe!'

console.log('Index of first s from start is' + str.indexOf('s'))   // logs 25
console.log('Index of "of" from start is' + str.indexOf('of'))   // logs 27

//Array Methods
//1. toString()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

//2. pop() to delete last array and push() to add a new elemet in last
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push("Durian"));
