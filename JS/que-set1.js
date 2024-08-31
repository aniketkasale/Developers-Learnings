// Given a string, reverse each word in the sentence
// function reverseString(str) {
//   let result = str.split(" ").map((word) => {
//     return word.split("").reverse().join("");
//   });
//   return result.join(" ");
// }

// console.log(reverseString("aniket kasale"));

// .......................................

// How to check if an object is an array or not? Provide some code.
// function checkIsArray(obj) {
//   return Array.isArray(obj);
// }

// console.log(checkIsArray("sjs"));
// console.log(checkIsArray([]));

// .......................................

// How to empty an array in JavaScript?
// function emptyArray(arr) {
//   arr.length = 0;
//   return arr;
// }

// console.log(emptyArray(["ks", "s"]));

// .......................................

// How would you check if a number is an integer? without using isInteger method
// function isInteger(param) {
//   return param % 1 === 0;
// }

// console.log(isInteger(1));
// console.log(isInteger(1.5));

// .......................................

// Make this work :
// duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

// function duplicate(arr) {
//   return arr.concat(arr).sort();
// }

// console.log(duplicate([1, 2, 3, 4, 5]));

// .......................................

// Write a JavaScript function that reverse a number
// function reverseNum(num) {
//   return Number(num.toString().split("").reverse().join(""));
// }
// function reverseNum(num) {
//   // let strResult = "";
//   let result = 0;

//   while (num > 0) {
//     let rem = num % 10;
//     // strResult = strResult + rem;
//     result = result * 10 + rem;
//     num = Math.floor(num / 10);
//   }
//   // return Number(strResult);
//   return result;
// }

// console.log(reverseNum(123));

// .......................................

// Write a JavaScript function that checks whether a passed string is palindrome or not
// function isPalindrome(string) {
//   return string.split("").reverse().join("") === string;
// }

// console.log(isPalindrome("bob"));
// console.log(isPalindrome("abc"));

// .......................................

// Write a JavaScript function that returns a passed string with letters in alphabetical order
// function alphabeticalOrder(string) {
//   return string.split("").sort().join("");
// }
// console.log(alphabeticalOrder("cba"));

// Write a JavaScript function that accepts a string
// as a parameter and converts the first letter of each
// word of the string in upper case
// function capitalize(string) {
//     const temp = string
//       .split(" ")
//       .map((word) => word.charAt(0).toUpperCase() + word.substring(1));
//     return temp.join(' ');
//   }

//   console.log(capitalize("aniket kasale"));

// Write a JavaScript function to get
// the number of occurrences of each letter
// in specified string

// function occurrences(string) {
//     const occ = {}
//     string.split('').forEach(letter => {
//         if (occ[letter]) {
//             occ[letter] = occ[letter] + 1
//         } else {
//             occ[letter] = 1
//         }
//     });
//     return occ
// }

// console.log(occurrences('apple'))

// loop an array and add all members of it

// function addArrayMembers(array) {
//     let sum = 0;
//     array.forEach(ele=>sum+=ele)
//     return sum
// }
// console.log(addArrayMembers([1,2,3,4]))

// in an array of numbers and strings, only add those members which are not strings
// function addArrayMembers(array) {
//     let sum = 0;
//     array.forEach(ele=>{
//         if(typeof ele==='number') sum +=ele
//     })
//     return sum
// }
// console.log(addArrayMembers([1,2,'a','b',3,4]))

// loop an array of objects and remove all objects which don't have gender's value male
// function removeObj(arr) {
//     let modifiedArr = arr.filter((obj)=>obj?.gender==='male');
//     return modifiedArr
// }

// console.log(removeObj([{gender:'male'},{gender:'female'}]))

// Write a JavaScript function to clone an array
function cloneArray(arr) {
    return [...arr]
}

// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
