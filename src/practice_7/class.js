function Class(number) {
    this.number = number;
    this.getDisplayName = function () {
        return `Class ${number}`;
    }
}

module.exports = Class;
