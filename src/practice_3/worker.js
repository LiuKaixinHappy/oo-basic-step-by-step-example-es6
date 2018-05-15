
import Person from "../../src/practice_3/person.js";

function Worker(name, age) {
    Person.call(this, name, age);
}
Worker.prototype = new Person();
Worker.prototype.introduce = function() {
    return `I am a Worker. I have a job.`;
};
module.exports = Worker;

