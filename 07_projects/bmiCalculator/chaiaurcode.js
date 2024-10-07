const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
    console.log("inside else if block");
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(BMI);
    result.innerHTML = BMI;
  }
});
