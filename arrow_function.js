//arrow function memungkinkan kita menulis sintaks fungsi yang lebih pendek
//contoh
let a = (a, b) => a * b;
console.log(a(10, 10));

let b = "";
b = () => {
  return "hello world";
};
console.log(b());

let c = "";
c = () => "Hello Ray";
console.log(c());

let d = () => "Helo ayi";
console.log(d());

//Arrow Function dengan parameter
let e = (val) => "Hello " + val;
console.log(e("manusia"));
