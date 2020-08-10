'use strict'; //! 必ず付けること。

//* Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speack() {
        console.log(`${this.name}: Hello`);
    }
}

const person1 = new Person('person1', 20);
console.log(person1.name);
console.log(person1.age);
person1.speack();

//* getter & setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        //! return this.age;
        //* すでに'age'が定義されているため、'_age'でReturn
        return this._age;
    }

    set age(value) {
        //! this.age = value;
        // this._age = value;
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Lee', 'SJ', -1);
console.log(user.age);

//* pubic, private
class Experiment {
    publicField = 2; //* public Field
    #privateField = 0; //! private Field（使えるブラウザが少ない）
}

const experiment = new Experiment();
console.log(experiment.privateField);
console.log(experiment.privateField);

//* Static
class Article {
    static publisher = 'coding';

    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //! undefined
console.log(Article.publisher);

article2.printPublisher(); //! undefined
Article.printPublisher();

//* Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    //* overwriting
    getArea() {
        return (this.width * this.height) / 2;
    }

    //* overwriting
    draw() {
        super.draw();
        console.log('▲');
    }
    //* overwriting(Object)
    toString() {
        return `ABCD`;
    }
}

const rectangle = new Rectangle(20, 20, 'red');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());

//* instance of
console.log(rectangle instanceof Rectangle); //* true
console.log(triangle instanceof Rectangle); //* false
console.log(triangle instanceof Triangle); //* true
console.log(triangle instanceof Shape); //* true
console.log(triangle instanceof Object); //* true
