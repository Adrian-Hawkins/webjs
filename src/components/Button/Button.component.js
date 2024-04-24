import { Component } from '../../decorators';

export
@Component({
    identifier:"button-comp"
})
class Button {
    constructor() {
    }

    render() {
        return html`
            <button>Click me</button>
        `
    }
}