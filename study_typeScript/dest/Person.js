"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return 'hello ' + this.name;
    };
    return Person;
}());
exports.Person = Person;
var person = new Person('Lee');
console.log(person.sayHello());
//# sourceMappingURL=Person.js.map