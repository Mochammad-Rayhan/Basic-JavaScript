//statement switch digunakan untuk melakukan tindakan yang berbeda berdasarkan kondisi yang berbeda
//Gunakan statement switch untuk menyeleksi satu dari banyak block kode yang dieksekusi
//Syntax Switch Statement

//Contoh
let day;
switch (new Date().getDay()) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "monday";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "rabu";
    break;
  case 4:
    day = "thursday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "saturday";
}

console.log("Today is : ", day);

//Fungsi break adalah ketika js udh mencapai kata kunci break , maka js akan kelaur dari block sw
//Ini akan menghentikan eksekusi di dalam block switch
//Kata kunci default menentukan kode yang akan dijalankan , jika tidak ada kecocokan huruf

let x = "0";
switch (x) {
  case 0:
    text = "off";
    break;
  case 1:
    text = "on";
    break;
  default:
    text = "No value found";
}
console.log(text);
