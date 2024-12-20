// Basic Example: Summing an Array of Numbers

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc,curr)=>acc+curr)
// console.log(sum)


// Example 2: Flattening an Array

// const nestedArray = [[1, 2], [3, 4], [5],6];
// const flatterned = nestedArray.reduce((acc,curr)=>{return acc.concat(curr)},[])
// console.log(flatterned)



// Example 3: Counting Instances of Values in an Object

// const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
// const count = fruits.reduce((acc,curr)=>{
//     if (!acc[curr]) {
//         acc[curr] = 1
//     }else acc[curr]+=1

//     return acc
// },{})

// console.log(count)


// Example 4: Grouping Objects by a Property
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Alice', age: 35 },
//     { name: 'Bob', age: 40 }
// ];
/*
Output:
{
    Alice: [{ name: 'Alice', age: 25 }, { name: 'Alice', age: 35 }],
    Bob: [{ name: 'Bob', age: 30 }, { name: 'Bob', age: 40 }]
}
*/
// const groupedByName = people.reduce((acc,curr)=>{
// if (!acc[curr?.name]) {
//     acc[curr?.name] = [curr]
// }else acc[curr?.name].push(curr)
// return acc
// },{})

// console.log(groupedByName)

// -----------------------------

// Sum of Squares: Write a function that takes an array of numbers and returns the sum of their squares.

// const numbers = [1, 2, 3, 4];
// const sumOfSq = numbers.reduce((acc,curr)=>acc+curr*curr,0)
// console.log(sumOfSq)

// -----------------------------

// Find Maximum Value: Write a function that takes an array of numbers and returns the maximum value.

// const numbers = [1, 5, 3, 9, 2];
// const max = numbers.reduce((acc, curr) => {
//     if (curr > acc) {
//         acc = curr
//     } 
//     return acc
// }, numbers[0])
// console.log(max)

// Remove Duplicates: Write a function that takes an array and returns a new array with duplicates removed.

// const array = [1, 2, 2, 3, 4, 4, 5];
// const unique =array.reduce((acc,curr)=>{
// if (!acc.includes(curr)) {
//     acc.push(curr)
// }
// return acc
// },[])
// console.log(unique)
// console.log(unique)
