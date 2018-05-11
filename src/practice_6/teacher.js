import Person from "../../src/practice_6/person.js";


function Teacher(name, age, klass) {
    Person.call(this, name, age);
    this.klass = klass;
    if (arguments.length < 3) {
        this.introduce = function () {
            return `My name is ${name}. I am ${age} years old. I am a Teacher. I teach No Class.`;
        };
    } else {
        this.introduce = function () {
            return `My name is ${name}. I am ${age} years old. I am a Teacher. I teach Class ${klass}.`;
        };
    }
}
module.exports = Teacher;




