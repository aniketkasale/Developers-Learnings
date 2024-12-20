// Problem: Given an array of integers, return the indices of the two numbers such that they add up to a specific target.

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)


// create func twoSum(nums,target)
// create empty hasmap
// for each index i and number num in nums:
// complement = target - num
// if(map.has(complemet))
// return [map.get(complement),i]
// map.set(num,i)

// function twoSum(nums, target) {
//     const map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];
//         const complement = target - element;
//         if (map.has(complement)) {
//             return [map.get(complement), i]
//         }
//         map.set(element, i)
//     }

// }

// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
// console.log(twoSum([3, 3], 6)); // Output: [0, 1]


// Problem Statement: Write a program that prints the numbers from 1 to n.But for multiples of three, print "Fizz" instead of the number,
// and for the multiples of five, print "Buzz".For numbers that are multiples of both three and five, print "FizzBuzz".

// createFn FizzBuzz
// create empty array result
// for loop 1 - n
// if i is divisible by 3 and 5 - add FizzBuzz to the result 
// if i is divisible by 3 - fizz
// if i divisib

// function fizzBuzz(n) {
//     const result = []

//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push('FizzBuzz')
//         } else if (i % 3 === 0) {
//             result.push('Fizz')
//         } else if (i %5 === 0) {
//             result.push('Buzz')
//         } else {
//             result.push(i)
//         }
//     }
//     return result
// }

// console.log(fizzBuzz(15)); // Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
// console.log(fizzBuzz(5));  // Output: ["1", "2", "Fizz", "4", "Buzz"]
// console.log(fizzBuzz(3));  // Output: ["1", "2", "Fizz"]

// Given an array of integers, move all zeroes to the end of the array while maintaining the relative order of the non-zero elements.

// [0, 1, 0, 3, 12]
// [1, 3, 12, 0, 0]

// fn moveZerosToEnd()
// const numberOfZeros = 0


// function moveZerosToEnd(array) {
//     let lastNonZeroIndex = 0;

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element !== 0) {
//             array[lastNonZeroIndex] = element;
//             lastNonZeroIndex++
//         }
//     }
//     for (let i = lastNonZeroIndex; i < array.length; i++) {
//         array[i] = 0;

//     }

// }

// const arr = [0, 1, 0, 3, 12];
// moveZerosToEnd(arr);
// console.log(arr); // Output: [1, 3, 12, 0, 0]

// ----------

//  Flattern Array

// const nestedArray = [1, [2, [3, 4], 5], 6];

// console.log(nestedArray.flat(Infinity))

// function recursiveFlat(arr) {
//     let result = []

//     arr.forEach(element => {
//         if (Array.isArray(element)) {
//             result = result.concat(recursiveFlat(element))
//         } else result.push(element)
//     });

//     return result
// }

// console.log(recursiveFlat(nestedArray));

// Flattening a Nested Object

// function flattenObject(obj, parentKey = '', result = {}) {
//     for (const key in obj) {
//         const newKey = parentKey ? `${parentKey}_${key}` : key

//         if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             flattenObject(obj[key], newKey, result)
//         } else {
//             result[newKey] = obj[key]
//         }
//     }

//     return result
// }

// const nestedObject = {
//     name: 'Mansi',
//     age: 25,
//     department: {
//         name: 'Customer Experience',
//         section: 'Technical',
//         branch: {
//             name: 'Bangalore',
//             timezone: 'IST'
//         }
//     },
//     company: {
//         name: 'SAP',
//         customers: ['Ford', 'Nestle']
//     },
//     skills: ['javascript', 'node.js', 'html']
// };

// console.log(flattenObject(nestedObject));