/*
Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
Совершенное число (википедия)
Список совершенных чисел
*/

function isPerfect(Number){
    let Amount = 0;
if (Number === 0) {return false;}
for (let i = 1; i < Number; i++) {
   if (Number % i == 0) { Amount = i + Amount } 
}
 if (Number === Amount) {
     return true;
 } else return false;
}

console.log(isPerfect(6));
