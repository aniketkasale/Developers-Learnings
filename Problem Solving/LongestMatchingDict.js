// Longest Matching in Dictionary with Removals
// Given a lowercase string s and a dictionary d[] containing lowercase words, find the longest word in the dictionary that can be obtained by deleting some characters from s without changing the order of the remaining characters.

// Note: If multiple words have the same maximum length, return the lexicographically smallest one. If no valid word exists, return an empty string.

// Examples :

// Input: d = ["ale", "apple", "monkey", "plea"], s = "abpcplea"
// Output: "apple"
// Explanation: After deleting "b", "c", "a" s became "apple" which is present in d.
// Input: d = ["a", "b", "c"], s = "abpcplea"
// Output: "a"
// Explanation: After deleting "b", "p", "c", "p", "l", "e", "a" s became "a" which is present in d.
// Constraints:
// 1 ≤ |s| ≤ 105
// 1 ≤ n ≤ 104
// 1 ≤ m ≤ 100, where m is the length of word in dictionary

function isSubSequence(s, word) {
  let i = 0; // s position
  let j = 0; // word position
  while (i < s.length && j < word.length) {
    if (s[i] === word[j]) {
      j++;
      i++;
    } else {
      i++;
    }
  }

  return j === word.length;
}

function findLongestWord(s, d) {
  let ans = "";

  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    if (isSubSequence(s, element)) {
      if (ans.length === element.length) {
        ans = ans < element ? ans : element;
      } else if (ans.length < element.length) {
        ans = element;
      }
    }
  }

  return ans;
}
