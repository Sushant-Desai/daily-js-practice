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
        console.log("Number "+num1 ,num2 + " Both Numbers are equal")
    }
}
let result=largestNum(25,25)
console.log(result);
console.log(largestNum(105,801));
