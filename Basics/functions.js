function greet(name) {
    return "Hello, " + name + "!";
}


console.log(greet("Sushant"));


/* Check positive/negative */
function ispositive(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(ispositive(5));
console.log(ispositive(-3));
console.log(ispositive(0));


console.log("************************");


/* Largets two numbers*/

// function largets(num1, num2){
//     if(num1>num2){
//         return num1 + " is larger than " + num2;
//     } else if(num2>num1){
//         return num2 + " is larger than " + num1;
//     } else {
//         return "Both numbers are equal.";
//     }
// }

// result=largets(150,200);
// console.log(result);


function largestNum(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + "is greater than " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " is Greater than" + num1);
    } else {
        console.log("Number " + num1, num2 + " Both Numbers are equal")
    }
}
let result = largestNum(25, 25)
console.log(result);
console.log(largestNum(105, 801));


/* Functions - A block of code  used to perform specific task */
// basic function syntax

greet();

// Function Expression - A function Assigned to a varibale
const welcome = function greet() {
    console.log("Hello Sushant");
}

//Arrow Function (ES6) - Short syntax for writing functions.

const mul = (a, b) => {
    return a * b;
}
console.log(mul(10, 20));


// CAllBACK Function - A function passed as an argument to another function.

function greet2(name, callback, s) {
    console.log("Hello " + name);
    callback();
    s();
}
function bye() {
    console.log("Bye");
}
function seeU() {
    console.log(" See U again ");
}

greet2("Sushant", bye, seeU);


/*Anonymous Function - Function without a name. */

setTimeout(function () {
    console.log("Hello from Sushant ");
},5000);



const user = {
  name: "Rahul",
  age: 22,
  isStudent: true
};

console.log("Object users "+ user.name);

user.city ="Pune";

console.log(user);
