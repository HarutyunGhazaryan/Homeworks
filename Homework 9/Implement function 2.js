const getWeekOfMonth = (date) => {
  const day = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = day.getDay();
  const dif = (date - day) / (24 * 60 * 60 * 1000);
  return Math.ceil((dif - (7 - dayOfWeek)) / 7) + 1;
};
const result = getWeekOfMonth(new Date(2017, 10, 9));
console.log(result);
