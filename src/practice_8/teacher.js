import Person from "../../src/practice_8/person.js";
function Teacher(id, name, age, klass) {
    Person.call(this, id, name, age);
    this.klass = klass;
}
Teacher.prototype = new Person();
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

module.exports = Teacher;
