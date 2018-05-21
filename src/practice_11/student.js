import Person from "../practice_11/person";

function Student(id, name, age, klass) {
    Person.call(this, id, name, age);
    this.klass = klass;
}
Student.prototype = new Person();
Student.prototype.introduce = function () {
    let intro = [];
    intro[0] = `${Person.prototype.introduce.call(this, arguments)} I am a Student.`;
    if (this.klass.leader === this) {
        intro[1] = `I am Leader of Class ${this.klass.number}.`;
    } else {
        intro[1] = `I am at Class ${this.klass.number}.`;
    }
    return intro.join(' ');
};

module.exports = Student;

