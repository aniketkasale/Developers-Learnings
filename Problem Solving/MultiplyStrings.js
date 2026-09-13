// Multiply Large Numbers represented as Strings

// https://www.geeksforgeeks.org/dsa/multiply-large-numbers-represented-as-strings/

function multiplyStrings(s1, s2) {
  // 1. Determine whether the final result should be negative.
  const negative = (s1[0] === "-") !== (s2[0] === "-");

  // 2. Remove negative signs.
  if (s1[0] === "-") {
    s1 = s1.slice(1);
  }

  if (s2[0] === "-") {
    s2 = s2.slice(1);
  }

  // 3. Remove leading zeroes manually.
  let i = 0;

  while (i < s1.length - 1 && s1[i] === "0") {
    i++;
  }

  s1 = s1.slice(i);

  i = 0;

  while (i < s2.length - 1 && s2[i] === "0") {
    i++;
  }

  s2 = s2.slice(i);

  // 4. If either number is zero, the product is zero.
  if (s1 === "0" || s2 === "0") {
    return "0";
  }

  const m = s1.length;
  const n = s2.length;

  // 5. Maximum possible result length is m + n.
  const res = new Array(m + n).fill(0);

  // 6. Multiply each digit pair from right to left.
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const digit1 = s1.charCodeAt(i) - 48;
      const digit2 = s2.charCodeAt(j) - 48;

      const product = digit1 * digit2;

      const position = i + j + 1;

      // Add product to the appropriate result position.
      res[position] += product;

      // Move carry to the left.
      res[i + j] += Math.floor(res[position] / 10);

      // Keep only one digit at the current position.
      res[position] %= 10;
    }
  }

  // 7. Remove leading zeroes from the result array.
  let start = 0;

  while (start < res.length - 1 && res[start] === 0) {
    start++;
  }

  // 8. Convert result digits into a string.
  let answer = res.slice(start).join("");

  // 9. Add the negative sign if required.
  return negative ? "-" + answer : answer;
}
// Driver Code
let s1 = "0033";
let s2 = "2";
console.log(multiplyStrings(s1, s2));
