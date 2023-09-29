function monthsInterval(start, end) {
  const month = [];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (start > end) {
    [start, end] = [end, start];
  }

  while (start <= end) {
    if (!month.includes(months[start.getMonth()])) {
      month.push(months[start.getMonth()]);
    }
    start.setMonth(start.getMonth() + 1);
  }
  return month.sort((a, b) => months.indexOf(a) - months.indexOf(b));
}

let january = new Date(2017, 0, 1);
let march = new Date(2017, 2, 1);
console.log(monthsInterval(january, march));

let december = new Date(2017, 11, 1);
let january18 = new Date(2018, 0, 1);
console.log(monthsInterval(december, january18));

let january2017 = new Date(2017, 0, 1);
let january2018 = new Date(2018, 0, 1);
console.log(monthsInterval(january2017, january2018));
