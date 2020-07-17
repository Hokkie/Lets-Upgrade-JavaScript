//Question 1
const num = 5;
   console.log(`The number entered is ${num} and`);
   if(num % 2 == 0) {
      console.log('Number is even!');
   } else {
      console.log('Number is odd!');
   }


//Question 2
let os = {
  name : "Andorid",
  version : 9,
};
console.log(`The OS name is ${os.name} and version is ${os.version}`);


//Question 3
const age = 50;
  console.log(`Mark are ${age} and`);
  if(age <= 50) {
    console.log('grade is A');
  } else {
    console.log('grade is B');
  }

switch (age) {
    case 40:
        console.log("you are 50");
        break;
    case 45:
    case 48: 
        console.log("you are 45 or 48");
        break;
    default:
        console.log('Your age is neither 45 or 48');
}
