
console.log(a);

var a; // undefined

// console.log(b); 
// let b=10;  // ReferenceError: Cannot access 'b' before initialization

// console.log(c);
// const c=20; // ReferenceError: Cannot access 'c' before initialization

hello(); // Hello, Sushant it woeks because of function hoisting
function hello() {
    console.log("Hello, Sushant ");
}

