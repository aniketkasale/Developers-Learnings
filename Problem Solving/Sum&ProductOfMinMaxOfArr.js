// Sum and Product of minimum and maximum element of an Array

// Given an array. The task is to find the sum and product of the maximum and minimum elements of the given array.

// Examples:

// Input : arr[] = {12, 1234, 45, 67, 1}
// Output : Sum = 1235
//          Product = 1234

// Input : arr[] = {5, 3, 6, 8, 4, 1, 2, 9}
// Output : Sum = 10
//          Product = 9

function sumAndProduct(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const currEle = arr[i];
    if (currEle > max) max = currEle;
    if (currEle < min) min = currEle;
  }

  console.log("Sum:", min + max);
  console.log("Product:", min * max);
}

sumAndProduct([12, 1234, 45, 67, 1]);
