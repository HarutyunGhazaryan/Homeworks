function myFindIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
const index = myFindIndex(
  [1, 2, 1, 4, 5],
  (Element, index, array) => Element > 2
);
console.log(index);
