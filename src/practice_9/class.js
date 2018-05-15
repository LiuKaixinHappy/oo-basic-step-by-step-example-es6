function Class(number) {
    this.number = number;
    this.leader = undefined;
}
Class.prototype.getDisplayName = function () {
    return `Class ${this.number}`;
};
Class.prototype.assignLeader = function (student) {
    if (this.number === student.klass.number) {
        student.klass.leader = student;
    } else {
        console.log('It is not one of us.');
    }
};
Class.prototype.appendMember = function (student) {
    student.klass = this;
};
module.exports = Class;

