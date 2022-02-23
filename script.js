"use strict"; // Qoidalar asosida to'g'ri yozishga yordam beradi

function ekrangaChiqar() {
  console.log("Hello world!");
  console.log("Salom Dunyo!");
  console.log("hi Umid!");
}

ekrangaChiqar();
ekrangaChiqar();
ekrangaChiqar();

function yoshniHisobla(tugilganYil, hozirgiYil) {
  console.log("Tugilgan yilni hisoblash:");
  return hozirgiYil - tugilganYil;
}

console.log(yoshniHisobla(1996, 2022));
console.log(yoshniHisobla(2000, 2022));
console.log(yoshniHisobla(2002, 2022));
