function myMap(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

const newArray = myMap(
  [1, 2, 3, 4, 5],
  (Element, index, array) => Element * 10
);
console.log(newArray);
