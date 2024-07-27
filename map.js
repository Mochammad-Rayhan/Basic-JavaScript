//map adalah pasangan kunci-nilai dimana kunci dpt berupa tipe data apa pun
//contoh
const fruits = new Map([
  ["apples", 500],
  ["bananas", 400],
  ["oranges", 100],
]);
let cari = fruits.get("apples");
console.log(cari);
console.log(fruits);

//metode set()
const buah = new Map();
buah.set("semangka", 250);
buah.set("melon", 230);
buah.set("anggur", 150);
buah.set("kelapa", 750);
console.log(buah);

//metode get
let get = buah.get("kelapa");
console.log("hasil dari get adalah : " + get);

//Metode size
let size = buah.size;
console.log("Ukuran Map ini adalah : " + size);

//Menghapus map
let hapus = buah.delete("anggur");
console.log(buah);

//forEach in map
let text = "";
buah.forEach(function (value, key) {
  text += key + "=" + value + "\n";
});
console.log(text);
