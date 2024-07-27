//Pernyataan bersyarat digunakan untuk melakukan tindakan yang berbeda berdasarkan kondisi yang berbeda
//Gunakan IF untuk menentukan block kode yang akan dieksekusi , jika kondisi benar
//Gunakan ELSE untuk menentukan blok kode yang akan dieksekusi jika kondisi yang sama berniilai salah
//Gunakan ELSE IF untuk menentukan kondisi  baru yang kana diuji , jika kondisi pertama bernilai salah
//Gunakan SWITCH untuk menentukan banyak alternatif blok kode yang akan dieksekusi

//contoh IF
let a = new Date().getHours();
let b;
if (a < 12) {
  b = "selamat pagi";
}
console.log(b);

//contoh ELSE
const hour = new Date().getHours();
let greeting;
if (hour < 12) {
  greeting = "Good Day";
} else {
  greeting = "Good Evenig";
}
console.log(greeting);

//Contoh ELSE IF
const time = new Date().getHours();
let say;
if (time < 9) {
  say = "good Morning";
} else if (time < 15) {
  say = "good afternon";
} else if (time < 20) {
  say = "good evening";
} else {
  say = "good evening";
}
console.log(say);
