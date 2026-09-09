// Minimum steps required to reduce all the elements of the array to zero

// Given an array arr[] of positive integers, the task is to find the minimum steps to reduce all the elements to 0. In a single step, -1 can be added to all the non-zero elements of the array at the same time.
// Examples:
// Input: arr[] = {1, 5, 6}
// Output: 6
// Operation 1: arr[] = {0, 4, 5}
// Operation 2: arr[] = {0, 3, 4}
// Operation 3: arr[] = {0, 2, 3}
// Operation 4: arr[] = {0, 1, 2}
// Operation 5: arr[] = {0, 0, 1}
// Operation 6: arr[] = {0, 0, 0}
// Input: arr[] = {1, 1}
// Output: 1

// approach : after observation min steps to make all zero would be always max ele of array

function steps(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }

  return max;
}

console.log(steps([1, 5, 6]));
console.log(steps([1, 1]));
