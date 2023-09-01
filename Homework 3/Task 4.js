function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const grid = [];
  for (let i = 0; i < cols; i++) {
    grid[i] = Array(rows);
  }
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      grid[i][j] = matrix[j][i];
    }
  }
  return grid;
}

const matrix = [
  ["a", "b", "f"],
  ["f", "r", "a"],
  ["f", "a", "g"],
];

const transposeMatrix = transpose(matrix);
console.log(transposeMatrix);
