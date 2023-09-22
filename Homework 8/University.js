class University {
  constructor(teachers = [], students = []) {
    this.teachers = teachers;
    this.students = students;
  }
  addMember(member) {
    if (member instanceof Student && !this.students.includes(member)) {
      this.students.push(member);
    } else if (member instanceof Teacher && !this.teachers.includes(member)) {
      this.teachers.push(member);
    }
  }
  removeMember(member) {
    if (member instanceof Student) {
      let index = this.students.indexOf(member);
      this.students.splice(index, 1);
    } else {
      let index = this.teachers.indexOf(member);
      this.teachers.splice(index, 1);
    }
  }
  startLesson() {
    this.students.forEach((element) => {
      element.energy -= 2;
    });
    this.teachers.forEach((element) => {
      element.energy -= 5;
    });
  }
}
class UniversityMember {
  constructor(name, age, role, energy = 24) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.energy = energy;
  }
  info() {
    return `name: ${this.name}, age: ${this.age}, role: ${this.role}, energy: ${this.energy}`;
  }
}
class Teacher extends UniversityMember {
  constructor(name, age) {
    super(name, age, "teacher");
  }
}

class Student extends UniversityMember {
  constructor(name, age) {
    super(name, age, "student");
  }
}

const university = new University();

const teacher = new Teacher("teacher1", 35);
const teacher2 = new Teacher("teacher2", 32);
const student = new Student("student1", 22);
const student2 = new Student("student2", 20);

university.addMember(teacher);
university.addMember(teacher2);
university.addMember(student);
university.addMember(student2);

university.removeMember(teacher);
university.removeMember(student);

university.startLesson();

for (const teacher of university.teachers) {
  console.log(teacher.info());
}
for (const student of university.students) {
  console.log(student.info());
}
