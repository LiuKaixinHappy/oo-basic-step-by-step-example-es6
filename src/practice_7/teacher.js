import Person from "../../src/practice_7/person.js";
function Teacher(name, age, klass) {
    Person.call(this, name, age);
    this.klass = klass;
}
Teacher.prototype.introduce = function () {
    let intro = [];
    intro[0] = `${Person.prototype.introduce.call(this, arguments)} I am a Teacher.`;
    if (this.klass === null || this.klass === undefined) {
        intro[1] = 'I teach No Class.';
    } else {
        intro[1] = `I teach Class ${this.klass.number}.`;
    }
    return intro.join(' ');
};
Teacher.prototype.introduceWith = function (student) {
    let introWith = [];
    introWith[0] = `${Person.prototype.introduce.call(this, arguments)} I am a Teacher.`;
    if (student.klass.number === this.klass.number) {
        introWith[1] = `I teach ${student.name}.`;
    } else {
        introWith[1] = `I don't teach ${student.name}.`
    }
    return introWith.join(' ');
};

module.exports = Teacher;





