//comparasions dan logika digunakan untuk menguji kebenaran atau kesalahan
//contoh
let a = 5;

//Sama dengan
console.log(a == 8);
console.log(a == 5);
console.log(a === 5);
console.log(a === "5");

//Tidak sama dengan
console.log(a != 8);

//Lebih dari
console.log(a > 4);

//kurang dari
console.log(a < 8);

//Lebih dari atau sama dengan
console.log(a >= 10);

//kurang dari atau sama dengan
console.log(a <= 2);

console.log("hello world");

//LOGICAL OPERATORS (&&) = Jika 2 kondisi terpenuhi maka menghasilkan nilai benar , jika salah satu atau semua kondisi tidak terpenuhi maka menghasilkan nilai false
let x = 6;
let y = 3;
console.log(x < 10 && y > 1);
console.log(x < 6 && y < 1);

console.log("Hello World");

//LOGICAR OR (||) = Jika salah satu dari 2 kondisi terpenuhi makan menghasilkan nilai true , jika 2 kondisi tidak terpenuhi maka akan menghasilkan nilai false
console.log(x == 5 || y == 5); //False
console.log(x == 6 || y == 1); //True
console.log(x == 1 || y == 3); //True
console.log(x == 6 || y == 3); //True

let my_age = 25;
function myfunction() {
  let voteabel = my_age < 18 ? "To Young" : "Old enough";
  return voteabel;
}

console.log(myfunction());
