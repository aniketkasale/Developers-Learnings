/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const splittedStr1 = str1.toLowerCase().split("");
  const splittedStr2 = str2.toLowerCase().split("");
  const unMatchedChar = [];
  if (str1.length != str2.length) return false;
  splittedStr1.map((char) => {
    if (!splittedStr2.includes(char)) {
      unMatchedChar.push(char);
    }
  });

  return Boolean(!unMatchedChar.length > 0);
}

module.exports = isAnagram;
