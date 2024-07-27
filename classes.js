//Js classes adalah tamplate untuk objek js
//gunakan kata kunci class untuk membuat class
//selalu tambahkan metode yg bernama constructor()
//contoh
class car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

//membuat objek dengan class
const car1 = new car("ford", 2010);
const car2 = new car("audi", 2020);

console.log(car1.name);
console.log(car2.name);
console.log(car1.year);
console.log(car2.year);
console.log("My Car is : " + car1.age() + " Years old");
console.log("My Car is : " + car2.age() + " Years old");
