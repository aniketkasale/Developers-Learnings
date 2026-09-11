// https://leetcode.com/problems/plus-one/description/

function plusOne(digits) {
  // let largeNum = "";
  // for (let i = 0; i < digits.length; i++) {
  //     largeNum += digits[i]
  // }
  // largeNum = parseInt(largeNum) + 1;
  // largeNum = String(largeNum);
  // let result = []
  // for (let i = 0; i < largeNum.length; i++) {
  //     result.push(Number(largeNum[i]))
  // }
  // return result

  // if there is 9 then 9 -> 10; 19->20; 29->30; 199->200; 269=>270;
  //observation is that if digit is single 9 then it will 10
  // otherwise if multiple digits are there then we will replace 9 by 0 and whatever digit that comes first from reverse we will update that by 1;
  // if no digit found then we will unshift 1 to array

  let n = digits.length;
  let lastDigit = digits[n - 1];
  if (lastDigit !== 9) {
    digits[n - 1] = lastDigit + 1;
    return digits;
  }
  for (let i = n - 1; i >= 0; i--) {
    const element = digits[i];
    if (element !== 9) {
      digits[i] = digits[i] + 1;
      break;
    } else digits[i] = 0;
  }
  if (digits[0] === 0) {
    digits.unshift(1);
  }
  return digits;
}

console.log(plusOne([1, 2, 9]));
console.log(plusOne([1, 9, 9]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
