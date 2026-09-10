// Given a string s, check if it is a Pangram or not.
// A Pangram is a sentence containing every letter in the English Alphabet either
// in lowercase or Uppercase.

// Examples:

// Input: s = "The quick brown fox jumps over the lazy dog"
// Output: true
// Explanation: The input string contains all characters from 'a' to 'z'.

// Input: s = "The quick brown fox jumps over the dog"
// Output: false
// Explanation: The input string does not contain all characters from 'a' to 'z',
// as 'l', 'z', 'y' are missing

function isPangram(s) {
  const pangram = new Set();
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
      pangram.add(char);
    // or
    // if (char >= "a" && char <= "z") pangram.add(char);
  }

  return pangram.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
