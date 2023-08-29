function myShift(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    const firstElement = array[0];
    array.splice(0, 1)[0];
    return firstElement;
  }
}

const array = [1, 2, 3, 4, 5];
const firstElement = myShift(array);
console.log(firstElement);
console.log(array);
