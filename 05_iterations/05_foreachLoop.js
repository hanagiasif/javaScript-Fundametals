const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "Javascript",
    languageFileNmae: "js",
  },
  {
    languageName: "Java",
    languageFileNmae: "java",
  },
  {
    languageName: "pythan",
    languageFileNmae: "py",
  },
];

myCoding.forEach((item) => {
  //   console.log(item);
  //   console.log(item.languageFileNmae);
  console.log(item.languageName);
});
