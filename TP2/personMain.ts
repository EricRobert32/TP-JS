import {computeDaysSinceBirth, Person} from "./person";
declare var process : any;
function main() {
    let toto = new Person("Toto", "foo@example.com", new Date("2000-09-05"));
    console.log(toto.getName() + " was born on " + toto.getBirthDate());
    console.log("It was " + computeDaysSinceBirth(toto) + " days ago")

}

function main2() {

    let stdin = process.stdin;
    stdin.setEncoding("utf-8");
    let [name, email, birthDate]: [string|null, string|null, Date|null] = [null, null, null];
    let prompts = [ "Please enter the name",
        "Please enter the email address",
        "Please enter the birth date" ];
    let getStep = function() {
        if (name === null) return 0;
        else if (email === null) return 1;
        else if (birthDate === null) return 2;
        else return 3;
    };
    let person: Person;
    stdin.on("data", (data) => {
        switch (getStep()) {
            case 0: name = data.toString().trim(); break;
            case 1: email = data.toString().trim(); break;
            case 2: birthDate = new Date(data.toString().trim()); break;
        }
        // display the next prompt
        let step = getStep();
        if (step < prompts.length)
            console.log(prompts[step]);
        else {
            person = new Person(name, email, birthDate);
            console.log(`${person.getName()} was born on ${person.getBirthDate()}`);
            console.log(`It was ${computeDaysSinceBirth(person)} days ago`);
            process.exit();
        }
    });
    // display the first prompt
    console.log(prompts[0]);


}

main2();
