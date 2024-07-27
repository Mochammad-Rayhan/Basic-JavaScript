//Json atau Js Object notation
//Json adalah format untuk menyimpan dan mengirim data
//json sering digunakan ketika data dikirim dari server ke halaman web
//contoh json

let text =
  '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
console.log(obj.employees[0].firstName);
