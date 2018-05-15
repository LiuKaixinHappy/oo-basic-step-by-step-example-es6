import Person from "../../src/practice_5/person.js";

function Worker(name, age) {
    Person.call(this, name, age);
}
Worker.prototype = new Person();
Worker.prototype.introduce = function() {
    return `${Person.prototype.introduce.call(this, arguments)} I am a Teacher. I have a job.`;
};
module.exports = Worker;



