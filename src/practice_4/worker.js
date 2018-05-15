import Person from "../../src/practice_4/person.js";

function Worker(name, age) {
    Person.call(this, name, age);
}
Worker.prototype = new Person();
Worker.prototype.introduce = function () {
    return `${this.basic_introduce()} I am a Worker. I have a job.`;
};
module.exports = Worker;


