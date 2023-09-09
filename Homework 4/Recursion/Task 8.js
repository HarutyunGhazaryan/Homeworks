let newObj = {};
function flattenObject(nestedObject, prev = false, firstLevel = true) {
  for (let key in nestedObject) {
    if (firstLevel) {
      prev = false;
    }
    if (typeof nestedObject[key] === "object") {
      if (prev) {
        prev = prev + "." + key;
      } else {
        prev = key;
      }

      flattenObject(nestedObject[key], prev, false);
    } else {
      if (prev) {
        newObj[prev + "." + key] = nestedObject[key];
      } else {
        newObj[key] = nestedObject[key];
      }
    }
  }
  return newObj;
}

const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: 5,
};
const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);
/* {
  "a": 1,
  "b.c": 2,
  "b.d.e": 3,
  "b.d.f": 4,
  "g": 5
 } */
