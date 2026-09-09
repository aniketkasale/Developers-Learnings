// Given an array, the task is to cyclically right-rotate the array by one.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 5]
// Output: [5, 1, 2, 3, 4]

// Input: arr[] = [2, 3, 4, 5, 1]
// Output: [1, 2, 3, 4, 5]

function rotateArrayByOne(arr) {
  const lastEle = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = lastEle;
  return arr;
}

console.log(rotateArrayByOne([1, 2, 3, 4, 5]));
console.log(rotateArrayByOne([2, 3, 4, 5, 1]));
