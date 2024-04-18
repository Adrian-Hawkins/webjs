export function Input(target, key, descriptor) {
    Reflect.defineMetadata('custom:input', true, target, key);
    return descriptor;
}
  