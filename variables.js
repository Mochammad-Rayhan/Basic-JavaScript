/* variabel di javascript dapat dideklarasikan dalam 4 cara
1. Var
2. Let
3. Const
4. Otomatis */

//Kapakn kita menggunakan var , let atau const
/*
1. selalu deklarasi variable
2. selalu gunakan const jika nilai tidak dapat diganti
3. gunakan const juka tipe tidak dapat diganti
4. hanya gunakan var jika harus didukung browsers lama
 */

let person = "john",
  carName = "volvo",
  price = 200;

console.log(person);

//Variable let
//1. variable let mempunyai block scope
//2. variable let harus dideklarasikan sebelum digunakan
//3. variabel let tidak dapat dideklarasikan ulang dengan scope yang sama/

//Contoh block scope
{
  let x = 2;
}

//Variable var
//1. variable var selalu mempunyai global scope
//2. variable var tidak dapat mempunyai kata kunci dengan block scope

//Variable Const
//1. variabel const tidak deapat di redeclared
//2. variabel const tidak dapat di tugaskan
//3. variabel cons mempunyai block scope

//Kapan kita menggunakan Js Const
//1. Array baru , object baru , fungsi baru

//Const Array
const cars = ["kijang", "innova", "bmw"];

//Mengubah element array
cars[0] = "Toyota";

//Menambahkan Element Array
cars.push("sigra");

console.log(cars);

//Const Object
const mobil = {
  type: "fiat",
  model: "500",
  color: "red",
};

//Mengubah properti Object
mobil.color = "white";

//menambahkan properti object
mobil.owner = "rayhan";

console.log(mobil);
