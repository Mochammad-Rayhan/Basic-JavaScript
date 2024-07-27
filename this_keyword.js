//contoh
const person = {
  fname: "Mochammad",
  lname: "Rayhan",
  age: 19,
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};
console.log(person.fullname());
//apa itu this ?
//This adalah kata kunci yang merujuk untuk object
//keyword this ditunjukkan untuk objek yang berbeda tergantung bagaimana cara menggunakannya

//This dalam methods
//Ketika digunakan dalam objek , this merujuk untuk objek
//karena metode fullname adalah metode dalam objek person

//This dalam alone
//ketika digunakan alone , this merusuk untuk global objek
//karena this berjalan di global scope
//contoh
let x = this;
console.log(typeof x);

//function call
const person1 = {
  npanjang: function () {
    return this.ndepan + " " + this.nblkng;
  },
};

const person2 = {
  ndepan: "Ayi",
  nblkng: "Elida",
};

let a = person1.npanjang.call(person2);
console.log(a);

//function borrow
const person3 = {
  nama_depan: "Rayhan",
  nama_belakang: "Mochammad",
  fulllname: function () {
    return this.nama_depan + " " + this.nama_belakng;
  },
};
const member = {
  nama_depan: "Davian",
  nama_belakang: "Atharazzka",
};
let b = person3.fulllname.bind(member);
console.log(b);
