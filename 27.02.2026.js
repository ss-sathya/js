function throttle(fn, delay) {
    let t = 0;
    return function (...args) {
        let now = Date.now();
        if (now - t >= delay) {
            fn.apply(this, args);
            t = now;
        }
    };
}

function hey() {
    console.log("Hey Sathya");
}

const throttledHey = throttle(hey, 1000);

console.log(throttledHey());