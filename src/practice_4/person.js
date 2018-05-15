function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.basic_introduce = function () {
    return `My name is ${this.name}. I am ${this.age} years old.`;
};
Person.prototype.introduce = function () {
    return this.basic_introduce();
};
module.exports = Person;

