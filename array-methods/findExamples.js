/*
Find Examples

1. Find the first even number in an array of integers.
2. Find the first string that starts with a specific letter in an array of strings.
3. Find the first object in an array of objects that has a specific property value.
*/ 

const numbers = [1, 3, 5, 6, 7, 8];

const firstEven = numbers.find((num) => {
    return num % 2 === 0; // here we are checking if the number is even by using the modulus operator. If the number is even, it will return true and be assigned to the firstEven variable.
});
console.log(firstEven); // here we are printing the first even number on the console. The output will be 6, as it is the first even number in the array.

// example for strings
const names = ["Sushant", "Chinmay ", "Charlie", "Damodar"];
const firstNameWithC = names.find((name) => {
    return name.startsWith("C"); // here we are checking if the name starts with the letter "C" using the startsWith method. If it does, it will return true and be assigned to the firstNameWithC variable.
});
console.log(firstNameWithC); // Chinmay


// Find User By ID

const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Neha" }
];

const user = users.find((u) => {
    return u.id === 2;
});

console.log(user);


// expensive product example

const products = [
    { id: 1, name: "Laptop", price: 38800 },
    { id: 2, name: "Phone", price: 45500 },
    { id: 3, name: "Tablet", price: 25300 }
];

const expensiveProduct = products.find((p) => {
    return p.price > 40000;
});

console.log(expensiveProduct);
