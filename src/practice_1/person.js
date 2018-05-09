function Person(name, age) {
    let person = {};
    person.name = name;
    person.age = age;
    person.introduce = function () {
        return `My name is ${name}. I am ${age} years old.`;
    };
    return person;
}
module.exports = Person;