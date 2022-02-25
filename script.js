// While sikl operator bilan for bir xil ishlaydi.

const umid = ["Umid", "Rustamov", 26, "Devloper", "Tashkent"];

for (let i = 0; i < umid.length; i++) {
  console.log(umid[i]);
}
console.log("------------------");

let rep = 0; // boshlanish nuqtasi
while (rep < umid.length) {
  // shart beramiz. shart true bulib turguncha while ni ichidagi commanda ishlab turadi. Qachon false bulsa tuxtatadi
  console.log(umid[rep]);
  rep++; //Bu qadami, buni quyishimiz shart, bulmasa sikl tuxtamaydi.
}

// for dan foydalanib bumaydigan holatlarda While dan foydalanishimiz mumkin buladi. Masalan bizda faqat shart mavjud, boshlanish va tugash nuqtasi yuq

// Man hozir narda uyini ni yarataman //

// Manga buning uchun random raqam chiqadigan variable kerak buladi. Yani 1 dan 6 gacha random raqam chiqsin

let narda = Math.trunc(Math.random() * 6) + 1; // Math.random -> bu funksiya hisoblanadi. va 0 dan 1 gacha random qiymat qaytaradi.

while (narda !== 6) {
  console.log(`Sizning ballingiz: ${narda}`);
  narda = Math.trunc(Math.random() * 6) + 1;
  narda === 6
    ? console.log(`Afsus ${narda} raqami chiqib qoldi`)
    : console.log();
}

// Bu narda 6 ga teng bumaguncha qayta qayta tushsin dedim
