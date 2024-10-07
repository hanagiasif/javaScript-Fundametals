/*
const userEmail = "";  
out put ==> dont have user email
*/
/*
const userEmail = [];
out put ==>Got user email
*/

// falsy Value
// false , 0 , -0, bigInt 0n, "", null, undefined, NaN

const userEmail = "asif@gmail.com";
if (userEmail) {
  //   console.log("Got user email");
} else {
  //   console.log("dont have user email");
}

// const userEmail = [];
// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

// const emptyObject = {};
// if (Object.keys(emptyObject).length === 0) {
//   console.log("object is empy");
// }

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 15;
// console.log(val1);

//Terniary operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");
