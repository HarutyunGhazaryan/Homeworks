function returnsFormattedString(date) {
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
  const year = date.getFullYear();
  const month = months[date.getMonth() - 1];
  const day = date.getDate();
  return `${month} ${day}, ${year}`;
}

const date = returnsFormattedString(new Date(2023, 10, 5));
console.log(date);
//"October 5, 2023".
