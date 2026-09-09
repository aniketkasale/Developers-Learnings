// Given an array arr[] of n integers and a target value,
// find the number of pairs of integers in the array whose sum is equal to target.

// Examples:

// Input: arr[] = [1, 5, 7, -1, 5], target = 6
// Output:  3
// Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5).

// Input: arr[] = [1, 1, 1, 1], target = 2
// Output:  6
// Explanation: Pairs with sum 2 are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1) and (1, 1).

// Input: arr[] = [10, 12, 10, 15, -1], target = 125
// Output:  0
// Explanation: There is no pair with sum = target

function countPairsWithSum(arr, target) {
  let pairs = 0;
  for (let i = 0; i < arr.length; i++) {
    const element1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const element2 = arr[j];
      const sum = element1 + element2;
      if (target === sum) {
        pairs++;
      }
    }
  }

  return pairs;
}

console.log(
  "First Approach",
  countPairsWithSum([1, 5, 7, -1, 5], 6),
  countPairsWithSum([1, 1, 1, 1], 2),
  countPairsWithSum([10, 12, 10, 15, -1], 125),
);

// Map approach after checking soln

function countPairsWithMap(arr, target) {
  const map = new Map();
  let pairs = 0;
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      pairs += map.get(target - arr[i]);
    }
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  return pairs;
}

console.log(
  "2nd Approach",
  countPairsWithMap([1, 5, 7, -1, 5], 6),
  countPairsWithMap([1, 1, 1, 1], 2),
  countPairsWithMap([10, 12, 10, 15, -1], 125),
);
