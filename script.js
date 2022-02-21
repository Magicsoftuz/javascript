let myAge = 25; // Number type (number turini odatda qo'shtirnoqsiz yozamiz)
console.log(myAge);

let myName = "Umid"; // String type (String turini har doim qo'shtirnoq ichida yozamiz)
console.log(myName);

let areYouStudent = true; // Boolean type (Boolean type ikki xil buladi true yoki false bu ham qo'shtirnoqsiz yoziladi)
console.log(areYouStudent);

let ertangiObHavo; // Undefined va Null type (Bu typeda variable ni elon qilamiz lekin value mavjud bulmaydi)
console.log(ertangiObHavo);

let kattaRaqam = 9007199254740991n; // bu yerda BigInt type ishlaydi, chunki judayam katta son kiritildi.
console.log(kattaRaqam);

console.log("---------------------------------");
// typeof funksiyasi biz qaysi typeda malumot kiritganimizni kursatib turadi.
console.log(typeof myAge);
console.log(typeof myName);
console.log(typeof areYouStudent);
console.log(typeof ertangiObHavo);
console.log(typeof kattaRaqam);

console.log("---------------------------------");

ertangiObHavo = "issiq";
console.log(ertangiObHavo);
console.log(typeof ertangiObHavo);
