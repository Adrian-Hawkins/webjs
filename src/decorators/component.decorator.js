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

        const inputProperties = [];
        Object.keys(constructor.prototype).forEach((key) => {
            const hasInputMetadata = Reflect.getMetadata('custom:input', constructor.prototype, key);
            if (hasInputMetadata) {
                // inputProperties.push(key);
                console.log('inputProperties', key);
            }
        });

        customElements.define(identifier, ExtendedClass);
        window[constructor.name] = ExtendedClass;
        return constructor;
    }
}