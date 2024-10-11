function PromiseResolve(value) {
    if(value instanceof Promise){
        return value;
    }
    return new Promise.resolve(value)
}