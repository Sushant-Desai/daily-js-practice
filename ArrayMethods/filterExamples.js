// filters examples

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];    
const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0; // here we are checking if the number is even by using the modulus operator. If the number is even, it will return true and be included in the evenNumbers array.
});
console.log(evenNumbers); // here we are printing the even numbers on the console. The output will be [2, 4, 6, 8, 10].

 // odd numbers example
const numbers2 = [1, 2, 3, 4, 5, 6];

const oddNumbers = numbers2.filter((n) => {
    return n % 2 !== 0;
});

console.log(oddNumbers);

// Real object example

const students = [
    { id: 1, name: "Sushant", age: 25 },
    { id: 2, name: "Mauli", age: 22 },
    { id: 3, name: "Shubham", age: 28 }
];

const findID = students.filter((s)=>{
    return s.id ===1;
}) 

console.log(findID);


// one more example for products
const products = [
    { id: 1, name: "Laptop", price: 38800 },
    { id: 2, name: "Phone", price: 45500 },
    { id: 3, name: "Tablet", price: 25300 }
];
const expensiveProducts = products.filter((p) => {
    return  p.price > 30000;
});

console.log(expensiveProducts); 

//filters with name
const names = ["Aman", "Ravi", "Shubham Wable", "John Doe"];

const longNames = names.filter((name) => {
    return name.length > 4;
});

console.log(longNames);