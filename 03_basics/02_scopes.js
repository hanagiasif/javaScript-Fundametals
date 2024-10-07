let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   console.log("Inner a value is: ", a);
  //output 10
}
//console.log(a);
//output 300
// console.log(b);
// console.log(c);

// nested scope

function one() {
  const username = "Hitesh";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website); output error website  is not defined
  two();
}
//one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "youtube";
    // console.log(username + " " + website);
    //hitesh youtube
  }
  //console.log(website);
  // ReferenceError: website is not defined
}
//console.log(username);
// ReferenceError: username is not defined

// *****************  Interesting **************************

// console.log(addOne(5));  // output =>6
function addOne(num) {
  return num + 1;
}
console.log(addOne(5)); // output =>6

// console.log(addTwo(5));  //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5)); // output =>7
