//Dalam dunia nyata Object dikaitkan sebagai rumah , mobil , hewan atau lainnya.
//Dalam wujud asli properti mobil seperti berat dan warna
//Contoh Object

const cars = {
  type: "fiat",
  model: "500",
  color: "white",
};
console.log("Tipe mobil is " + cars.type);
console.log("Tipe mobil is " + cars.model);
console.log("Tipe mobil is " + cars.color);

const person = {
  firstName: "Mochammad",
  lastName: "Rayhan",
  age: 19,
  id: 5050,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

//cara mengakses properti js
console.log(
  person.firstName + person.lastName + " is " + person.age + " Years Old"
);

//cara menambahkan properti baru di object
person.nationality = "Indonesia";
console.log(
  "Negara " +
    person.firstName +
    person.lastName +
    " adalah " +
    person.nationality
);

console.log(person);

//Cara menghapus properti diobject
delete person.age;
delete person.nationality;

console.log(person);

//Object bersarang atau nested object
const myObj = {
  name: "John",
  age: 20,
  myCars: {
    car1: "Ford",
    car2: "kijang",
    car3: "Avanza",
  },
};

//Cara mengakses Object bersarang , mobil kedua
let nes = myObj.myCars.car2;
let nes2 = myObj.myCars.car3;
let nes3 = myObj.myCars.car1;
console.log(nes);
console.log(nes2);
console.log(nes3);

//Mengkonversi txt js jadi huruf besar

const hewan = {
  firstname: "badak",
  lastname: "cula 2",
  age: 15,
  type: "Tarikh",
};

hewan.fullname = function () {
  return this.firstname + " " + this.lastname;
};
hewan.fulname = function () {
  return (this.firstname + " " + this.lastname).toUpperCase();
};

console.log(hewan.fullname());
console.log("Nama hewan ini adalah : " + hewan.fulname());

//Membuat array dari nilai properti
//create an array
const myArray = Object.values(hewan);
//display the array
console.log(myArray);

//gunakan JSON.stringify() , untuk mengubah object menjadi JSON

let myString = JSON.stringify(hewan);
console.log(myString);

//Js Object Consturctors
//Merupakan tools yang digunakan untuk membuat banyak object dengan tipe yang sama
//Object tipe person
function orang(depan, akhir, umur, mata) {
  this.depan = depan;
  this.akhir = akhir;
  this.umur = umur;
  this.mata = mata;
}

//Nilai "THIS" , dalam fungsi consturctor tidak mempunyai nilai
//Nilai "THIS" , akan menjadi Object , jika ada object baru yang dibuat.

//Gunakan New untuk menambahkan properti

//buat variable const untuk orang object
const bunda = new orang("ayi", "elida", 53, "blue");
const rayhan = new orang("mochammad", "Rayhan", "19", "Green");

//tampilkan properti umur

console.log("Umur bunda adalah : " + bunda.umur);
console.log("Warna Mata bunda adalah  : " + bunda.mata);
console.log("umur rayhan adalah  : " + rayhan.umur);
console.log("Warna Mata rayhan adalah  : " + rayhan.mata);

//Cara menambahkan properti baru di fungsi
orang.prototype.nasional = "Indonesia";
console.log("negara ibu saya adalah " + bunda.nasional);
console.log(bunda);

//Menambahkan Metode dalam object
//add nama metode
bunda.changename = function (name) {
  this.akhir = name;
};

//change name
bunda.changename("usman");

console.log(bunda.akhir);
console.log(bunda);
