/**
 * Create a web component in a more user friendly way
 * @param {string} identifier
 * @param {string} routetemplateURL 
 * @returns web component
 */
export function Component({identifier, templateURL}) {
    return function (constructor) {
        class ExtendedClass extends HTMLElement {
            constructor() {
                super();
                this.loadTemplate();
            }
            async loadTemplate() {
                try {
                    let args = templateURL.split('.');
                    args.forEach(e => console.log(e));
                    const response = await fetch(`src/components/${args[0]}/${templateURL}`);
                    let html = await response.text();
                    html += `<link rel="stylesheet" href="src/components/${args[0]}/${args[0]}.${args[1]}.css">`;
                    html += `<script src="src/components/${args[0]}/${args[0]}.${args[1]}.js"></script>`;
                    this.innerHTML = html;
                } catch (error) {
                    console.error("Error loading template:", error);
                }
            }
        }
        Object.getOwnPropertyNames(constructor.prototype).forEach(name => {
            ExtendedClass.prototype[name] = constructor.prototype[name];
        });
        customElements.define(identifier, ExtendedClass);
        window[constructor.name] = ExtendedClass;
        return constructor;
    }
}