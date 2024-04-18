import { Component, Input } from '../../decorators';

export
@Component({
    identifier:"todo-item", 
    templateURL: "src/components/TodoItem/TodoItem.component.html",
    styleURL: "src/components/TodoItem/TodoItem.component.css"
})
class TodoItem  {
    constructor() {}

    @Input 
    name;

    sayHello() {
        console.log('Hello');
    }
}