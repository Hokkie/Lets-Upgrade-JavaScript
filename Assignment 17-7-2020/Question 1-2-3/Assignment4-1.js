//Question 1
for (let x = 1; x <= 100; x++) {

  if ( x % 3 === 0 && x % 5 === 0 ) {
    console.log("FizzBuzz");
  }
  else if (x % 3 === 0) {
    console.log("Fizz");
  } 
  else if (x % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(x);
  }
}


//Question 2
const student = {
  name : 'Helsinki',
  age : 24,
  projects : {
    diceGame : 'Two player dicegame using JavaScript'
  }
}

console.log(student);

const {name,age,projects:{diceGame}} = student;
console.log(`My name is ${name} and my age is ${age}, My project are the ${diceGame}`); 

//Question 3
const shoppingList = ["Beef", "Carrots", "Eggs", "Mie"];
const shoppingBag = [...shoppingList, "Laptop", "Books", "Spatule"];
console.log(`This is my shopping item: ${shoppingBag}`);
