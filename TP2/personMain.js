"use strict";
exports.__esModule = true;
var person_1 = require("./person");
function main() {
    var toto = new person_1.Person("Toto", "foo@example.com", new Date("2000-09-05"));
    console.log(toto.getName() + " was born on " + toto.getBirthDate());
    console.log("It was " + person_1.computeDaysSinceBirth(toto) + " days ago");
}
function main2() {
    var stdin = process.stdin;
    stdin.setEncoding("utf-8");
    var _a = [null, null, null], name = _a[0], email = _a[1], birthDate = _a[2];
    var prompts = ["Please enter the name",
        "Please enter the email address",
        "Please enter the birth date"];
    var getStep = function () {
        if (name === null)
            return 0;
        else if (email === null)
            return 1;
        else if (birthDate === null)
            return 2;
        else
            return 3;
    };
    var person;
    stdin.on("data", function (data) {
        switch (getStep()) {
            case 0:
                name = data.toString().trim();
                break;
            case 1:
                email = data.toString().trim();
                break;
            case 2:
                birthDate = new Date(data.toString().trim());
                break;
        }
        // display the next prompt
        var step = getStep();
        if (step < prompts.length)
            console.log(prompts[step]);
        else {
            person = new person_1.Person(name, email, birthDate);
            console.log(person.getName() + " was born on " + person.getBirthDate());
            console.log("It was " + person_1.computeDaysSinceBirth(person) + " days ago");
            process.exit();
        }
    });
    // display the first prompt
    console.log(prompts[0]);
}
main2();
