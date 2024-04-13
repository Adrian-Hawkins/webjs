import { log, page } from '../../decorators';
import { BasePage } from '../Base.page';

@page({
    route: "person", 
    templateURL: "person.page.html"
})
class person extends BasePage{
    constructor() {
        super();
        this.name = "";
        this.age = "";
    }

    @log
    getAge() {
        return `${this.name} is ${this.age} years old.`;
    }
}