// Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.
// Note: You need to solve this problem without utilizing the built-in sort function.

// Examples:

// Input: arr[] = [0, 1, 2, 0, 1, 2]
// Output: [0, 0, 1, 1, 2, 2]
// Explanation: 0s, 1s and 2s are segregated into ascending order.
// Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
// Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
// Explanation: 0s, 1s and 2s are segregated into ascending order.
// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 2

// approach: count 0s,1s,2s

function customSort(arr) {
  let ones = 0;
  let twos = 0;
  let zeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeros++;
    if (arr[i] === 1) ones++;
    if (arr[i] === 2) twos++;
  }

  let idx = 0;
  for (let i = 0; i < zeros; i++) {
    arr[idx] = 0;
    idx++;
  }
  for (let i = 0; i < ones; i++) {
    arr[idx] = 1;
    idx++;
  }
  for (let i = 0; i < twos; i++) {
    arr[idx] = 2;
    idx++;
  }
}
