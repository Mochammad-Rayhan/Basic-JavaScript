//statement try mendefinisikan block kode yang akan dijalankan
//statement catch mendefinisikan blok kode untuk mengatasi banyak error
//statement finally mendefinisikan block kode untuk menjalankan hasil
//statement throw mendefinisikan kustom error

//contoh
try {
  adddlert("Welcome Guest");
} catch (error) {
  error.message;
}
let num = 1;
try {
  num.toPrecision(500);
} catch (err) {
  err.name;
}
console.log(err.name);
