const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function filterArray(arr) {
  return arr.filter((Element) => parseInt(Element, 10));
}
const newArray = filterArray(arr);
console.log(newArray);
