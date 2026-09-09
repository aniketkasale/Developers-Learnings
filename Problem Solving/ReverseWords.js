// Given a string s, find a way to reverse the order of the words in the given string.

// Note: string may contain leading or trailing dots(.) or multiple trailing dots(.) between two words.
// The returned string should only have a single dot(.) separating the words.

// Examples:

// Input: s = "i.like.this.program.very.much"
// Output: much.very.program.this.like.i
// Explanation: The words in the input string are reversed while maintaining the dots as separators, resulting in "much.very.program.this.like.i".

// Input: s = ”..geeks..for.geeks.”
// Output: geeks.for.geeks

// Input: s = "...home......"
// Output: home

function reverseWords(s) {
  const listOfWords = [];
  let word = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ".") {
      word += s[i];
    } else if (word !== "") {
      listOfWords.push(word);
      word = "";
    }
  }
  if (word !== "") {
    listOfWords.push(word);
  }
  return listOfWords.reverse().join(".");
}

console.log(
  reverseWords("i.like.this.program.very.much"),
  reverseWords("..geeks..for.geeks."),
  reverseWords("...home......"),
);
