// Given an integer, convert it into its equivalent Roman numeral representation.

// Note: Following is the list of Roman symbols (including subtractive cases):

// Symbol	Value
// I	1
// IV	4
// V	5
// IX	9
// X	10
// XL	40
// L	50
// XC	90
// C	100
// CD	400
// D	500
// CM	900
// M	1000
// Examples:

// Input: 9
// Output: IX
// Explanation: 9 is written as "IX" in Roman numerals using subtractive notation — placing a smaller numeral before a larger one.

// I = 1, X = 10
// IX means 10 - 1 = 9
// Input: 40
// Output: XL
// Explanation: 40 is written as "XL" in Roman numerals using subtractive notation — placing a smaller numeral before a larger one.

// X = 10, L = 50
// XL means 50 - 10 = 40

function intToRoman(num) {
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanMap.length; i++) {
    const { value, symbol } = romanMap[i];
    while (num >= value) {
      num = num - value;
      result += symbol;
    }
    if (num <= 0) break;
  }

  return result;
}
