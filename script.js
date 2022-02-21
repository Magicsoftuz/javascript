const firstName = "Umid";
const lastName = "Rustamov";
const job = "Developer";
const birthYear = "1996";
const umid =
  "I am " +
  firstName +
  " " +
  lastName +
  "a " +
  " " +
  job +
  " " +
  "and I was born in " +
  birthYear;
console.log(umid); // Bu juda ham qiyin yul, shu uchun buning urniga literal template dan foydalanamiz

const linda = `I am ${firstName} ${lastName} a ${job} and I was born in ${birthYear}`;
console.log(linda);

// Tepada yozilgan usul osonroq, chunki joy tashlash uchun alohida qushtirnoq ochib bush joy tashlamadik.

// Bu yerda asosiy qoida qushtirnoq urniga("") `` egilgan qushtirnoq ishlatishimiz kerak, va uzgaruvchilarni ${} shuniga ichiga yozishimiz kerak buladi.

console.log(`Hello world!`); // Oddiy holatlarda ham bundan foydalanishingiz mumkin

console.log("University is bug \n Exactly!"); // keyingi qatordan yozish uchun "\n" foydalanishimiz mukin

console.log(`Hello 
world
salom
`); // Template literals da qanday yozsa shunday chiqadi yani pastdan yozish uchun  "\n" kerak emas.
