const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shanktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(7);
// myArr.push(6);        //  [0, 1, 2, 3,4, 5, 6]
// myArr.unshift(9);     //  [9, 0, 1, 2, 3, 4, 5]

// myArr.pop();          // [ 0, 1, 2, 3, 4 ]
// myArr.shift();        // [ 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(9));  //false boolean
// console.log(myArr.indexOf(3));   // 3

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);

//slice , splice

// console.log("A ", myArr);  A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3);
// console.log(myn1);  [ 1, 2 ]
// console.log("B ", myArr);  B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3);
// console.log(myn2); [ 1, 2, 3 ]
// console.log("c ", myArr); c  [ 0, 4, 5 ]
