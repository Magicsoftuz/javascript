"use strict"; // Qoidalar asosida to'g'ri yozishga yordam beradi

let talabamiSan = false;
let testdanUtish = true;

if (testdanUtish) {
  talabamSan = true; // Bu yerda "talabamisan emas balki yangi uzgaruvchi paydo buldi: talabamsan. Chunki i ni qoldirib ketdim"
}
if (talabamiSan) {
  // bu ifni ichiga kirmaydi chunki talabamisan hali ham false turibdi. Biz talabamSan o'zgaruvchisiga true berib quyganmiz.
  console.log("Men talabaman");
}
// Agar "use strict" dan foydalansam shunaqa xato yozib ketgan o'zgaruvchilarimni aytib turadi.

const interface = 22; // Bizga interface nomi orqali uzgaruvchi yaratib berdi. Lekin bunday nom orqali uzgaruvchi mumkin emas. Chunki javascriptning reserve suzi hisoblanadi. Shuning oldini olish uchun strict mode bizga bunday nomdan foydalanish mumkin emasliginin aytib turadi.
