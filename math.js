const a = Math.PI;
console.log(Math.sin((30 * Math.PI) / 180));

//Number to Integer

//round = membulatkan ke nilai terdekat
console.log(Math.round(3.4));

//ceil = membulatkan nilai ke atas
console.log(Math.ceil(4.1));

//floor = membulatkan nilai ke bawah
console.log(Math.floor(5.9));

//trunc = mengembalikan nilai desimal ke bilangn bulat
console.log(Math.trunc(6.5));

//pow = (a,b) maka b menjadi pangkat dari a
console.log(Math.pow(5, 2));

//sqrt = mengembalikan akar kuadrat dari x
console.log(Math.sqrt(81));

//Javascript Random
console.log(Math.floor(Math.random() * 100));

//function random
function getRandomInteger(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const number = getRandomInteger(0, 10);
console.log(number);
