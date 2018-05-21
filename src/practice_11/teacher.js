import Person from "../../src/practice_11/person.js";
function Teacher(id, name, age, klasses) {
    Person.call(this, id, name, age);
    this.klasses = klasses;
}
Teacher.prototype = new Person();
Teacher.prototype.introduce = function () {
    let intro = [];
    intro[0] = `${Person.prototype.introduce.call(this, arguments)} I am a Teacher.`;
    if (this.klasses === null || this.klasses === undefined) {
        intro[1] = 'I teach No Class.';
    } else {
        let klassesNum = [];
        for (let klass of this.klasses) {
            klassesNum.push(klass.number);
        }
        intro[1] = `I teach Class ${klassesNum.join(", ")}.`;
    }
    return intro.join(' ');
};
Teacher.prototype.isTeaching = function (student) {
    return this.klasses.filter(klass=>klass.isIn(student)) !== undefined;
};
Teacher.prototype.assignLeader = function (student) {
    console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
};

Teacher.prototype.appendMember = function (student) {
    console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.klass.number}.`);
};
module.exports = Teacher;


