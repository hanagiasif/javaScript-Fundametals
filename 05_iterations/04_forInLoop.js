const myObject = {
  js: "javaScript",
  cpp: "C++",
  rb: "rubby",
  swift: "sweift by apple",
};

for (const key in myObject) {
  //   console.log(typeof key);
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //   console.log(key);
  console.log(programming[key]);
}
