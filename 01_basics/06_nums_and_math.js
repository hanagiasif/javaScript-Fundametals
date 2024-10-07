const score = 400;

const balance = new Number(100);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8966;

// console.log(otherNumber.toPrecision(3));
//input 23.8966 output 23.9
// 123.8966 ==> 124

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); //10,00,000

//******************** Math ******************

// console.log(Math);
// console.log(Math.abs(-4)) // 4
// console.log(Math.round(4.6)); // 4.4 ==>4 and 4.6 ==>5

// console.log(Math.ceil(4.2)) // output 5
// console.log(Math.floor(4.9))  // output 4

// console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
