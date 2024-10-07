const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Asif";
// user.welcomeMessage();

/*
console.log(this);
in node environment it refres to empty  object {}
in browser it refer to window object (brwser global object)
*/

/*
function chai() {
  let username = "Asif";
  console.log(this.username);
  //out put undefined
}
     or 
const chai = function() {
  let username = "Asif";
  console.log(this.username);
  //out put undefined
}
chai();
*/

const chai = () => {
  let username = "Asif";
  console.log(this);
};
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => {usernmae: "Hitesh"};
// if we use above syntax to return object than it will return undefined
//the correct syntax is
const addTwo = (num1, num2) => ({ username: "hitesh" });
console.log(addTwo(3, 4));
