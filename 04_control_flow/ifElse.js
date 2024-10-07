// IF statement

// <, >, <=, >=, ==, != , ===, !==

const temperature = 41;
// if (temperature < 50) {
//   console.log("Temperature lessthn 50");
// } else {
//   console.log("temperatur is greater than 50");
// }

const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2"); not proper writing code

/* nested if
if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("leass than 750");
} else if (balance < 900) {
  console.log("lass than 900");
} else {
  console.log("balance is lessthan 1200");
}
*/

const isUserLoggedIn = true;
const debitCard = true;
const logedInFromGoogle = false;
const loggedInFromEMail = true;

if (isUserLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

if (logedInFromGoogle || loggedInFromEMail) {
  console.log("User Logged in");
}
