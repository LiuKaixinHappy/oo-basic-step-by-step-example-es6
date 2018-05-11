import Person from "../../src/practice_6/person.js";

function Student(name, age, klass) {
    Person.call(this, name, age);
    this.klass = klass;
    this.introduce = function () {
        return `My name is ${name}. I am ${age} years old. I am a Student. I am at Class ${klass}.`;
    };
}

module.exports = Student;


