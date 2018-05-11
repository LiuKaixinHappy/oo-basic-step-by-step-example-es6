
import Person from "../../src/practice_3/person.js";

function Student(name, age, klass) {
    Person.call(this, name, age);
    this.klass = klass;
    this.introduce = function () {
        return `I am a Student. I am at Class ${klass}.`;
    };
}

module.exports = Student;
