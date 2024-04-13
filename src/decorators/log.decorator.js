export function log (value, {kind, name}) {
    if(kind === 'method') {
        return function(...args) {
            console.log(`${name} decorator logged at: ${new Date().toLocaleString()}`);
            try {
                const result = value.apply(this, args);
                return result;
            } catch(e) {
                console.error(e);
                throw e;
            }
        }
    }
}