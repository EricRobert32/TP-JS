export function computeDaysSinceBirth(person) {
    var date = new Date();
    var diff = date.getTime() - person.getBirthDate().getTime();
    return diff;
}
var Person = /** @class */ (function () {
    function Person(name, mail, Bdate) {
        this.mail = name;
        this.Bdate = Bdate;
        this.name = name;
    }
    Person.prototype.getBirthDate = function () {
        return this.Bdate;
    };
    Person.prototype.getEmailAdress = function () {
        return this.mail;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
export { Person };
