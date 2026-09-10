// Given two strings s1 and s2 consisting only of lowercase English letters and having the same length,
// check whether they are isomorphic.

// Two strings are isomorphic if:

// Each character in s1 must always map to the same character in s2.
// No two different characters in s1 can map to the same character in s2.
// A character may map to itself.
// Return true if s1 and s2 are isomorphic, otherwise return false.

// Examples:

// Input: s1 = "aab", s2 = "xxy"
// Output: true
// Explanation: Each character in s1 can be consistently mapped to a unique character in s2 (a -> x, b -> y).

// Input: s1 = "aab", s2 = "xyz"
// Output: false
// Explanation: Same character 'a' in s1 maps to two different characters 'x' and 'y' in s2.

// Input: s1 = "abc", s2 = "xxz"
// Output: false
// Explanation: Two different characters 'a' and 'b' in s1 maps with same character 'x' in s2.

// Notes
// i will maintain map like s1[0]:s2[0]
// loop through s1 chars
// if char of s1 not present in map, set s1 char : s2 char
// if present compare that the value mapped with s1 char matches with the s2 char
// if matches then move else return false

// -- s2 char should not mapped again with different char
// have to maintain two maps then for checking that s1 char mapping as well as s2 char mapping
// then if condition will be updated if char of s1 not present in map of s1 && char of s2 not present in map of s2, set s1 char : s2 char

// -- better structure
// if map of s1 already have char then the value of s2 should be same as s1 mapped value if not return false.
// if map of s2 already have char then the value of s1 should be same as s2 mapped value if not return false.

function isIsomorphic(s1, s2) {
  if (s1.length !== s2.length) return false;

  let mapS1 = new Map();
  let mapS2 = new Map();
  for (let i = 0; i < s1.length; i++) {
    const charOfS1 = s1[i];
    const charOfS2 = s2[i];

    // if (!mapS1.has(charOfS1) && !mapS2.has(charOfS2)) {
    //   mapS1.set(charOfS1, charOfS2);
    //   mapS2.set(charOfS2, charOfS1);
    // } else if (mapS1.get(charOfS1) !== charOfS2) return false;

    if (mapS1.has(charOfS1)) {
      if (mapS1.get(charOfS1) !== charOfS2) return false;
    } else mapS1.set(charOfS1, charOfS2);

    if (mapS2.has(charOfS2)) {
      if (mapS2.get(charOfS2) !== charOfS1) return false;
    } else mapS2.set(charOfS2, charOfS1);
  }

  return true;
}
console.log(isIsomorphic("aab", "xxy"));
console.log(isIsomorphic("aab", "xyz"));
console.log(isIsomorphic("abc", "xxz"));
