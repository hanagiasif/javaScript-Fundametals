let score = "33";

/*
console.log(typeof score); //shift +alt + down or up arrow for copying line
console.log(typeof score);
*/
let valueInNumber = Number(score);

// console.log(typeof valueInNumber);

// "33"       ==> 33
// "33abc"    ==> NaN
// true/false ==> 1/0

let isLogedIn = "Asif";
let booleanIsLogedIn = Boolean(isLogedIn);
//console.log(booleanIsLogedIn);

//  1      ==> true 0 == > false
//  ""     ==> false
// "Asif" ==> true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *************************** Operations ****************************************
let value = 3;
let negValue = -value;
// console.log(negValue);

let str1 = "Asif";
let str2 = " Ahmed";
let str3 = str1 + str2;
//console.log(str3) ==> Asif Ahmed

// console.log("1" + 2);  // 12
// console.log(1 + "2");  ==> 12
// console.log("1" + 2 + 2);    // 122  left to right
// console.log(1 + 2 + "2");    // 32  left to right

// postfis and prefix in js

let x = 3;
const y = x++;
// use than change iska matlb first  3 assign huta y ko baad me x+1 huta
console.log(`x:${x}, y:${y}`);

// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
// change than use iska matlb first a+1 huta baad me b ko a assign huta
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
