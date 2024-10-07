const name = "Asif";
const repoCount = 5;

// console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc");

// console.log( gameName[0]); o/p => h
// console.log("gameName[0]", gameName.__proto__); o/p {}

// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));  o/p => t

const newString = gameName.substring(0, 4);
// console.log(newString); hite

const anotherString = gameName.slice(-8, 4);
// console.log(anotherString); ite

const newStringOne = "     hitesh    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudary";
// console.log(url.replace("%20", "-"));

// console.log(url.includes("hitesh"));
