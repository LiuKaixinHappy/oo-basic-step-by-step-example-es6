function Class(number) {
    this.number = number;
}
Class.prototype.getDisplayName = function () {
    return `Class ${this.number}`;
};
module.exports = Class;
