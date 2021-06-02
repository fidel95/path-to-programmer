class Person {
    constructor() {
    }

    findAge(birthYear, currentYear) {
        //basic operation to find someones birthday
        const age = currentYear - birthYear;
        return console.log(age);
        
    }

    whoIsIt() {
        return console.log(findAge(this.birthYear,this.currentYear))
    }

}


const who = new Person();

who.whoIsIt();