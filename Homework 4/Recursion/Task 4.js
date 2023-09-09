function arraySum(array, l = array.length) {
  if (l === 0) {
    return 0;
  } else {
    return array[l - 1] + arraySum(array, l - 1);
  }
}

console.log(arraySum([1, 2, 3, 4, 5])); // Output: 15
