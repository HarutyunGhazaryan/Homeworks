function dayOfYear(date) {
  const parts = date.split("/");
  const year = parts[2];
  const month = parts[0];
  const day = parts[1];
  const day1 = new Date(year, month - 1, day);
  const day2 = new Date(year, 0, 1);
  const dayDifference = day1 - day2;
  const dayOfYear = dayDifference / (1000 * 3600 * 24) + 1;
  return dayOfYear;
}

console.log(dayOfYear("12/13/2020")); //348
console.log(dayOfYear("12/17/2020")); //352
console.log(dayOfYear("11/16/2020")); //321
console.log(dayOfYear("1/9/2019")); //9
console.log(dayOfYear("3/1/2004")); //61
console.log(dayOfYear("12/31/2000")); //366
