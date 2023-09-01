const matrix = [
  [1, 8, 3],
  [6, 7, 8],
  [12, 25, 0],
  [58, 12, 8],
];

function minimumOfArray(matrix) {
  const newArray = [];

  matrix.forEach((element) => {
    return newArray.push(Math.min(...element));
  });
  return newArray;
}

const newArray = minimumOfArray(matrix);
console.log(newArray);
