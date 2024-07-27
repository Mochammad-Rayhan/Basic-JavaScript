//Javascript object dates berjalan dengan waktu
//contoh
const a = new Date();
console.log(a);

const b = new Date("2005-10-08");
console.log(b);

//dates metode
const c = new Date();
console.log(c.toString());

const d = new Date();
console.log(d.toDateString());

const e = new Date();
console.log(e.toUTCString());

const f = new Date();
console.log(typeof f);

//JAVASCRIPT DATE FORMATS
//Js ISO Dates(Complate date)
const g = new Date("2005-10-08");
console.log(g.toString());

//JS Short Date
const h = new Date("08/10/2005");
console.log(h.toString());

//JAVASCRIPT DATE GET METHODS
//JS Get Months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const i = new Date("2005-10-08");
let month = months[i.getMonth()];
console.log(month);

//compare dates
let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2020, 0, 14);

if (someday > today) {
  text = "Today is berfore Januari 14 , 2100";
} else {
  text = "Today is after januari 14 , 2100";
}
console.log(text);
