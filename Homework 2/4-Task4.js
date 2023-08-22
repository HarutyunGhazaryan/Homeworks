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

function getUserNames(users) {
  return users.map((Element) => Element.username);
}
const result = getUserNames(users);
console.log(result);
