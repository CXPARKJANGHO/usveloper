//* Default parameters
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hello');

//* Rest parameters
//*... : Object
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('A', 'B', 'C');

//* Function expression
const pring = function () {
    console.log('print');
};
print();
const printAgain = print;
printAgain();

//* Callback function
function quiz(answer, printYes, printNo) {
    if (answer === 'OK') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    //* anonymous function
    console.log('Yes');
};
const printNo = function printNo() {
    console.log('No');
};

quiz('OK', printYes, printNo);
quiz('NG', printYes, printNo);

//* Arrow function
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const multiply = (a, b) => {
    return a * b;
};

//* IIFE
(function hello() {
    console.log('IIFE');
})();
