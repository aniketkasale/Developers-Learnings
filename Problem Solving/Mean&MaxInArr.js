// Given an array arr[]. Your task is to find the minimum and maximum elements in the array.

// Examples:
// Input: arr[] = [1, 4, 3, 5, 8, 6]
// Output: [1, 8]
// Explanation: minimum and maximum elements of array are 1 and 8.
// Input: arr[] = [12, 3, 15, 7, 9]
// Output: [3, 15]
// Explanation: minimum and maximum element of array are 3 and 15.

// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 109

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  getMinMax(arr) {
    // code here
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
      let currEle = arr[i];
      if (currEle > max) max = currEle;

      if (currEle < min) min = currEle;
    }

    return [min, max];

    // let min = Math.max(...arr);
    // let max = Math.min(...arr);
    // return [min, max];
  }
}
