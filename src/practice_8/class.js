function Class(number) {
    this.number = number;
    this.leader = undefined;
}
Class.prototype.getDisplayName = function () {
    return `Class ${this.number}`;
};
Class.prototype.assignLeader = function(student) {
    student.klass.leader = student;
};
module.exports = Class;

