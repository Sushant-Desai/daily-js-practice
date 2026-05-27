console.log("Basic Js ");


//Varibales and Data Types
let name = "Sushant"
let age = Number;
let isEmployee = true;

console.log(name);
console.log(age);
console.log(isEmployee);

console.log("***********************************");

//Operators
let a = 10;
let b = 5;
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));

console.log("***********************************");

//Condtions 

let age2 = 18;

if (age2 >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}


var s = "Sushant";
s = "Shubham"
console.log(s);

let s1 = "Sushant";
s1 = "Shubham"
console.log(s1);

// const s2= "Sushant";
// s2="Shubham"
// console.log(s);



/* var function scope we can use outside the fuction scope */
function test (){
    if(true){
        var name= "Sushant"
    }

    console.log("Test Functions value "+name) // it will work for var it is accesibale outside the block 
}
test()
console.log("testing for var access "+name);

/* let and const function scope  */

function test2() {
    if (true) {
        let city = "Pune"
    }
    console.log(city); // it gives an error we can not  access the varibale of let and const outside the block or scope
}
 test2();