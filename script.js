// Let va Const kalit so'zlari ES2015 (ES6) dan boshlab ishlatilishi boshlandi.
// Oldin faqat var kalit so'zi mavjud bo'lgan variable larni elon qilish uchun

// ---------------------------------------------------------

// "let" kaliti suzi bilan elon qilingan variable lar - mutate variablelar deyiladi va bularni qiymatini uzgartirish mumkin
// Bu mutable variable deyiladi.
let age = 30;
console.log(age);

age = 32;
console.log(age); // bu yerda bitta age variable ni let bilan elon qildim va keyinro shu valueni qiymatini yana uzgartirdim

// const kaliti suzi bilan elon qilindan variable lar - immutate variable deyiladi va bularni qiymatini uzgartirib bulmaydi.
// Bu immutable variable deyiladi.

// ---------------------------------------------------------

const birthYear = 1996;
console.log(birthYear);

// birthYear = 1997;  - Mumkin emas chunki qiymatni uzgartirib bulmaydi "const" da.

// const job;  - Bu yerda boshlangich qiymatni har doim berishimiz kerak "const" da.
let job; // Bunday qilishimiz mukin. chunki keyinchalik qiymatni uzgartirishimiz mumkin.

// ---------------------------------------------------------

// Var xuddi let ga uxshab ketadi yani keyinchalik qiymatni uzgartirsak buladi. Bitta farqi "let" - "Block scope", "var" - "function scope"
// Bu nima ekanligini keyingi darslarda urganamiz.

var year = 2021;
console.log(year);

year = 2022;
console.log(year);
