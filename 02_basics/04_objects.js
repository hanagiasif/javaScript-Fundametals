// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

/*
console.log(tinderUser);
{ id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));
["id", "name", "isLoggedIn"];

console.log(Object.values(tinderUser));
["123abc", "Sammy", false];

console.log(Object.entries(tinderUser));
[
  ["id", "123abc"],
  ["name", "Sammy"],
  ["isLoggedIn", false],
];

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
true
*/

const regularUser = {
  email: "some@gamil.com",
  fullName: {
    userFullname: {
      fistname: "Asif",
      lastName: "Hanagi",
    },
  },
};

/*
console.log(regularUser.fullName);
{userFullname: { fistname: 'Asif', lastName: 'Hanagi' } }
*/

/*
console.log(regularUser.fullName.userFullname);
{ fistname: 'Asif', lastName: 'Hanagi' }
*/

/*
console.log(regularUser.fullName.userFullname.fistname);
Asif
*/
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

/*
const obj3 = { obj1, obj2 };
console.log(obj3);
{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
*/

//const obj3 = Object.assign({}, obj1, obj2);
/*
console.log(obj3);
{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
*/

const obj3 = { ...obj1, ...obj2 };
/*
console.log(obj3);
{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
*/

const user = [
  {
    id: 1,
    email: "asif@gmal.com",
  },
  {
    id: 1,
    email: "asif@gmal.com",
  },
  {
    id: 1,
    email: "asif@gmal.com",
  },
];

user[1].email;

const course = {
  courseName: "Js in hindi",
  price: "999",
  courseinstructor: "Hitesh",
};

const { courseinstructor } = course;
console.log(instrutor);
