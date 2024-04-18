/**
 * Create a web component in a more user friendly way
 * @param {string} identifier
 * @param {string} routetemplateURL
 * @returns web component
 */
export function Component({identifier, templateURL, styleURL}) {
    return function (constructor) {
        class ExtendedClass extends HTMLElement {
            constructor() {
                super();
                this.loadTemplate();
            }
            async loadTemplate() {
                try {
                    const response = await fetch(`${templateURL}`);
                    let html = await response.text();
                    html += `<link rel="stylesheet" href="${styleURL}">`;
                    this.innerHTML = html;
                } catch (error) {
                    console.error("Error loading template:", error);
                }
            }
        }

        Object.getOwnPropertyNames(constructor.prototype).forEach(name => {
            ExtendedClass.prototype[name] = constructor.prototype[name];
        });
        
        Object.getOwnPropertyNames(constructor).forEach(prop => {
            ExtendedClass.prototype[prop] = constructor.prototype[prop];
        });

        customElements.define(identifier, ExtendedClass);
        window[constructor.name] = ExtendedClass;
        return constructor;
    }
}