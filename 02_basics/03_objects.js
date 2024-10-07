//singleton
//object.create;

//object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "Asif",
  "full name": "Asif Ahmed Hanagi",
  [mySym]: "myKey1",
  age: 27,
  location: "Jaipur",
  email: "asif@google.com",
  isLogedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// one ways to access
// console.log(jsUser.email);
//second way
// console.log(jsUser["email"]);

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "asifahmed@gmail.com";
// console.log(jsUser);
/*
{
  name: 'Asif',
  'full name': 'Asif Ahmed Hanagi',       
  age: 27,
  location: 'Jaipur',
  email: 'asifahmed@gmail.com',
  isLogedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'myKey1'
}
*/
// Object.freeze(jsUser);
jsUser.email = "asifahmed@tcs.com";

// console.log(jsUser);
/*
{
    name: 'Asif',
    'full name': 'Asif Ahmed Hanagi',
    age: 27,
    location: 'Jaipur',
    email: 'asifahmed@gmail.com', no changes happened here after freeze   
    isLogedIn: false,
    lastLoginDays: [ 'Monday', 'Saturday' ],
    [Symbol(key1)]: 'myKey1'
  }
  */

jsUser.greeting = function () {
  console.log("Hello JS user");
};

jsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

const data = {
  name: "asif",
  age: 28,
  home: "bijapur",
};
const newData = { ...data, age: 40 };

console.log(data);
console.log(newData);
