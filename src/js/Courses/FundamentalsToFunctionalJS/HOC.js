const doMathSoIWontHaveTo = (n, func) => func(n);
const square = n => n * n;
const add = n => n + 1;
const subtract = n => n - 1;

console.log(doMathSoIWontHaveTo(3, square));
console.log(doMathSoIWontHaveTo(3, add));
console.log(doMathSoIWontHaveTo(3, subtract));
