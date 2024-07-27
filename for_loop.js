//Loop dapat mengeksekusi sebuah block kode beberapa kali
//contoh
let text = "";
const cars = [
  "BMW",
  "VOLVO",
  "KIJANG",
  "FORD",
  "AVANZA",
  "FIAT",
  "LEXUS",
  "AUDI",
  "SIGRA",
  "TERIOS",
  "RUSH",
  "XENIA",
];

for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "\n";
}
console.log(text);

//Menentukan tinggi segitiga
let tinggsg = 10;
//loop untuk setiap baris
for (let x = 0; x < tinggsg; x++) {
  let baris = ""; //variable untuk menyimpan bintang di setiap baris

  //loop untuk menambahkan bintang ke dalam variable
  for (let z = 1; z <= x; z++) {
    baris += "*";
  }

  console.log(baris); //mencetak bintang
}
console.log("\n");

let ts = 15;

for (let a = 0; a < ts; a++) {
  let br = "";

  for (let b = 15; b > a; b--) {
    br += "*";
  }

  console.log(br);
}

//Expression js
//1. dieksekusi (satu kali) sebelum eksekusi blok kode
//2. mendefinisikan kondisi untuk mengeksekusi blok kode
//3. dieksekusi setiap kali setelah block kode dieksekusi

let teks = "";
for (let c = 0; c < 5; c++) {
  teks += "the numbers is " + c + "\n";
}

console.log(teks);

//Loop scope var
var d = 10;
for (var d = 0; d < 10; d++) {}
console.log(d);

//FOR IN JS = jS FOR IN pernyataan perulangan melalui properti sebuah objek
//contoh
const person = {
  fname: "john",
  lname: "doe",
  age: 25,
};

let u = "";
for (let j in person) {
  u += person[j] + " ";
}
console.log(u);

//FOR IN JS = dapat digunakan untuk array
const angka = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let s = "";
for (let k in angka) {
  s += angka[k] + " ";
}
console.log(s);

//Array.forEach()
//Metode forEach() memanggil sebuah fungsi (fungsi callback) satu kali untuk setiap element array
//contoh
const number = [20, 23, 50, 64, 66, 80, 22];
let tes = "";
function myFunction(value, index, array) {
  tes += value + " ";
}
number.forEach(myFunction);
console.log(tes);

//JS WHILE LOOP = MENGULANG BLOK KODE SELAMA KONDISI BENAR
//CONTOH
let wh = "";
let hw = 0;
while (hw < 10) {
  wh += "\nthe number is : " + hw;
  hw++;
}
console.log(wh);

//JS do while loop = perulangan yang mengeksekusi blok kode satu kali , sebelum memeriksa apakah kondisinya benar,
//kemudian akan mengulangi perulangan selama kondisi tersebut benar
//contoh
let abc = "";
let def = 0;
do {
  abc += "\nThe Number is : " + def;
  def++;
} while (def < 10);
