function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
    let lab = labs[i];
    try {
      let result = lab.runLab(3);
      console.log(`${lab.student} code worked: ${result === 27}`);
    } catch (error) {
      console.log(`${lab.student} code worked: Error thrown`);
    }
  }
}

let studentLabs = [
  {
    student: "Carly",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Erica",
    runLab: function (num) {
      return num * num;
    },
  },
];

let studentLabs2 = [
  {
    student: "Joe",
  },
  {
    student: "Alice",
    runLab: function (num) {
      return num + 10;
    },
  },
];

console.log("Student Labs 1:");
gradeLabs(studentLabs);

console.log("Student Labs 2:");
gradeLabs(studentLabs2);
