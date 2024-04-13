const routes = {};
// Page decorator
export function page({route, templateURL}) {
    return function (constructor) {
        if (typeof constructor.prototype.render !== 'function') {
            throw new Error(`Class ${constructor.name} page does not have a render method.`);
        }
        routes[route] = new constructor();
        routes[route].registerPage(templateURL, route);
        console.log(`Page: ${route}`);
        return constructor;
    }
}

export function render(route) {
    if (routes[route]) {
        routes[route].render();
    } else {
        throw new Error(`Page ${route} not found.`);
    }
}
