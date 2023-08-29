function myFilter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const newArray = myFilter(
  [1, 2, 3, 4, 5],
  (Element, index, array) => Element > 3
);
console.log(newArray);
