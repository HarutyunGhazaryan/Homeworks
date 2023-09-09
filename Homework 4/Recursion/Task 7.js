function flattenArray(nestedArray) {
  const newArr = [];

  for (let element of nestedArray) {
    if (Array.isArray(element)) {
      newArr.push(...flattenArray(element));
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
