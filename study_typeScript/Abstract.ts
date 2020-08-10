abstract class Animal {
  //* 抽象メソッド
  abstract makeSound(): void;
  //* 一般メソッド
  move(): void {
    console.log('raoaming the earth.. ');
  }
}

class Dog extends Animal {
  //* 必ず作成するメソッド
  makeSound() {
    console.log('ワンワン');
  }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();
