//Javascript Memiliki 8 tipe data
//1. String
//2. Number
//3. Bigint
//4. Boolean
//5. Undefined
//6. Null
//7. Symbol
//8. Object

//Contoh tipe data
let x; //Tipe data Undefined
x = 5; //Tipe data Number
x = "john"; //TIpe data String

//Contoh tipe data boolean
let y = 10;
let z = 15;
let a = y < z;
console.log(a);

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);
console.log(fullName);
