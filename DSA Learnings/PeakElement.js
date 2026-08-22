// You are given an array arr[] where no two adjacent elements are same, find the index of a peak element. An element is considered to be a peak if it is greater than its adjacent elements (if they exist).

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
// -231 ≤ arr[i] ≤ 231 - 1


// -------------------

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    peakElement(arr) {
        // Code here
        
        // check if arr length is 1 then return zero, as we  Consider the element before the first element and the element after the last element to be negative infinity.
        // if first element is greater than 2nd, its a peak.
        // if second element is greater than last 2nd(1st), its a peak.
        
        // as we need any peak, we can use binary tree and start from the mid which will help us split the loops in two
        // have low as 2nd element of array and high as 2nd last element as we checked for 1st and last element already
        // 1. we can decide mid by summing up the low and high and deviding it by 2
        // 2. check if mid is peak by checking its adjecents
        // 3. if mid is smaller than right adjecent then we may look into right side of the array 
        // by assigning low as mid+1
        // 4. if mid is smaller than left adjecent then we may look into left side of the array 
        // by assigning high as mid-1
        // then repeat 1,2,3,4 untill low is less than or equal to high
        
        
        const n = arr.length;
        if(n===1) return 0;
        
        if(arr[0]>arr[1]) return 0;
        if(arr[n-1]>arr[n-2]) return n-1;
        
        let low = 1;
        let high = n-2;
        
        while(low<=high){
            let midIndex = Math.floor((low+high)/2);
            let leftEle = arr[midIndex-1];
            let rightEle = arr[midIndex+1]
            let midEle = arr[midIndex]
            
            if(midEle>leftEle && midEle>rightEle) return midIndex
            
            if(midEle<rightEle){
                low = midIndex+1
            } else {
                high = midIndex-1
            }
            
            
        }
        
    }
}