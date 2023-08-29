function myPop(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    const lastElement = array[array.length - 1];
    array.splice(array.length - 1, 1);
    return lastElement;
  }
}

const array = [1, 2, 3, 4, 5];
const pop = myPop(array);
console.log(pop);
console.log(array);
