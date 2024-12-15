function throttle(fn,limit) {
    let shouldWait = false;
    return function (...args) {
        if (!shouldWait) {
            fn.apply(this,args)
            shouldWait = true
        }

        setTimeout(()=>{
            shouldWait =false
        }, limit)
    }
}