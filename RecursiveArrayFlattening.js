// **Question:** Implement a polyfill for `Array.prototype.flat()`.
// Your implementation must handle the `depth` argument correctly.

const nestedData = [2, [7, 8]];

/**
 * @param {Array} arr
 * @param {number} depth
 */

function customFlat(arr, depth = 1) {
  if (depth <= 0) {
    return arr.slice();
  }

  const results = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      results.push(customFlat(element, depth - 1));
    } else {
      results.push(element);
    }
  }

  return results;
}

console.log(customFlat(nestedData, 1));
console.log(customFlat(nestedData, 2));
console.log(customFlat(nestedData, Infinity));
