const logger = message => console.log(message);

logger('hello');

class Human {
    constructor(name){
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const human = new Human('Polly');

human.getName();

const x = [1, 2, 3].reduce((acc, el) => acc + el, 0);

console.log(x);
