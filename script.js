// Minus matematik operatori (-)

let now = 2034;

const ageUmid = now - 1996;
const ageLinda = now - 1999; // 2034 yilini ikki marta yozish urniga uni bitta variable ga olib quyamiz

// console.log(ageUmid);
// console.log(ageLinda);

//------------------------------------------------------

// ikki ta console.log() yozish urniga bittada ham yozishimiz mumkin. buning uchun varibalelarni (,) vergul bilan ajratamiz
console.log(ageUmid, ageLinda);

//------------------------------------------------------

// ko'paytirish matematik operatori (*)

const kopaytma = ageUmid * ageLinda;
console.log(kopaytma);

//------------------------------------------------------

// Bo'lish matematik operatori (/)

const bulish = ageUmid / ageLinda;
console.log(bulish);

//------------------------------------------------------

// Darajaga kutarish 3 ni to'rtinchi darajasi = 3 * 3 * 3 * 3

console.log(3 ** 4); // ikkita kupatirish beligisi darajaga kutaradi

//------------------------------------------------------

// Ikkita variable ni bir biriga qo'shish uchun (+) belgisi ishlatdik , agar buni string ga qulasak ikkita stringni birlashtirib beradi.
const firstName = "Umid";
const lastName = "Rustamov";
console.log(firstName + lastName);

// Agar ikkita suz urtasiga joy tashlamoqchi bulsak
console.log(firstName + " " + lastName);

//------------------------------------------------------

// Assignment operators, Tenglik operatori (=)

let x = 10 + 15;
console.log(x);

//ikkita operatorni bitta joyda kelishi (+=)

x += 80; // x = x + 80;
console.log(x);

//--------------------------

x *= 5; // x = x * 5;
console.log(x);

//--------------------------

x++; // x = x + 1;
console.log(x);

//--------------------------

x--; // x = x - 1;
console.log(x);

//------------------------------------------------------

// Comparison operators, taqqoslash operatorlari
console.log(ageUmid > ageLinda); // true qaytaradi chunki taqqoslash operatori tugri

console.log(ageUmid >= 50); // false qaytaradi chunki ageumid = 38 ga teng. 38 >= 50  bu xato shuning uchun false.

const isFullAge = ageLinda >= 30;
console.log(isFullAge);
