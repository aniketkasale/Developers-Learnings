// removing duplicates

function removeDuplicates(arr) {
  const removeDup = arr.filter((ele, i) => arr.indexOf(ele) === i); //method 1

  console.log([...new Set(arr)]); // method 2
  console.log(removeDup);
}

removeDuplicates([1, 2, 2, 3, 3]);
