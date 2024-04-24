/**
 * Create a web component in a more user friendly way
 * @param {string} identifier
 * @returns web component
 */
export function Component(identifier) {
    return function (constructor) {
        customElements.define(identifier, constructor)
        return constructor;
    }
}