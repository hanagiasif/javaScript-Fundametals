// for loop
//control + d to select duplicates example (i)

/*
for (let i = 1; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    console.log("5 is best number");
  }
  console.log(element);
}
*/

//loop inside loop
/*
for (let i = 1; i <= 10; i++) {
  console.log(`${i} table`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
*/

let myArray = ["flash", "batman", "superman"];
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //   console.log(element);
}

// break

for (let i = 1; i <= 10; i++) {
  const element = i;
  if (i === 5) {
    // console.log(`Detected 5`);
    break;
  }
  //   console.log(`value of i is ${i}`);
  /* 
    value of i is 1
    value of i is 2
    value of i is 3
    alue of i is 4
    Detected 5
  */
}

//continue
for (let i = 1; i <= 10; i++) {
  const element = i;
  if (i === 5) {
    // console.log(`Detected 5`);
    continue;
  }
  //   console.log(`value of i is ${i}`);
  /*
    value of i is 1
    value of i is 2 
    value of i is 3 
    value of i is 4 
    Detected 5      
    value of i is 6 
    value of i is 7 
    value of i is 8 
    value of i is 9 
    value of i is 10
  */
}
