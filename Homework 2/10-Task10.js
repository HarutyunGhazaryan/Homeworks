const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
function sumOfNumbers18Over(arr) {
  const filteredArray = arr.filter((Number) => Number >= 18);
  const sum = filteredArray.reduce((acc, cur) => acc + cur, 0);
  return filteredArray.join("+") + `= ${sum}`;
}

const sum = sumOfNumbers18Over(arr);
console.log(sum);
