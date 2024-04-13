import { log } from '../decorators';

export class BasePage {
    constructor() {}

    registerPage(pathway, route) {
        this.pathway = pathway;
        this.route = route;
    }
    
    async render() {
        try {
            const response = await fetch(`src/pages/${this.route}/${this.pathway}`);
            let html = await response.text();
            html += `<link rel="stylesheet" href="src/pages/${this.route}/${this.route}.page.css">`;
            html += `<script src="src/pages/${this.route}/${this.route}.page.js"></script>`;
            const app = document.getElementById('app');
            app.innerHTML = html;
        } catch (error) {
            console.error(`Failed to load page: ${this.pathToPage}`, error);
        }
    }
}