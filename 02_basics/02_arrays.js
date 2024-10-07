const marvel_hearos = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_hearos.push(dc_heros);
// console.log(marvel_hearos);
//output ==> [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const allHeros = marvel_hearos.concat(dc_heros);
// console.log(allHeros);
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_hearos = [...marvel_hearos, ...dc_heros];
// console.log(all_new_hearos);
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5];

//console.log(Array.isArray("Asif"));
//false

// console.log(Array.from("Asif"));
// [ 'A', 's', 'i', 'f' ]

// console.log(Array.from({ name: "Asif" })); //intersting
//outpi=ut empty array []

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));
// [ 100, 200, 300 ]
