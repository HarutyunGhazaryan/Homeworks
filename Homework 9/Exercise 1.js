function calculatesTheAge(birthDate) {
  const age = new Date();
  age.setFullYear(
    age.getFullYear() - birthDate.getFullYear(),
    age.getMonth() - birthDate.getMonth() + 1,
    age.getDate() - birthDate.getDate()
  );
  return age.getFullYear();
}

const birthDate = calculatesTheAge(new Date(2000, 4, 10));
console.log(birthDate);
