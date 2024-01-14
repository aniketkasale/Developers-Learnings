// Find the maximum of  given integers.
let nums = [5, 8, 16, -1, -100, 0.2, 2.4, 24.23];
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = arr[i] > max ? arr[i] : max;
  }
  return max;
}
let result = findMax(nums);
console.log(result);

// Whether a given year is a leap year or not?
let year = 2010;
let isLeapYear = year % 4 === 0 ? "LEAP YEAR" : "NOT LEAP YEAR";
console.log(isLeapYear);

// Given a number, N. Find the sum of all the digits of N

function sumOfDigits(N) {
  let arr = N.toString()
    .split("")
    .map((x) => Number(x));
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let sumOfDigitsResult = sumOfDigits(12);
console.log(sumOfDigitsResult);
