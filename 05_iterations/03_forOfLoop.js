// For of Loop
/*
["", "", ""]
[({}, {}, {})]
*/

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetngs = "Hello world!";
for (const greet of greetngs) {
  //   console.log(`Each char is ${greet}`);
}

//Map

const map = new Map();
map.set("In", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");
// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":- ", value);
}
