function sortBy(arr, str) {
  if (str === "Asc") {
    return arr.sort((a, b) => a - b);
  } else if (str === "Desc") {
    return arr.sort((a, b) => b - a);
  } else {
    return arr;
  }
}
const sortedNumber1 = sortBy([4, 3, 2, 1], "Asc");
const sortedNumber2 = sortBy([7, 8, 11, 66]);
const sortedNumber3 = sortBy([7, 8, 11, 66], "Desc");
console.log(sortedNumber1);
console.log(sortedNumber2);
console.log(sortedNumber3);
