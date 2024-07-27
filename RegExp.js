//RegExp = Regular Expression
//adalah urutan karakter yang membentuk pola pencarian
//Pola pencarian dapat digunakan untuk pencarian teks dan operasi penggantian teks

//syntax RegExp
// /pattern/modifiers;

//contoh Search dengan string
let text = "Visit Jakarta";
let n = text.search("Jakarta");
console.log(n);

let teks = "Mochammad Rayhan";
let m = teks.search("Rayhan");
console.log(m);

//Contoh Search Dengan RegExp
let a = teks.search(/Rayhan/i);
console.log(a);

//contoh replace() dengan string
let b = teks.replace("Rayhan", "Baik");
console.log(b);

//ontoh replace dengan RegExp
let c = text.replace("Jakarta", "Qatar");
console.log(c);
