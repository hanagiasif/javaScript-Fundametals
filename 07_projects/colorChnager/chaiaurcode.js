const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

// For loop
// for (let i = 0; i < button.length; i++) {
//   const element = button[i];
//   element.addEventListener("click", function (e) {
//     if (e.target.id === "grey") {
//       body.style.backgroundColor = e.target.id;
//     } else if (e.target.id === "white") {
//       body.style.backgroundColor = e.target.id;
//     } else if (e.target.id === "blue") {
//       body.style.backgroundColor = e.target.id;
//     } else if (e.target.id === "yellow") {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// }

// Forech loop
button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = "Green";
    }
  });
});
