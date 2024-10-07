// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
}

const result = addTwoNumbers(3, 4);
// console.log("Result: ", result);

function loginUserMessage(usernmae) {
  if (!usernmae) {
    console.log("Please enter a username");
    return;
  }
  return `${usernmae} just logged in`;
}

// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(...num) {
  return num;
}
// console.log(calculateCartPrice(200, 400, 500, 2000));
// [ 200, 400, 500, 2000 ]
// here ... is rest operator

const user = {
  username: "hitesh",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
// handleObject(user);
handleObject({
  username: "Asif",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
