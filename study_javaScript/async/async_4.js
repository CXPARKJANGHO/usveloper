'use strict';

//* async & await
//* async
async function fetchUser() {
  return 'Lee';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//* await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return 'apple';
}

async function getBanana() {
  await delay(1000);
  return 'banana';
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

async function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(` + `)
  );
}

pickAllFruits().then(console.log);

async function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);