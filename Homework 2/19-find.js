function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}
const find = myFind([1, 2, 3, 4, 5], (Element, index, array) => Element > 2);
console.log(find);
