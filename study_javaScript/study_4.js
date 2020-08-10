'use strict';

//* objects = {key : value};
const obj1 = {};
const obj = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const person = { name: 'Lee', age: 5 };
print(person);

person.job = true;
console.log(person.job);

delete person.job;
console.log(person.job); //* undefined

//* object['key']
console.log(['name']);

person['job'] = true;
console.log(person['job']);

function printValue(obj, key) {
    console.log(obj.key); //* undefined
    console.log(obj[key]);
}

printValue(person, 'name');

//* property value shorthand
const person4 = { name: 'Lee', age: 6 };
console.log(person4);
function makePerson(name, age) {
    return {
        name, //* this.name = name
        age, //* this.age = age
    };
}

//* Constructor function
const person5 = new Person('Kim', 7);
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

//* in operator
console.log('name' in person4);
console.log('age' in person4);
console.log('aa' in person4); //* undefined

//* for..in
console.clear();
for (key in person4) {
    console.log(key);
}

//* for..of
const array = [1, 2, 3, 4];
//! old
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//! new
for (value of array) {
    console.log(value);
}

//* Object.assign
const user = { name: 'Lee', age: 20 };
//! old
const user2 = {};
for (key in user) {
    user2[key] = user[key];
}
console.log(user2);
//! new
// const user3 = {};
// Object.assign(user3, user);
const user3 = Object.assign({}, user);
console.log(user3);

const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color); //* 'blue'
console.log(mixed.size); //* 'big'
