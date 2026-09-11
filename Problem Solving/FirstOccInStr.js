// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("sadbutsad", "tsad"));
console.log(strStr("leetcode", "tc"));
