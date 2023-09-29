function rangeDays(start, end) {
  let sumDays = 0;
  for (let i = start + 1; i <= end; i++) {
    if (i % 400 === 0 || (i % 100 === 0 && i % 4 === 0)) {
      sumDays += 366;
    } else {
      sumDays += 365;
    }
  }
  return sumDays;
}
const start = 2021;
const end = 2022;
console.log(rangeDays(start, end));
