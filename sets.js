//Set js adalah kumpulan nilai yang unik
//setiap nilai hanya dapat muncul sekali dalam sebuah set
//nilai dapat berupa jenis apapun , nilai primitif atau objek
//cara buat set dengan new set()

//create a set
const letters = new Set(["a", "b", "c"]);

//Display set.size
console.log("The set has : " + letters.size);

//cara buat set dengan add()

//creat set
const huruf = new Set();

//add value
huruf.add("a");
huruf.add("b");
huruf.add("c");
huruf.add("d");

//display a set
console.log(huruf.size);
console.log(typeof letters);

//JS SET METHODS
//methods has() = mengembalikan nilai true jika nilai yang ditentukan ada dildalam himpunan
let result = letters.has("e");
console.log(result);
