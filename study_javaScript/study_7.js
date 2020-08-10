//* JSON
//* Object ⇒ JSON　(stringify(object))
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'babnana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  siza: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); //* {"name":"tori","color":"white","siza":null,"birthDate":"2020-08-07T14:12:17.148Z"}

json = JSON.stringify(rabbit, ['name']);
console.log(json); //* {"name":"tori"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'Lee' : value;
});
console.log(json);

//* JSON ⇒　Object (parse(object))
console.clear();
json = JSON.stringify(rabbit);
//const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump(); //! Error
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); //! objがStringタイプの場合、エラー
