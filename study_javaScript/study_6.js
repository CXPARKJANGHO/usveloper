'use strict';

//* join : Array ⇒ String
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result); //* 'apple, banana, orange'
}

//* split : String ⇒ Array
{
    const fruits = 'apple,banana,orange';
    const result = fruits.split(',');
    console.log(result); //* ["apple", "banana", "orange"]
}

//* reverse
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); //* [5, 4, 3, 2, 1]
}

//* splice
{
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0, 2);
    console.log(result); //* [1, 2]
    console.log(array); //* [3, 4, 5]
}

//* slice
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result); //* [3, 4, 5]
    console.log(array); //* [1, 2, 3, 4, 5]
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

//* find
{
    const result = student.find((student) => student.score === 90);
    console.log(result); //* 「Score = 90」に該当するStudentObjects
}

//* filter
{
    const result = student.filter((student) => student.enrolled);
    console.log(result); //* 「enrolled === true」に該当するStudentObjects
}

//* map
{
    const result = student.map((student) => student.score);
    console.log(result); //* Scores Array ([45, 80, 90, 66, 88])
}

//* some
{
    const result = student.some((student) => student.score < 50);
    console.log(result); //* Score < 50 ⇒ true

    const result2 = student.every((student) => student.score < 50);
    console.log(result2); //* Score < 50 ⇒ false
}

//* reduce
{
    const result = student.reduce((prev, curr) => {
        return prev + curr.score;
    }, 0);
    console.log(result); //* 369 (Accumulated result)
    console.log(result / student.length); //* 73.8 (Average)
}

//* join
{
    const result = student.map((student) => student.score).join();
    console.log(result); //* Scores Array ([45, 80, 90, 66, 88]) ⇒ Scores String('45,80,90,66,88')
}

//* 応用 && sort
{
    const result = student
        .map((student) => student.score) //* 1: Scores Array
        .filter((score) => score >= 50) //* 2: Score >= 50
        .join(); //* Array ⇒ String
    console.log(result); //* '80,90,66,88'
}

{
    const result = student
        .map((student) => student.score) //* Scores Array
        .sort((a, b) => a - b) //* sort((a, b) => a - b) : '45, 66, 80, 88, 90' || sort((a, b) => b - a) : '90, 88, 80, 66, 45'
        .join(); //* Array ⇒ String
    console.log(result); //* '45, 66, 80, 88, 90'
}
