// removing duplicates

function removeDuplicates(arr) {
  const removeDup = arr.filter((ele, i) => arr.indexOf(ele) === i);

  console.log([...new Set(arr)]);
  console.log(removeDup);
}

removeDuplicates([1, 2, 2, 3, 3]);
