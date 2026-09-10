// Given a string s representing a Roman numeral, find it's corresponding integer value.
// Roman numerals are formed using the following symbols: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, and M = 1000.
// Numbers are typically formed by combining these symbols from left to right, adding or subtracting their values based on specific rules.

// How does the conversion work?

// If a smaller value symbol comes before, we subtract. Otherwise, we add.
// In IV, I comes before V and V has a larger value 5. So our result is 5 - 1 = 4.
// In VI, V comes before I and I has a smaller value 1. So our result is 5 + 1 = 6.
// In II, we have same values, so we add and get 1 + 1 = 2
// In case of more than 2 characters, we traverse from left to right and group only when we see a greater value character after a smaller value character. For example MXVII is 1000 + 10 + 5 + 1 + 1 = 1017. And XLVII is (50 - 10) + 5 + 1 + 1 = 47. Note that L is larger and comes after X.
// Examples:

// Input: s = "IX"
// Output: 9
// Explanation: IX is a Roman symbol which represents 10 - 1 = 9

// Input: s = "XL"
// Output: 40
// Explanation: XL is a Roman symbol which represents 50 - 10 = 40

// Input: s = "MCMIV"
// Output: 1904
// Explanation: M is 1000, CM is 1000 - 100 = 900, and IV is 4. So we have total as 1000 + 900 + 4 = 1904

function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    let element = romanMap[s[i]];
    const nextEle = romanMap[s[i + 1]];
    if (element < nextEle) element = element * -1;
    result += element;
  }

  result += romanMap[s[s.length - 1]];
  return result;
}

console.log(romanToInt("IV"), "correct:4");
console.log(romanToInt("VI"), "correct:6");
console.log(romanToInt("MXVII"), "correct:1071");
console.log(romanToInt("XLVII"), "correct:47");
console.log(romanToInt("IX"), "correct:9");
console.log(romanToInt("MCMIV"), "correct:1904");
console.log(romanToInt("XL"), "correct:40");
