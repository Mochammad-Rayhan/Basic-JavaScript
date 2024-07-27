//Fungsi pada Js adalah sebuah block kode yang dirancang untuk melakukan tugas tertentu
//Fungsi pada js akan berjalan ketika dipanggil
//Contoh Fungsi JS

function myFunction(p1, p2) {
  return p1 + p2;
}

let result = myFunction(10, 10);
console.log(result);

//Js Function Syntax
//Fungsi js didefinisikan dengan kata kunci fungsi , diikuti dengan nama dan tanda kurung
//Nama fungsi dapat berisi huruf , angka , garis bawah , dan tanda dollar
//Kode yang akan dieksekusi oleh fungsi , ditempatkan dalam tanda kurung kurawal.

//Fungsi Return
//Ketika Js mencapai fungsi retrun maka fungsi akan berhenti dieksekusi.

//Fahrenheit to Celcius
function toCelcius(f) {
  return (5 / 9) * (f - 32);
}

let value = "The Temperature is " + "" + toCelcius(77) + "" + " Celcius";
console.log(value);

function rayhan() {
  let cars = "Kijang Innova";
  let text = "mobil saya bermerek " + cars;
  return text;
}
console.log(rayhan());
