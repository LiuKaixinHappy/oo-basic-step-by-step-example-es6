import Person from "../../src/practice_7/person.js";


function Teacher(name, age, klass) {
    Person.call(this, name, age);
    this.klass = klass;
    if (arguments.length < 3) {
        this.introduce = function () {
            return `My name is ${name}. I am ${age} years old. I am a Teacher. I teach No Class.`;
        };
    } else {
        this.introduce = function () {
            return `My name is ${name}. I am ${age} years old. I am a Teacher. I teach Class ${klass.number}.`;
        };
    }
    this.introduceWith = function (student) {
        if (student.klass.number === this.klass.number) {
            return `My name is ${name}. I am ${age} years old. I am a Teacher. I teach ${student.name}.`;
        }
        return `My name is ${name}. I am ${age} years old. I am a Teacher. I don't teach ${student.name}.`
    };
}
module.exports = Teacher;





