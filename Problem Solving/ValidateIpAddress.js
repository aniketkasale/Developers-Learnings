// You are given a string s in the form of an IPv4 Address.
// Your task is to validate an IPv4 Address, if it is valid return true otherwise return false.

// IPv4 addresses are canonically represented in dot-decimal notation,
// which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., "172.16.254.1"

// A valid IPv4 Address is of the form x1.x2.x3.x4
// where 0 <= (x1, x2, x3, x4) <= 255.
// Thus, we can write the generalized form of an IPv4 address as (0-255).(0-255).(0-255).(0-255)

// Note: Here we are considering numbers only from 0 to 255 and any additional leading zeroes will be considered invalid.

// Examples :

// Input: s = "222.111.111.111"
// Output: true
// Explanation: Here, the IPv4 address is as per the criteria mentioned and also all four decimal numbers lies in the mentioned range.
// Input: s = "5555..555"
// Output: false
// Explanation: "5555..555" is not a valid IPv4 address, as the middle two portions are missing.
// Input: s = "0.0.0.255"
// Output: true
// Constraints:
// 1 ≤ |s| ≤ 15

function isValid(s) {
  // code here
  const split = s.split(".");
  if (split.length !== 4) return false;

  for (let i = 0; i < 4; i++) {
    if (split[i].length === 0) return false; // empty case
    if (split[i].length > 1 && split[i][0] === "0") return false; // leading zero case
    for (let char of split[i]) {
      if (char < "0" || char > "9") return false; // not a number case
    }
    if (Number(split[i]) > 255) return false; // out of range case
  }

  return true;
}

console.log(isValid("222.111.111.111"), "expected: true");
console.log(isValid("5555..555"), "expected: false");
console.log(isValid("0.0.0.255"), "expected: true");
