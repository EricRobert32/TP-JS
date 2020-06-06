export interface Namable {
    getName();
}

export interface Born {
    getBirthDate();
}

export interface Addressable {
    getEmailAdress();
}

export function computeDaysSinceBirth(person:Person) {
    let date = new Date();
    let diff = date.getTime()-person.getBirthDate().getTime();
    return diff;

}

export class Person implements Addressable,Born,Namable{
    private name: string;
    private Bdate: Date;
    private mail: string;

    constructor(name: string, mail: string, Bdate: Date) {
        this.mail = name;
        this.Bdate = Bdate;
        this.name = name;
    }

    getBirthDate() {
        return this.Bdate;
    }

    getEmailAdress() {
        return this.mail;
    }

    getName() {
        return this.name;
    }
//

}