function Class(number) {
    this.number = number;
    this.leader = undefined;
    this.notify = undefined;
}

Class.prototype.getDisplayName = function () {
    return `Class ${this.number}`;
};
Class.prototype.assignLeader = function (student) {
    if (this.isIn(student)) {
        student.klass.leader = student;
        if (this.notify !== undefined) {
            this.notify.assignLeader(student);
        }
    } else {
        console.log('It is not one of us.');
    }
};
Class.prototype.appendMember = function (student) {
    student.klass = this;
    if (this.notify !== undefined) {
        this.notify.appendMember(student);
    }
};
Class.prototype.isIn = function (student) {
    return this.number === student.klass.number;
};
Class.prototype.registerAssignLeaderListener = function (teacher) {
    this.notify = teacher;
};
Class.prototype.registerJoinListener = function (teacher) {
    this.notify = teacher;
};
module.exports = Class;


