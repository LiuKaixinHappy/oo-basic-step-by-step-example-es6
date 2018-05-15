import Person from "../../src/practice_6/person.js";

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
        intro[1] = `I teach Class ${this.klass}.`;
    }
    return intro.join(' ');
};
module.exports = Teacher;




