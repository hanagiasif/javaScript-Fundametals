// memory me data kis tarah se store huta hai
// and usko kis tarah se access krte ho
// is bina pr 2 types hai

// 1) Primitive dataTypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLogedIn = false;
const outSideTemp = null;
let userEmail = undefined;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 123456746464389n;

//  2) Reference (Non Premitive)

// Array, Objects, Functions

const heros = ["shaktima", "naagraj", "daga"];

let myObj = {
  name: "Asif",
  age: 27,
};

const myFunction = function () {
  console.log("Hello World!");
};

console.log(typeof bigNumber);
