'use strict';

//* hoisting: var, function, declaration 等が一番上に移動すること
console.log('1');
//* BrowserAPI
setTimeout(() => console.log('2'), 1000);
console.log('3');

//* Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

//* Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);
//* Result : 1 3 hello 2 async callback

//* Callback Hell
class Userstorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === 'Lee' && password === '123') {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'Lee') {
        onSuccess({ name: 'Lee', role: 'admin' });
      } else {
        onError(new Error('no success'));
      }
    });
  }
}

const userstorage = new Userstorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userstorage.loginUser(
  id,
  password,
  (user) => {
    userstorage.getRoles(user, (userWithRole) =>
      alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
    );
  },
  (error) => {
    console.log(error);
  }
);
