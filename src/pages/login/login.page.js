import { log, page } from '../../decorators';
import { BasePage } from '../Base.page';

@page({
    route:"login", 
    templateURL: "login.page.html"
})
class login extends BasePage {
    constructor() {
        super();
        this.name = "";
        this.age = "";
    }
    getAge() {
        return `${this.name} is ${this.age} years old.`;
    }

    sayHello() {
        console.log('Hello');
    }
}