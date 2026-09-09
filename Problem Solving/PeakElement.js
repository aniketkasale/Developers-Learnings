// Given an array arr[] where no two adjacent elements are same, find the index of a peak element. An element is considered to be a peak if it is greater than its adjacent elements (if they exist).
// If there are multiple peak elements, Return index of any one of them. The output will be "true" if the index returned by your function is correct; otherwise, it will be "false".
// Note: Consider the element before the first element and the element after the last element to be negative infinity.

// Examples :
// Input: arr = [1, 2, 4, 5, 7, 8, 3]
// Output: true
// Explanation: arr[5] = 8 is a peak element because arr[4] < arr[5] > arr[6].
// Input: arr = [10, 20, 15, 2, 23, 90, 80]
// Output: true
// Explanation: Element 20 at index 1 is a peak since 10 < 20 > 15. Index 5 (value 90) is also a peak, but returning any one peak index is valid.

// Constraints:
// 1 ≤ arr.size() ≤ 106
// -231 ≤ arr[i] < 231

// -------------------

/**
 * @param {number[]} arr
 * @return s {number}
 */
class Solution {
  peakElement(arr) {
    // Code here
    // 		Binary

    if (arr.length === 1) return 0;

    if (arr[1] < arr[0]) return 0;

    if (arr[arr.length - 1] > arr[arr.length - 2]) return arr.length - 1;

    let high = arr.length - 2;
    let low = 1;

    while (low <= high) {
      let mid = Math.floor((high + low) / 2);
      const left = arr[mid - 1];
      const right = arr[mid + 1];
      const midEle = arr[mid];
      if (midEle > right && midEle > left) {
        return mid;
      }

      if (midEle < right) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return 0;

    //  bruteforce
    // 		if (arr.length === 1)
    // 			return 0;

    // 		if (arr[1]<arr[0])
    // 			return 0;

    // 		if (arr[arr.length - 1]>arr[arr.length - 2])
    // 			return arr.length - 1;

    // 		for(let i=1;i<arr.length-1;i++){
    // 		    let currEle = arr[i];
    // 		    let left = arr[i-1];
    // 		    let right = arr[i+1];
    // 		    if(currEle>left && currEle>right){
    // 		        return i
    // 		    }
    // 		}
  }
}
