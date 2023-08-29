function mySlice(array, start, end) {
  const newArray = [];
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  for (let i = start; i < array.length && i < end; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

const newArray = mySlice([1, 2, 3, 4, 5], 1, 3);
console.log(newArray);
