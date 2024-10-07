//Promise one
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

//Promise two
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is complete");
    resolve();
  });
}).then(function () {
  console.log("Promise 2 is consumed");
});

//Promise three
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Asif", email: "asif@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

//Promise four
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "asif", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (res) {
    console.log("userDeatail: ", res);
  })
  .catch(function (err) {
    console.log("Error: ", err);
  });
