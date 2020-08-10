//* valiable
var varData = 'varData'; //! 使用禁止
let letData = 'letData'; //* 値に変動がある場合のみ
const constData = 'constData'; //* JavaScriptを使用する際、この形式を使用する。（値の変更が不可）

//* String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals:  + ${1 + 2}`);

//* Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

//* Equality
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive); //* true
console.log(stringFive === numberFive); //* false

console.log(0 == false); //* true
console.log(0 === false); //* false
console.log('' == false); //* true
console.log('' === false); //* false
console.log(null == undefined); //*true
console.log(null === undefined); //* false

//* Ternary operator
const name = 'Lee';
console.log(name === 'Lee' ? 'Yes' : 'No');

//* do-while
let i = 3;
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);