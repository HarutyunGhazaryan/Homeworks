function convertPhrase(string) {
  return (result = string
    .split(" ")
    .map((Element) => Element[0].toUpperCase())
    .join(""));
}
console.log(convertPhrase("Prisoner of War"));
console.log(convertPhrase("Have a good night"));
