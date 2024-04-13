import * as pages from '../pages/index.js';
import { render } from '../decorators';
export function start() {
    const currentURL = window.location.href;
    const parts = currentURL.split('/');
    const route = parts[parts.length - 1];
    render(route);
}