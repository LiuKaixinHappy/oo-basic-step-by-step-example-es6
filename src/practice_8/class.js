function Class(number) {
    this.number = number;
    this.leader = undefined;
}
Class.prototype.getDisplayName = function () {
    return `Class ${this.number}`;
};
Class.prototype.assignLeader = function(student) {
    this.leader = student.id;
};
module.exports = Class;

