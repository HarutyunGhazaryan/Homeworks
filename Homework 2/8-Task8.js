const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function filterUsers(users) {
  return users.filter((Element) => Element.lang !== "ru");
}
const newArray = filterUsers(users);
console.log(newArray);
