// Given an array of strings arr[],
// return the longest common prefix among each and every strings present in the array.
// If there’s no prefix common in all the strings, return “”.

// Input: arr[] = [“geeksforgeeks”, “geeks”, “geek”, “geezer”]
// Output: “gee”
// Explanation: “gee” is the longest common prefix in all the given strings: “geeksforgeeks”, “geeks”, “geeks” and “geezer”.

// Input: arr[] = [“apple”, “ape”, “april”]
// Output : “ap”
// Explanation: “ap” is the longest common prefix in all the given strings: “apple”, “ape” and “april”.

// Input: arr[] = [“hello”, “world”]
// Output: “”
// Explanation: There’s no common prefix in the given strings.

function commonPrefix(arr) {
  let shortString = arr[0];
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element.length < shortString.length) shortString = element;
  }

  for (let i = 0; i < shortString.length; i++) {
    const char = shortString[i];

    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];

      if (element[i] !== char) {
        return result;
      }
    }

    result += char;
  }

  return result;
}

console.log(commonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]));
console.log(commonPrefix(["hello", "world"]));
console.log(commonPrefix(["apple", "ape", "april"]));
