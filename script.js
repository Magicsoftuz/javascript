const friends = ["Tolib", "Jafar", "Aziz", "Azizullo"]; //Array yaratib oldim.

// Arrayga yangi element qushish -----------------

// 1-usul. Push methodi orqali (Array oxiridan qushadi yangi elementni)
friends.push("Jo'raqo'zi");
console.log(friends);

// 2-usul. Unshift methodi orqali (Array boshidan qushadi yangi elementni)
friends.unshift("Doston");
console.log(friends);

// Arraydagi elementni uchirish -----------------

// 1-usul. Pop methodi orqali (Array oxiridagi elemetni uchiradi)
friends.pop();
console.log(friends);

// qaysi element ni uchirilganini kurish uchun friends.pop() ni bitta uzgaruvchiga tenglab olamiz.
const uchirilganElement = friends.pop();
console.log(uchirilganElement);

// 2-usul. Shift methodi orqali (Arrayni boshidagi element ni uchiradi)
friends.shift();
console.log(friends);

// Arraydagi element qaysi o'rinda turganini kurish -----------------
const urni = friends.indexOf("Tolib");
console.log(urni); // "Tolib" elementi agar array da mavjud bulsa qaysi urinda turgani chiqarib beradi. Agar mavjud bulmasa har doim "-1" qaytaradi.

// Arrayni ichida biz bergan element bor yoki yuqligini tekshirish
const tekshir = friends.includes("Aziz"); // Bu method har doim boolean qiymat qaytaradi. Agar element mavjud bulsa arrayni ichida (True) yoki mavjud bulmasa (False)
