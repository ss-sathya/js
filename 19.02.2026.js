// let array = [];
// array[4] = "hi";
// array.forEach(i => console.log(i));

// setTimeout((a, b) => {
//     console.log(a + b);
// }, 0, 12, 23, 7)


// const pure = function (value) {
//     return value + 200;
// }
// console.log(pure(40));

// let count = 0;
// function incrementCount() {
//     count++;
// }
// incrementCount();
// incrementCount();

// const impure = function () {
//     return Math.floor(Math.random() * 10);
// }

// console.log(impure())

function greet() {
    console.log("Hey Sathya");
}

greet();
console.log(greet())

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}


const handleSearch = debounce(() => {
    console.log("API Call");
}, 50);

const input = document.getElementById("search");

input.addEventListner('keyup', handleSearch)