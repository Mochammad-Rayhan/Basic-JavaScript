//Break adalah pernyataan jeda "Melompat keluar" dari suatu perulangan
//Continue adalah pernyataan lanjutkan "melompati" satu perulanagan dalam perulangan
//contoh
let a = "";
for (let b = 0; b < 20; b++) {
  if (b === 4) {
    break;
  }
  a += "\n The number is : " + b;
}
console.log(a);

//Contoh The Continue Statement
//Statement Continue menghentikan satu perulangan (dalam perulangan), jika kondisi tertentu terjadi , dan melanjutkan perulangan berikutnya
//Continue = Melompati satu perulangan tertentu

let c = "";
for (let d = 0; d < 10; d++) {
  if (d === 5) {
    continue;
  }
  c += "\nAngka ini adalah : " + d;
}

console.log(c);
