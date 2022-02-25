// Biror array ni man 0 dan 5 gacha elementlarni emas buni
//teskarisini yani 5 dan 0 gacha chiqarmoqchi bulsam siklni teskari aylantiraman

const umid = ["Umid", "Rustamov", 26, "Devloper", "Tashkent"];

// shu teskari chiqarmoqchiman yani: Tashkent, Devloper, 26, Rustamov, Umid

// Bu tugri usuli.
for (let i = 0; i < umid.length; i++) {
  console.log(umid[i]);
}

// Teskari aylantirish usuli:
for (let i = umid.length; i >= 0; i--) {
  console.log(umid[i]);
}

// Agar biror bitta sikl ichida yana sikl yaratmoqchi bulsak bu ichma-ich sikl deyiladi.
for (let i = 0; i < 7; i++) {
  switch (i) {
    case 0:
      console.log("Dushanba");
      break;
    case 1:
      console.log("Seshanba");
      break;
    case 2:
      console.log("Chorshanba");
      break;
    case 3:
      console.log("Payshanba");
      break;
    case 4:
      console.log("Juma");
      break;
    case 5:
      console.log("Shanba");
      break;
    case 6:
      console.log("Yakshanba");
      break;
  }
  for (let j = 1; j <= 3; j++) {
    console.log(`Mashqlar-${j} ni bajarish kerak!`);
  }
}
