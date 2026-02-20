function add(a) {
    let sum = a;

    return function next(b) {
        if (b === undefined) {
            return sum;
        }
        sum += b;
        return next;
    };
}

console.log(add(1)(2)())