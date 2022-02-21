const now = 2022;
const ageUmid = now - 1996;
const ageLinda = now - 1999;

// const bigAge = ageUmid > ageLinda;

// Bu yerda birinchi bulib minus (-) operatori ishlaydi keyin taqqoslash (>) operatori ishlaydi.
const bigAge = now - 1996 > now - 1999;

let x, y;
x = y = 25 - 14 - 5; // x = y = 6

console.log(x, y);

const averageAge = ageLinda + ageUmid / 2;
console.log(averageAge);

/* 
1. (a+b) - Guruhlash
2. a++ , a-- oshib borish yoki kamayib borish
3. ++a , --a oshib borish yoki kamayib borish
4. typeof - turini kursatish
5. a**b - darajaga kutarish
6. a*b, a/b, a%b - kupaytirish, bulish, qoldiqli bulish
7. a+b, a-b - ayrish, qushish
8. <, <=, >, >= - katta, kichik tenglinglari (taqqoslashlar)
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
