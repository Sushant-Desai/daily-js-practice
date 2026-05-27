/* 
What is Closure in JavaScript?
Closures -
A closure is created when a function remembers variables from its outer scope 
even after the outer function has finished execution.
*/

// Example of clousure

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
        // console.log(a);
    }
    return inner;
}

const counter = outer();

counter();//1
counter();//2
counter();//3



// function greet(name) {

//     return function () {
//         console.log("Hello " + name);
//     };
// }

// const user = greet("Sushant");

// user();

// can i right above  code like this
function greet(name) {
    name = "Sushant Desai";
    function greet2() {
        return "Hello " + name;
    };

    return greet2;
}

const user = greet("Sushant");

console.log(user());

// Data Hiding using closure

function bankaccount() {

    // Private variable
    let balance = 0;

    // Return object with methods
    return {

        // Add money
        deposite(amount) {
            balance += amount;

            console.log(balance);
        },

        // Show current balance
        getBalance() {
        // console.log(balance);
          return  `Balance is ${balance}`
        }
    };
}

// Create account
const account = bankaccount();

// Initial balance
console.log("Initial Amount "+ account.getBalance());
;

// Deposit amount
account.deposite(40000);
account.deposite(20000)
// Check balance again
console.log("Your balance is "+account.getBalance());



// Create Counter increment()

function SelfCounter(){
    let counter=0;
    function increment(){
        counter++;
      console.log("Counter  is  "+counter);
      
    }
    return increment;

}
const increment = SelfCounter()

increment();
increment();
increment();
increment();


console.log("Simple Asynchronous example ")

console.log("a");

setTimeout(()=>{
    console.log("B");
    
},1000)
console.log("C");
console.log("C");
console.log("C");
console.log("C");
console.log("C");



