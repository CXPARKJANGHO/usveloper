export class Person {
  //* protected
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return 'hello ' + this.name;
  }
}

const person = new Person('Lee');
console.log(person.sayHello());
