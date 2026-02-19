function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(sum(1)(2)(3));

const add5 = sum(5);

console.log(add5(10)(15));

