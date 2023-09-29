function getDay(date) {
  const parts = date.split("/");
  const year = parts[2];
  const month = parts[1];
  const day = parts[0];
  const day1 = new Date(year, month - 1, day);
  const dayOfWeek = day1.getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayNames[dayOfWeek];
}

console.log(getDay("12/07/2016"));
console.log(getDay("09/04/2016"));
console.log(getDay("12/08/2011"));
console.log(getDay("26/09/2023"));
