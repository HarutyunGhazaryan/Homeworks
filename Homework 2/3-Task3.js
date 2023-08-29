const obj = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 6,
  x: 6,
  q: 7,
  z: 7,
};

function calculateScrabbleScore(obj, word) {
  let sum = 0;
  const word1 = word.split("");
  word1.forEach((element) => {
    sum += obj[element];
  });
  return sum;
}
const word = "dog";
const sum = calculateScrabbleScore(obj, word);
console.log(sum);
