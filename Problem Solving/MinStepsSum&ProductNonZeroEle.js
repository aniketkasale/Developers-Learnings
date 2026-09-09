// Minimum steps to make sum and the product of all elements of array non-zero

// Given an array arr of N integers, the task is to find the minimum steps in which the sum and product of all elements of the array can be made non-zero. In one step any element of the array can be incremented by 1.
// Examples:
// Input: N = 4, arr[] = {0, 1, 2, 3}
// Output: 1
// Explanation:
// As product of all elements of the array is zero
// Increment the array element 0 by 1, such that array sum and product is not equal to zero.
// Input: N = 4, arr[] = {-1, -1, 0, 0}
// Output: 3
// Explanation:
// As product of all elements of the array is zero
// Increment the array element 2 and 3 by 1, such that array sum and product is not equal to zero

// approach
// find all zeros, increment them by 1 and count all zeros will be steps for product;
// sum of all if zero, then count of steps for product +1; so that we will add +1;

function calculateSteps(arr) {
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      steps++;
      arr[i] = 1;
    }
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  if (sum === 0) return steps + 1;
  return steps;
}

console.log(calculateSteps([0, 1, 2, 3]));
console.log(calculateSteps([-1, -1, 0, 0]));
