const age = 19;

// Prava olishga yoshi yetadi yoki yuq shuni hisoblovchi dastur

if (age >= 18) {
  console.log("Umid can start driving license!");
} else {
  const yearLeft = 18 - age;
  console.log(`You are not allowed to drive, Wait another ${yearLeft} years`);
}

// Qaysi asrda tugilgani aniqlab beruvchi dastur

const birthYear = 1996;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`Siz ${century} asrda tugilgansiz!`);
