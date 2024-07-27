//sintak penugasan/assigment destructuring membongkar properti objek menjadi variable
//contoh
const person = {
  Fname: "Mochammad",
  Lname: "Rayhan",
  age: 19,
  country: "Indonesia",
};

//Destructurin
//urutan properti tidak jadi masalah

//Destructuring
let { Lname, Fname, address = "Jakarta" } = person;
console.log(Lname, Fname, address);

//Destructuring untuk string
let nama = "Universitas";

//Destructuring
let [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11] = nama;
console.log(a1, a10, a7, a5, a11);

//Array Destructuring
const fruits = ["Banana", "Melon", "Pepaya", "Apel", "Rambutan", "Kelapa"];

//Destructuring
let [fruits1, fruits2, fruits3, fruits4, fruits5] = fruits;
console.log(fruits2);

const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let [a, b, c, d, ...rest] = number;
console.log(rest);

//Kamu dapat menukar 2 nilai variabel yang digunakan menjadi penugasan desturcturing
