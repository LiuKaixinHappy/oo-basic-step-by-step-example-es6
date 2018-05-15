
import Person from "../../src/practice_3/person.js";

function Student(name, age, klass) {
    Person.call(this, name, age);
    this.klass = klass;
}
Student.prototype = new Person();

Student.prototype.introduce = function () {
    return `I am a Student. I am at Class ${this.klass}.`;
};

module.exports = Student;
