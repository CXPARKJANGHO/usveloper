import { Person } from './Person';

class Student extends Person {
  study(): string {
    return `${this.name} is studying.`;
  }
}
const student = new Student('Lee');

console.log(student.sayHello());
console.log(student.study());
