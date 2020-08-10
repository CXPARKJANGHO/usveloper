'use strict';

//* Array　Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//* forEach
const fruits = ['Apple', 'Banana'];
// fruits.forEach(function (fruit, index, array) {
fruits.forEach(
    (fruit) => console.log(fruit)
    // console.log(index);
    // console.log(array);
);

//* Addtion, deletion, copy
//* push : add to the end
fruits.push('Melon');
console.log(fruits); //* ["Apple", "Banana", "Melon"]

//* pop : remove from end
const poped = fruits.pop(); //* return
console.log(fruits); //* ["Apple", "Banana"]

//! unshift, shift => pop, pushより遅い
//* unshift : add to the beginning
fruits.unshift('Melon', 'Banana');
console.log(fruits); //* ["Melon", "Banana", "Apple", "Banana"]

//* shift : remove from beginning
fruits.shift();
console.log(fruits); //* ["Banana", "Apple", "Banana"]

fruits.push('Lemon', 'Pitch');
console.log(fruits);

//* splice : remoe by index position
fruits.splice(2); //* (start: number, deleteCount: number)
console.log(fruits); //* ["Banana", "Apple"]

fruits.splice(1, 2);
console.log(fruits); //* ["Banana"]

fruits.splice(1, 1, 'random1', 'random2');
console.log(fruits); //* ["Banana", "random1", "random2"]

//* concat : combine two array
const fruits2 = ['Lemon', 'Pitch'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); //* ["Banana", "random1", "random2", "Lemon", "Pitch"]

//* include
console.log(fruits.includes('Lemon')); //* false
console.log(newFruits.includes('Lemon')); //* true

//* indexOf & lastIndexOf
newFruits.push('Lemon'); //* ["Banana", "random1", "random2", "Lemon", "Pitch" ,"Lemon"]
console.log(newFruits.indexOf('Lemon')); //* 3
console.log(newFruits.lastIndexOf('Lemon')); //* 5
