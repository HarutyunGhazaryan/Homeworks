function parseInteger(array) {
  const result = array.map((Element) => {
    const parsedInt = parseInt(Element, 10);
    return isNaN(parsedInt) ? null : parsedInt;
  });
  return result;
}
console.log(parseInteger(["1", "2", "34"]));
console.log(parseInteger(["1", "px", "2323"]));
