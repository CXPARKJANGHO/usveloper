'use strict';

//* Callback Hell ⇒ Promise
class Userstorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 'Lee' && password === '123') {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'Lee') {
          resolve({
            name: 'Lee',
            role: 'admin'
          });
        } else {
          reject(new Error('no success'));
        }
      });
    });
  }
}

const userstorage = new Userstorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userstorage
  .loginUser(id, password)
  .then(userstorage.getRoles)
  .then((user) =>
    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
  )
  .catch(console.log);

// userstorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userstorage.getRoles(user, (userWithRole) =>
//       alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );