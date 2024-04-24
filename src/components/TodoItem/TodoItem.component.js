import { Component, log } from '../../decorators';
import { Eelm } from '../Eelm';
import { html } from '../html';
import { css } from '../css';

export
@Component("todo-item")
class TodoItem extends Eelm {

    constructor() {
        super();
    }
    static css = css`
        .test {
            color: green;
        }
        .todo-item {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-bottom: 1px solid #ccc;
        }
    `

    static properties = {
        count: { type: Number, value: 0 }
    }

    sayHello() {
        console.log('Hello');
    }
    

    render() {
        return html`
            <button onclick="sayHello(4)">Click me</button>
            <p>${this.getAttribute('count')}</p>
            <h1 class="test">Todo Item</h1>
        `
    }

}