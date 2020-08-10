'use strict';

//* Promise : Javascript Object
//* state : pending ⇒ fulfilled or rejected

//* Producer
//! Promiseが作られた瞬間executorが自動的に実行される
const promise = new Promise((resolve, reject) => {
  //* doing some heavy work(network, read files)
  console.log('doing something...');
  setTimeout(() => {
    // resolve('Lee'); //* 成功時
    reject(new Error('no network')); //* 失敗時
  }, 2000);
});

//* Consumer : then, catch, finally
promise
  .then((value) => {
    console.log(value); //* resolve時
  })
  .catch((error) => {
    console.log(error); //* reject時
  })
  .finally(() => {
    //* resolve, reject 時
    console.log('finally');
  });

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//* Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('A'), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve('B'), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} ⇒ egg`)), 1000);
  });

const cook = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('C'), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));

getHen() //
  .then(getEgg) //
  .then(cook) //
  .then(console.log) //
  .catch(console.log);