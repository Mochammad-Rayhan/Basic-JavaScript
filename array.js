//array adalah sebuah variabel nilai yang spesial , yang dapat menampung lebih dari satu nilai
//Contoh
const cars = ["kijang", "innova", "terios", "rush", "pajero"];

//cara mengakses element array
let mobil = cars[1];
console.log(mobil);

//cara mengubah element array
cars[0] = "opel";
cars[1] = "ertiga";
console.log(cars);

//mengkonversi array menjadi string
let con_str = cars.toString();
console.log(con_str);

//Properti Length array
let length = cars.length;
console.log(length);

//Looping element array
for (let i = 0; i < length; i++) {
  cars[i];
}

//Menambahkan element array
let new_cars = cars.push("fortuner");
console.log(cars);

let type = Array.isArray(cars);
console.log(type);

//menghapus element terakhir array
let remove_last = cars.pop();
console.log(remove_last);

//Menambahkan element array diawal array
let add_first = cars.unshift("taruna");
console.log(cars);

//menggabungkan 2 array atau lebih
const jurusan = ["tkj", "otkp", "dkv"];
const vokasi = ["tmj", "titl", "tav"];

let grouping = jurusan.concat(vokasi);
console.log(grouping);

//Find array
const numbers = [10, 25, 40, 50, 99, 201];
function myFunction(value, index, array) {
  return value > 50;
}

let result = numbers.find(myFunction);
console.log("Hasil yang lebih besar dari 50 adalah : ", result);

//Findlast
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast((x) => x > 40);
console.log(high);

//math random
const points = [40, 100, 1, 5, 25, 10];
points.sort(function () {
  return 0.5 - Math.random();
});
console.log(points);

//find lowers value array
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

console.log(myArrayMin(points));

//fing max value array
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

console.log(myArrayMax(points));

//Javascript Array Iteration
//array forEach = metode forEach memanggil sebuah fungsi satu kali untuk setiap element larik
const angka = [45, 4, 9, 16, 25];

let txt = " ";
angka.forEach(fungsiku);
function fungsiku(value) {
  txt += value + "\n";
}
console.log(txt);

//JS array Map = array map tidak akan dieksekusi dalan fungsi untuk array tanpa adanya nilai / value
const angka1 = angka.map(tes);
function tes(value, index, array) {
  return value * 2;
}

console.log(angka1);

//array flatmap = metode yang membuat array baru
const array = [1, 2, 3, 4, 5, 6];
const newarray = array.flatMap((x) => x * 2);
console.log(newarray);

//array filter = metode membuat array baru dengan element array yaang lulus seleksi
const over18 = angka.filter(func_filter);
function func_filter(value) {
  return value > 18;
}

console.log(over18);

//array reduce = metode menjalankan fungsi dalam setiap element array untuk menghasilkan sebuah nilai tunggal
const sum = angka.reduce(func_reduce, 100);
function func_reduce(value, total) {
  return total + value;
}

console.log(sum);

//js array every = sebuah metode yang mengeksekusi apakah element array lolos atas seleksi
let eve = angka.every(func_every);
function func_every(value) {
  return value > 10;
}

console.log("all over 10 is : ", eve);

//array from
const form = Array.from("abcdefgh");
console.log(form);

//Js Array const
//array dengan const tidak dapat ditugas ulangkan.
